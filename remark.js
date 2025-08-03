const fs = require('fs');
const path = require('path');
const unified = require('unified');
const vfile = require('to-vfile');
const remarkParse = require('remark-parse');
const remarkBreaks = require('remark-breaks');
const remarkToc = require('remark-toc');
const remarkStringify = require('remark-stringify');

function getMarkdownFiles(dir) {
  let results = [];
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat && stat.isDirectory()) {
      results = results.concat(getMarkdownFiles(fullPath));
    } else if (file.endsWith('.md')) {
      results.push(fullPath);
    }
  });
  return results;
}

const markdownFiles = getMarkdownFiles('./utils-chain/');
let pending = markdownFiles.length;

if (pending === 0) {
  console.log('ℹ️ No Markdown files found.');
  process.exit(0);
}

markdownFiles.forEach(input => {
  unified()
    .use(remarkParse)
    .use(remarkBreaks)
    .use(remarkToc, {
      heading: 'TABLE OF CONTENTS',
      maxDepth: 3
    })
    .use(remarkStringify)
    .process(vfile.readSync(input), function (err, file) {
      if (err) {
        console.error(`❌ Error processing ${input}:`, err);
        pending--;
        if (pending === 0) process.exit(0);
        return;
      }

      const newContent = String(file);
      fs.writeFile(input, newContent, function (err) {
        if (err) {
          console.error(`❌ Error writing ${input}:`, err);
        } else {
          console.log(`✅ TOC updated: ${input}`);
        }

        pending--;
        if (pending === 0) {
          console.log('🏁 All Markdown files processed.');
          process.exit(0);
        }
      });
    });
});