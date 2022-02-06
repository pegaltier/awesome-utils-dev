
# SECURITY

## BASICS

- https://websecurity-academy.com/
- https://github.com/danielmiessler/SecLists
- https://github.com/tadwhitaker/Security_Engineer_Interview_Questions

## NEWS

- https://www.darkreading.com/

## PAPERS
- guidovranken.files.wordpress.com/2018/07/vrankenfuzz.pdf
- crypto.stanford.edu/~dabo/cryptobook/BonehShoup_0_4.pdf

## ENCRYPTION
- en.wikipedia.org/wiki/Caesar_cipher
- www.bouncycastle.org/

## TOOLS ONLINE
- https://keepass.info/
- https://securitytxt.org/
- https://www.srihash.org/
- https://www.virustotal.com
- https://securityheaders.com
- https://www.dashlane.com/fr/
- https://guardianproject.info/apps/pixelknot/
- https://security.stackexchange.com/questions/8476/how-difficult-to-crack-keepass-master-password

## TOOLS OSS
- https://github.com/Authenticator-Extension/Authenticator
- https://github.com/th3unkn0n/facebash-termux
- https://github.com/DontPanicO/jwtXploiter
- https://github.com/ndelphit/apkurlgrep
- https://github.com/chenjj/CORScanner
- https://github.com/hashcat/hashcat

## WEB SCAM / VIRUS
- safebrowsing.google.com/safebrowsing/report_phish/?hl=en

## BUG BOUNTY / SECURITY BOUNTY
- www.hackerone.com/
- www.bugcrowd.com/
- www.yogosha.com/

## UTILS
- https://github.com/OWASP/www-project-vulnerable-web-applications-directory
- https://github.com/payloadbox/sql-injection-payload-list
- https://kaimi.io/en/2019/03/pentest-101-web-wordlists/
- https://github.com/aleedhillon/7000-Google-Dork-List
- https://github.com/correlatedsecurity/Awesome-SOAR
- https://github.com/kaimi-io/web-fuzz-wordlists
- https://github.com/dloss/python-pentest-tools
- https://github.com/roya0045/Pentest-practice
- https://github.com/onlurking/awesome-infosec
- https://github.com/crowdsecurity/crowdsec
- https://github.com/ivan-sincek/forbidden
- https://github.com/dwmkerr/hacker-laws
- https://github.com/htr-tech/zphisher
- https://github.com/NullArray/DorkNet
- https://github.com/0xffsec/handbook
- https://github.com/B-i-t-K/PwnFox
- https://github.com/m4ll0k/Atlas
- https://github.com/OWASP/Amass
- https://github.com/f13end


## FRONTEND SECURITY
- Same-Origin Policy (SOP)
- Cross-Origin Resource Sharing (CORS)
- Cross-Site Scripting (XSS)
- Content Security Policy (CSP)
- WebSocket Security.

### Anti debugging
- https://medium.com/@weizmangal/javascript-anti-debugging-some-next-level-sh-t-part-2-abusing-chromium-devtools-scope-pane-b2796c00331d

### SOP: What is allowed and what is not?
-Cross-origin writes are typically allowed: links, redirects, form submissions,
-Cross-origin embedding is typically allowed: scripts, lib, css, images...
-Cross-origin reads are typically prohibited: request is executed to the server and received by the browser but then it's blocked by the browser if header is incorrect.

### Implicit vs explicit authentification
-Implicit is automatically done by the browser at each request (even cross-origin): cookies, http basic auth, tls client certificates
-Explicit is done manually by the developer: session token via header/body...

### CSRF attack only works if the server accepts
-Write operations via GET, POST or HEAD
-Implicit authentification (eg: cookies) and no explicit authentification (no non-standard header) (because a preflight OPTIONS will be used)
-Standard HTML form content types: x-www-form-urlencoded or multipart/form-data or text/plain

### CSRF protection checklist
-Distinguish GET from non-GET on the server side
-Use explicit auth or include CSRF token and check it on the server side OR
-Only accept a non-standard format (ex JSON) for non GET requests OR
-Set a non-standard header ok a combination of these
-As defense in depth: set the SameSite cookie attribute

### CORS
-It allows cross-origin requests in a controlled way