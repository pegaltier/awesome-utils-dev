
## PAPERS
https://guidovranken.files.wordpress.com/2018/07/vrankenfuzz.pdf
https://crypto.stanford.edu/~dabo/cryptobook/BonehShoup_0_4.pdf

## ENCRYPTION
https://en.wikipedia.org/wiki/Caesar_cipher
https://www.bouncycastle.org/

## TOOLS
https://www.srihash.org/
https://securityheaders.com
https://www.dashlane.com/fr/
https://guardianproject.info/apps/pixelknot/
https://github.com/Authenticator-Extension/Authenticator
https://keepass.info/
https://security.stackexchange.com/questions/8476/how-difficult-to-crack-keepass-master-password
https://www.virustotal.com
https://github.com/ndelphit/apkurlgrep
https://github.com/chenjj/CORScanner

## WEB SCAM / VIRUS
https://safebrowsing.google.com/safebrowsing/report_phish/?hl=en

## BUG BOUNTY / SECURITY BOUNTY
https://www.hackerone.com/
https://www.bugcrowd.com/
https://www.yogosha.com/

## FRONTEND SECURITY
- Same-Origin Policy (SOP)
- Cross-Origin Resource Sharing (CORS)
- Cross-Site Scripting (XSS)
- Content Security Policy (CSP)
- WebSocket Security.

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