
# NODEJS

## BASIC

- https://github.com/i0natan/nodebestpractices
- https://github.com/goldbergyoni/nodebestpractices
- https://nodesource.com/blog/nine-fantastic-utilities-for-the-node-js-developer
- https://blog.bitsrc.io/npm-tips-and-tricks-24c5e9defea6
- https://nemethgergely.com/nodejs-best-practices-how-to-become-a-better-developer-in-2018/

## NVM

- https://github.com/coreybutler/nvm-windows
- https://github.com/nvm-sh/nvm

## LIST
- https://dev.to/madza/73-awesome-npm-packages-for-productivity-19p8

## UTILS

- https://github.com/juliangruber/npm-diff
- https://github.com/amio/npm-why
- https://github.com/voidcosmos/npkill
- https://github.com/sindresorhus/np
- https://github.com/sindresorhus/fkill-cli
- https://github.com/depcheck/depcheck
- https://www.npmjs.com/package/depcheck
- https://github.com/typicode/husky
- https://github.com/davglass/license-checker
- https://github.com/localtunnel/localtunnel
- https://github.com/radarsu/types-package-json
- https://github.com/SBoudrias/Inquirer.js
- https://github.com/vercel/ncc
- https://github.com/sezna/nps

## MONITORING

- http://pm2.keymetrics.io/

## LIBS

- https://github.com/azz/pretty-quick
- https://github.com/theophilusx/ssh2-sftp-client
- https://github.com/microsoft/playwright
- https://github.com/arcanis/clipanion
- https://github.com/sindresorhus/got

## FRAMEWORKS

- https://github.com/nestjs/nest
- https://github.com/strapi/strapi
- https://github.com/lukeautry/tsoa
- https://github.com/typeorm/typeorm
- https://github.com/sequelize/sequelize
- https://github.com/strongloop/loopback-next

## CLI

- https://docs.npmjs.com/cli/ci.html
- https://michael-kuehnel.de/tooling/2018/03/22/helpers-and-tips-for-npm-run-scripts.html


## NODE UPDATE WINDOWS

1. download & install node : latest version from official website
2. use npm-windows-upgrade to update npm

## COMMANDS


## NPM

### Helper

```
npm list -g --depth 0 (list the global package installed)
npx ... (run directly a global or local package from the node_modules)
npx ngcc (example to run angular ngcc in an angular (v9) project)
```

### Versions

- package version has 3 parts - major.minor.patch
- ^ = latest minor version will be installed
- ~ = latest patch version will be installed

```
npm outdated # check the dep to update
npm update # update all to the wanted
npm update mypackage1 # update one to the wanted
npm update mypackage1 mypackage2 # update many to the wanted
npm install mypackage1@latest # update one to the latest (major)
npx npm-check-updates -u # update all to the latest (major)
```