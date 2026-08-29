#!/usr/bin/env node
/**
 * wip-dedupe.js
 *
 * Reads WIP.md line by line and checks whether each line (a link, or plain text)
 * already exists somewhere else in the repo. Every line that is already there is
 * removed from WIP.md and appended to WIP_DONE.md.
 *
 * Usage:
 *   node wip-dedupe.js            # apply changes
 *   node wip-dedupe.js --dry-run  # only report what would move
 */

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const WIP = path.join(ROOT, 'WIP.md');
const DONE = path.join(ROOT, 'WIP_DONE.md');

const SKIP_DIRS = new Set(['.git', 'node_modules', '.obsidian', '.vscode']);
const SKIP_FILES = new Set(['WIP.md', 'WIP_DONE.md']);
const SCAN_EXT = new Set(['.md', '.txt', '.js', '.ts', '.sh', '.json', '.pine', '.jsx']);

const URL_RE = /https?:\/\/[^\s<>()\[\]"'`]+/gi;
// query params that carry no identity (campaign / tracking noise)
const TRACKING_PARAM = /^(utm_|gad_|gbraid|wbraid|gclid|fbclid|msclkid|mc_cid|mc_eid|igshid|si|ref|ref_src|source)/i;

const dryRun = process.argv.includes('--dry-run');

/** Canonical form of a URL, so cosmetic differences still match. */
function normalizeUrl(raw) {
    let s = raw.trim().replace(/^<+/, '').replace(/>+$/, '').replace(/[.,;:)\]]+$/, '');
    let u;
    try {
        u = new URL(s);
    } catch (e) {
        return null;
    }
    const host = u.hostname.toLowerCase().replace(/^www\./, '');
    const pathname = u.pathname.replace(/\/+$/, '');
    const params = [...u.searchParams.entries()]
        .filter(([k]) => !TRACKING_PARAM.test(k))
        .sort((a, b) => (a[0] + a[1]).localeCompare(b[0] + b[1]))
        .map(([k, v]) => `${k}=${v}`);
    // fragments are anchors inside the same page -> ignored for matching
    return host + pathname + (params.length ? '?' + params.join('&') : '');
}

/** Every file in the repo we compare WIP.md against. */
function walk(dir, out = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (entry.isDirectory()) {
            if (!SKIP_DIRS.has(entry.name)) walk(path.join(dir, entry.name), out);
        } else if (!SKIP_FILES.has(entry.name) && SCAN_EXT.has(path.extname(entry.name))) {
            out.push(path.join(dir, entry.name));
        }
    }
    return out;
}

// --- index the repo ---------------------------------------------------------

const files = walk(ROOT);
const urlIndex = new Map(); // normalized url -> relative file path
const textIndex = []; // { file, content } for plain-text lookups

for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const rel = path.relative(ROOT, file);
    textIndex.push({ file: rel, content: content.toLowerCase() });
    for (const match of content.match(URL_RE) || []) {
        const norm = normalizeUrl(match);
        if (norm && !urlIndex.has(norm)) urlIndex.set(norm, rel);
    }
}

/** Where a WIP line already lives in the repo, or null. */
function findExisting(line) {
    const urls = line.match(URL_RE) || [];
    if (urls.length) {
        for (const url of urls) {
            const norm = normalizeUrl(url);
            if (norm && urlIndex.has(norm)) return urlIndex.get(norm);
        }
        return null;
    }
    // plain text line: needs a literal (case-insensitive) hit somewhere
    const needle = line.trim().toLowerCase();
    if (needle.length < 4) return null;
    const hit = textIndex.find((f) => f.content.includes(needle));
    return hit ? hit.file : null;
}

// --- process WIP.md ---------------------------------------------------------

const wipLines = fs.readFileSync(WIP, 'utf8').split('\n');
const kept = [];
const moved = []; // { line, file }

for (const line of wipLines) {
    if (!line.trim()) {
        kept.push(line);
        continue;
    }
    const found = findExisting(line);
    if (found) moved.push({ line, file: found });
    else kept.push(line);
}

for (const { line, file } of moved) {
    console.log(`- ${line.trim()}\n    already in ${file}`);
}
console.log(`\n${moved.length} line(s) already in the repo, ${kept.filter((l) => l.trim()).length} left in WIP.md`);

if (dryRun) {
    console.log('(dry run: no file written)');
} else if (moved.length) {
    const previous = fs.existsSync(DONE) ? fs.readFileSync(DONE, 'utf8') : '';
    const suffix = previous && !previous.endsWith('\n') ? '\n' : '';
    fs.writeFileSync(DONE, previous + suffix + moved.map((m) => m.line).join('\n') + '\n');
    fs.writeFileSync(WIP, kept.join('\n'));
    console.log(`WIP.md updated, ${moved.length} line(s) appended to WIP_DONE.md`);
}
