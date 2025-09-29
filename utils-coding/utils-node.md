# NODEJS

## TABLE OF CONTENTS

-   [BASIC](#basic)

-   [VERSION MANAGER](#version-manager)

-   [PACKAGE MANAGER](#package-manager)

-   [BUNDLER / BUILDER](#bundler--builder)

-   [STARTER / EXAMPLE / TEMPLATE](#starter--example--template)

-   [LIST](#list)

-   [HOSTING: APP](#hosting-app)

-   [UTILS: NPM](#utils-npm)

-   [UTILS: DEVTOOLS](#utils-devtools)

-   [UTILS: CLEAN / KILL](#utils-clean--kill)

-   [UTILS: ALL](#utils-all)

-   [UTILS: LINK](#utils-link)

-   [UTILS: TYPESCRIPT](#utils-typescript)

-   [MONITORING / LOGGING](#monitoring--logging)

-   [LIBS: ALL](#libs-all)

-   [LIBS: VITE](#libs-vite)

-   [LIBS: VIDEO EDITING / AUDIO](#libs-video-editing--audio)

-   [LIBS: IMAGES](#libs-images)

-   [LIBS: DATA OBJECT / DATA TYPE / BUFFER](#libs-data-object--data-type--buffer)

-   [LIBS: WORKER MULTI THREAD](#libs-worker-multi-thread)

-   [LIBS: UNIT TESTING](#libs-unit-testing)

-   [LIBS: REGEX / BLOG](#libs-regex--blog)

-   [LIBS: HTTP: ALL](#libs-http-all)

-   [LIBS: HTTP: SSE / SERVER SENT EVENT](#libs-http-sse--server-sent-event)

-   [LIBS: USB](#libs-usb)

-   [LIBS: FILES](#libs-files)

-   [LIBS: DOM](#libs-dom)

-   [LIBS: SERVERLESS](#libs-serverless)

-   [LIBS: REQUEST](#libs-request)

-   [LIBS: JOB / SCHEDULER / SCHEDULING](#libs-job--scheduler--scheduling)

-   [LIBS: CRON](#libs-cron)

-   [LIBS: TESTING](#libs-testing)

-   [LIBS: ENV](#libs-env)

-   [LIBS: AUTH / OIDC](#libs-auth--oidc)

-   [LIBS: KEYS](#libs-keys)

-   [LIBS: CACHE](#libs-cache)

-   [LIBS: AI](#libs-ai)

-   [LIBS: CROSS LANGUAGES](#libs-cross-languages)

-   [LIBS: BROKER / SUBSCRIPTION](#libs-broker--subscription)

-   [LIBS: DATABASE / DB: PRISMA](#libs-database--db-prisma)

-   [LIBS: DATABASE / ORM](#libs-database--orm)

-   [LIBS: DATABASE / DB](#libs-database--db)

-   [LIBS: CLI / PROMPTS](#libs-cli--prompts)

-   [LIBS: INSTALL / COMPILE](#libs-install--compile)

-   [LIBS: GAME](#libs-game)

-   [SERVER: PROXY](#server-proxy)

-   [SERVER: EXPRESS/ITTY](#server-expressitty)

-   [SERVER: INFRA](#server-infra)

-   [SERVER: EDGES](#server-edges)

-   [FRAMEWORKS](#frameworks)

-   [BASICS](#basics)

-   [NODE UPDATE WINDOWS](#node-update-windows)

-   [COMMANDS](#commands)

-   [NPM](#npm)

    -   [Helper](#helper)
    -   [Clean](#clean)
    -   [Versions](#versions)

-   [MODULES](#modules)

## BASIC

-   <https://nodejstoolbox.com/>
-   <https://kashw1n.com/blog/nodejs-2025/>
-   <https://github.com/fraxken/ebook_nodejs>
-   <https://github.com/i0natan/nodebestpractices>
-   <https://github.com/microsoft/nodejs-guidelines>
-   <https://github.com/platformatic/node-masterclass>
-   <https://github.com/goldbergyoni/nodebestpractices>
-   <https://github.com/platformatic/the-high-performance-node-workshop>
-   <https://nodesource.com/blog/nine-fantastic-utilities-for-the-node-js-developer>
-   <https://blog.bitsrc.io/npm-tips-and-tricks-24c5e9defea6>
-   <https://nemethgergely.com/nodejs-best-practices-how-to-become-a-better-developer-in-2018/>
-   <https://gist.github.com/khalidx/1c670478427cc0691bda00a80208c8cc> node-typescript-esm.md
-   <https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c> node-pure-esm.md

## VERSION MANAGER

-   <https://github.com/coreybutler/nvm-windows>
-   <https://github.com/asdf-vm/asdf-nodejs/>
-   <https://github.com/volta-cli/volta>
-   <https://github.com/nvm-sh/nvm>
-   <https://github.com/Schniz/fnm>
-   <https://github.com/pnpm/pnpm>
-   <https://github.com/fredrb/nv>
-   <https://github.com/tj/n>

## PACKAGE MANAGER

-   <https://github.com/frehner/modern-guide-to-packaging-js-library>
-   <https://github.com/matiasah/npm-dependency-exclusion>
-   <https://github.com/web-infra-dev/modern.js>
-   <https://github.com/cachix/cachix-action>
-   <https://github.com/time-loop/only-allow>
-   <https://github.com/Thinkmill/manypkg>
-   <https://github.com/cnpm/npminstall>
-   <https://github.com/SukkaW/nolyfill>
-   <https://github.com/moonrepo/proto>
-   <https://github.com/vltpkg/vltpkg>
-   <https://github.com/yarnpkg/berry>
-   <https://github.com/lirantal/npq>
-   <https://github.com/pnpm/pacquet>
-   <https://github.com/oven-sh/bun>
-   <https://github.com/ije/esm.sh>
-   <https://github.com/pnpm/pnpm>
-   <https://github.com/unjs/nypm>
-   <https://github.com/wclr/yalc>
-   <https://github.com/antfu/ni>

## BUNDLER / BUILDER

-   <https://github.com/umijs/mako>
-   <https://github.com/yao-pkg/pkg>
-   <https://github.com/vitejs/vite>
-   <https://github.com/vercel/turbo>
-   <https://github.com/farm-fe/farm>
-   <https://github.com/nodejs/amaro>
-   <https://github.com/rollup/rollup>
-   <https://github.com/huozhi/bunchee>
-   <https://github.com/colinhacks/zshy>
-   <https://github.com/swc-project/swc>
-   <https://github.com/unjs/webpackbar>
-   <https://github.com/rolldown/rolldown>
-   <https://github.com/privatenumber/tsx>
-   <https://github.com/mongodb-js/boxednode>
-   <https://github.com/DataDog/build-plugins>
-   <https://github.com/btd/rollup-plugin-visualizer>
-   <https://github.com/bddjr/vite-plugin-singlefile-compression>

## STARTER / EXAMPLE / TEMPLATE

-   <https://github.com/9renpoto/.59-node>
-   <https://github.com/bennycode/ts-node-starter>
-   <https://github.com/jhoset/nodejs-spotify-server>
-   <https://github.com/joyco-studio/library-template>
-   <https://github.com/bezkoder/node-js-mssql-crud-example>
-   <https://github.com/studiohyperdrive/nodejs-boilerplate>
-   <https://github.com/xddq/nodejs-typescript-modern-starter>
-   <https://github.com/JoshuaKGoldberg/create-typescript-app>
-   <https://github.com/bluesky-social/statusphere-example-app>
-   <https://github.com/meysamhadeli/booking-microservices-express-js/>

## LIST

-   <https://github.com/unjs>
-   <https://github.com/sindresorhus/awesome-nodejs>
-   <https://github.com/lirantal/awesome-nodejs-security>
-   <https://github.com/bcoe/awesome-cross-platform-nodejs>
-   <https://github.com/parro-it/awesome-micro-npm-packages>
-   <https://dev.to/madza/73-awesome-npm-packages-for-productivity-19p8>
-   <https://www.prisma.io/dataguide/database-tools/top-nodejs-orms-query-builders-and-database-libraries-in-2020>

## HOSTING: APP

-   <https://www.youtube.com/watch?v=uEVmD6n8Il0> 7 Ways to Deploy a Node.js App
-   <https://www.youtube.com/watch?v=l134cBAJCuc> Deploy full stack app to render.com
-   <https://cloud.google.com/functions>
-   <https://www.clever-cloud.com/>
-   <https://www.nodechef.com/>
-   <https://www.render.com/>
-   <https://platform.sh/>
-   <https://scalingo.com/>

## UTILS: NPM

-   <https://github.com/es-tooling/module-replacements>
-   <https://github.com/jdalton/npm-patch-with-bundled>
-   <https://github.com/radarsu/types-package-json>
-   <https://github.com/stackblitz-labs/pkg.pr.new>
-   <https://github.com/davglass/license-checker>
-   <https://github.com/JS-DevTools/npm-publish>
-   <https://github.com/lukeed/resolve.exports>
-   <https://github.com/lirantal/lockfile-lint>
-   <https://github.com/juliangruber/npm-diff>
-   <https://github.com/stijnvanhulle/rustraf>
-   <https://github.com/wooorm/npm-esm-vs-cjs>
-   <https://github.com/bcomnes/npm-run-all2>
-   <https://github.com/styfle/packagephobia>
-   <https://github.com/ds300/patch-package>
-   <https://github.com/microlinkhq/tinyrun>
-   <https://github.com/privatenumber/link>
-   <https://github.com/tmcdos/custompatch>
-   <https://github.com/RetireJS/retire.js>
-   <https://github.com/megahertz/howfat>
-   <https://github.com/esm-dev/esm.sh>
-   <https://github.com/webpro-nl/knip>
-   <https://github.com/amio/npm-why>
-   <https://github.com/antfu/taze>

## UTILS: DEVTOOLS

-   <https://github.com/yunabe/tslab>
-   <https://github.com/Qard/onchange>
-   <https://github.com/harthur/replace>
-   <https://github.com/volarjs/volar.js>
-   <https://github.com/bennycode/ts2esm>
-   <https://github.com/commitizen/cz-cli>
-   <https://github.com/davidmarkclements/0x>
-   <https://github.com/mysticatea/npm-run-all>
-   <https://github.com/rodrigopivi/tslab-widgets>
-   <https://github.com/antfu/node-modules-inspector>

## UTILS: CLEAN / KILL

-   <https://github.com/isaacs/rimraf>
-   <https://github.com/voidcosmos/npkill>
-   <https://github.com/zrosenbauer/nuka-code>
-   <https://github.com/sindresorhus/trash-cli>
-   <https://github.com/sindresorhus/fkill-cli>

## UTILS: ALL

-   <https://github.com/animir/node-rate-limiter-flexible>
-   <https://github.com/jkup/source-map-stacktrace-tester>
-   <https://github.com/JakobJingleheimer/nodejs-loaders>
-   <https://github.com/mafintosh/why-is-node-running>
-   <https://github.com/node-loader/node-loader-core>
-   <https://github.com/sverweij/dependency-cruiser>
-   <https://github.com/sindresorhus/find-cache-dir>
-   <https://github.com/nodejs-mobile/nodejs-mobile>
-   <https://github.com/jkup/source-map-validator>
-   <https://github.com/anonrig/fast-querystring>
-   <https://github.com/stijnvanhulle/js-runtime>
-   <https://github.com/amplication/amplication>
-   <https://github.com/localtunnel/localtunnel>
-   <https://github.com/freeall/progress-stream>
-   <https://github.com/sindresorhus/nano-spawn>
-   <https://github.com/adisreyaj/cartella-web>
-   <https://github.com/sindresorhus/is-docker>
-   <https://github.com/sindresorhus/wsl-utils>
-   <https://github.com/coderhammer/backhooks>
-   <https://github.com/sultan99/sexy-require>
-   <https://github.com/infinyon/node-bindgen>
-   <https://github.com/privatenumber/tasuku>
-   <https://github.com/EvanZhouDev/donut-js>
-   <https://github.com/julien-R44/hot-hook>
-   <https://github.com/sindresorhus/execa>
-   <https://github.com/folke/ultra-runner>
-   <https://github.com/evanwashere/mitata>
-   <https://github.com/node-escpos/driver>
-   <https://github.com/enquirer/enquirer>
-   <https://github.com/node-usb/node-usb>
-   <https://github.com/depcheck/depcheck>
-   <https://github.com/foreversd/forever>
-   <https://github.com/nodejitsu/nexpect>
-   <https://github.com/sindresorhus/np>
-   <https://github.com/SukkaW/nolyfill>
-   <https://github.com/zoontek/valienv>
-   <https://github.com/alallier/reload>
-   <https://github.com/typicode/husky>
-   <https://github.com/google/wireit>
-   <https://github.com/ranyitz/newsh>
-   <https://github.com/remy/nodemon>
-   <https://github.com/ranyitz/qnm>
-   <https://github.com/47ng/sceau>
-   <https://github.com/vercel/ncc>
-   <https://github.com/vercel/nft>
-   <https://github.com/nexe/nexe>
-   <https://github.com/sezna/nps>

## UTILS: LINK

-   <https://github.com/toss/es-git>
-   <https://github.com/apocas/dockerode>

## UTILS: TYPESCRIPT

-   <https://github.com/unjs/jiti>
-   <https://github.com/TypeStrong/ts-node>

## MONITORING / LOGGING

-   <https://github.com/pinojs/pino>
-   <https://github.com/immobiliare/dats>
-   <https://github.com/loglayer/loglayer>
-   <https://clinicjs.org/>
-   <http://pm2.keymetrics.io/>

## LIBS: ALL

-   <https://github.com/napi-rs/napi-rs>
-   <https://github.com/azz/pretty-quick>
-   <https://github.com/cjihrig/kubenode>
-   <https://github.com/clinicjs/node-clinic>
-   <https://github.com/theophilusx/ssh2-sftp-client>
-   <https://github.com/frinyvonnick/node-html-to-image>
-   <https://github.com/log4js-node/log4js-node>
-   <https://github.com/microsoft/playwright>
-   <https://github.com/sindresorhus/got>
-   <https://github.com/ai/nanocolors>
-   <https://github.com/nodejs/undici>
-   <https://github.com/verdaccio/verdaccio>
-   <https://github.com/simonlast/node-persist>
-   <https://github.com/mcollina/on-exit-leak-free>
-   <https://github.com/bengl/array-buffer-detach>
-   <https://github.com/microlinkhq/metascraper>
-   <https://github.com/calipersjs/calipers>
-   <https://github.com/humanwhocodes/fsx>
-   <https://github.com/Unitech/pm2>
-   <https://github.com/eta-dev/eta>
-   <https://github.com/leeoniya/uluzzy>
-   <https://github.com/fromdeno/deno2node>

## LIBS: VITE

-   <https://github.com/aleclarson/vite-tsconfig-paths>

## LIBS: VIDEO EDITING / AUDIO

-   <https://github.com/chatman-media/timeline-studio>
-   <https://github.com/AmitDigga/fabric-video-editor>
-   <https://github.com/bilashcse/video-editor>
-   <https://github.com/ClipsAI/video-editor>
-   <https://github.com/Vanilagy/mediabunny>
-   <https://github.com/drawcall/FFAIVideo>
-   <https://github.com/mifi/lossless-cut>
-   <https://github.com/tnfe/FFCreator>
-   <https://github.com/timii/voidcut>
-   <https://github.com/etro-js/etro>
-   <https://github.com/mifi/editly>
-   <https://github.com/AniMathIO>
-   <https://github.com/vnve/vnve>

## LIBS: IMAGES

-   <https://github.com/lovell/sharp>
-   <https://github.com/pmb0/express-sharp>

## LIBS: DATA OBJECT / DATA TYPE / BUFFER

-   <https://github.com/node-formidable/formidable>
-   <https://github.com/RobinTail/express-zod-api>
-   <https://github.com/xdenser/node-struct>
-   <https://github.com/lostfictions/znv>

## LIBS: WORKER MULTI THREAD

-   <https://github.com/jofpin/turbit>
-   <https://github.com/piscinajs/piscina>
-   <https://github.com/tinylibs/tinypool>
-   <https://github.com/mcollina/everysync>
-   <https://github.com/developit/web-worker>
-   <https://github.com/faranalytics/socketnaut>

## LIBS: UNIT TESTING

-   <https://github.com/ladjs/supertest>
-   <https://github.com/humanwhocodes/mentoss>
-   <https://github.com/privatenumber/fs-fixture>
-   <https://github.com/stayradiated/test-fixture-factory>

## LIBS: REGEX / BLOG

-   <https://github.com/isaacs/node-glob>

## LIBS: HTTP&#x3A; ALL

-   <https://github.com/sindresorhus/ky>
-   <https://github.com/L-Blondy/up-fetch>
-   <https://github.com/animir/node-rate-limiter-flexible>

## LIBS: HTTP&#x3A; SSE / SERVER SENT EVENT

-   <https://github.com/Bewinxed/river.ts>
-   <https://github.com/adonisjs/transmit>
-   <https://github.com/MatthewWid/better-sse>
-   <https://github.com/event-driven-io/emmett>
-   <https://github.com/max-mapper/mississippi>
-   <https://github.com/sindresorhus/get-stream>
-   <https://github.com/max-mapper/concat-stream>
-   <https://github.com/Azure/fetch-event-source>
-   <https://github.com/axios/axios/issues/5806>
-   <https://github.com/eventsource/eventsource>
-   <https://github.com/rexxars/eventsource-client>
-   <https://github.com/rexxars/eventsource-parser>
-   <https://medium.com/@david.richards.tech/sse-server-sent-events-using-a-post-request-without-eventsource-1c0bd6f14425>
-   <https://stackoverflow.com/questions/40385133/retrieve-data-from-a-readablestream-object>
-   <https://stackoverflow.com/questions/33141012/how-to-mock-streams-in-nodejs>

## LIBS: USB

-   <https://github.com/node-hid/node-hid>

## LIBS: FILES

-   <https://github.com/streamich/unionfs>

## LIBS: DOM

-   <https://github.com/capricorn86/happy-dom>
-   <https://github.com/marko-js/writable-dom>
-   <https://github.com/webqit/realdom>
-   <https://github.com/fgnass/domino>

## LIBS: SERVERLESS

-   <https://github.com/quirrel-dev/quirrel>

## LIBS: REQUEST

-   <https://github.com/axios/axios>
-   <https://github.com/unjs/ofetch>
-   <https://github.com/unjs/ohmyfetch>
-   <https://github.com/WebReflection/fetch>

## LIBS: JOB / SCHEDULER / SCHEDULING

-   <https://github.com/kibertoad/toad-scheduler>
-   <https://github.com/SGrondin/bottleneck>
-   <https://github.com/jakebailey/hereby>

## LIBS: CRON

-   <https://www.digitalocean.com/community/tutorials/nodejs-cron-jobs-by-examples>
-   <https://www.stackhero.io/en-fr/services/Node-js/documentations/Cron-jobs>
-   <https://docs.netlify.com/functions/scheduled-functions/>
-   <https://cronitor.io/guides/node-cron-jobs>
-   <https://github.com/vwedesam/Cron-to-human>
-   <https://www.defer.run/blog/nodejs-cron>
-   <https://github.com/node-cron/node-cron>
-   <https://github.com/kelektiv/node-cron>
-   <https://github.com/cronhub/crontab>
-   <https://github.com/Hexagon/croner>
-   <https://vercel.com/docs/cron-jobs>
-   <https://github.com/nefe/one-cron>

## LIBS: TESTING

-   <https://github.com/avajs/ava>
-   <https://github.com/nock/nock>
-   <https://github.com/4lejandrito/fetchbook>
-   <https://github.com/bahmutov/start-server-and-test>

## LIBS: ENV

-   <https://github.com/af/envalid>
-   <https://github.com/dotenvx/dotenvx>
-   <https://github.com/motdotla/dotenv>
-   <https://github.com/ekalinin/nodeenv>
-   <https://github.com/inventage/envsubst>
-   <https://github.com/motdotla/dotenv-expand>

## LIBS: AUTH / OIDC

-   <https://github.com/google/webauthndemo>
-   <https://github.com/lsagetlethias/charon>
-   <https://github.com/MasterKale/SimpleWebAuthn>
-   <https://github.com/panva/node-oidc-provider>
-   <https://github.com/supertokens/supertokens-node>
-   <https://github.com/drudge/passport-facebook-token>
-   <https://github.com/timofei-iatsenko/keycloakify-starter>

## LIBS: KEYS

-   <https://github.com/drudge/node-gpg>
-   <https://github.com/drudge/node-keychain>

## LIBS: CACHE

-   <https://github.com/node-cache-manager/node-cache-manager>
-   <https://github.com/szmarczak/cacheable-lookup>
-   <https://github.com/isaacs/node-lru-cache>
-   <https://github.com/Julien-R44/bentocache>
-   <https://github.com/jaredwray/keyv>
-   <https://github.com/unjs/unstorage>
-   <https://github.com/npm/cacache>

## LIBS: AI

-   <https://github.com/mastra-ai/mastra>
-   <https://github.com/openai/openai-node>
-   <https://github.com/mishushakov/ai-fun>
-   <https://github.com/naptha/tesseract.js>
-   <https://github.com/frost-beta/node-mlx>

## LIBS: CROSS LANGUAGES

-   <https://github.com/platformatic/php-node>

## LIBS: BROKER / SUBSCRIPTION

-   <https://github.com/redis/ioredis>
-   <https://github.com/weyoss/redis-smq>
-   <https://github.com/valkey-io/iovalkey>
-   <https://github.com/apollographql/graphql-subscriptions>

## LIBS: DATABASE / DB: PRISMA

-   <https://github.com/Cauen/prisma-generator-postgres-realtime>
-   <https://github.com/mohammed-bahumaish/prisma-editor>
-   <https://github.com/catalinmiron/awesome-prisma>
-   <https://github.com/mgcrea/prisma-queue>
-   <https://github.com/prisma/prisma>
-   <https://github.com/prisma-utils>

## LIBS: DATABASE / ORM

-   <https://github.com/remult/remult>
-   <https://github.com/prisma/prisma>
-   <https://github.com/typeorm/typeorm>
-   <https://github.com/sequelize/sequelize>
-   <https://github.com/drizzle-team/drizzle-orm>

## LIBS: DATABASE / DB

-   <https://github.com/knex/knex>
-   <https://github.com/koskimas/kysely>
-   <https://github.com/typeorm/typeorm>
-   <https://github.com/appy-one/acebase>
-   <https://github.com/ndaidong/flat-db>
-   <https://github.com/microlinkhq/keyvhq>
-   <https://github.com/bruin-data/ingestr>
-   <https://github.com/typegoose/typegoose>
-   <https://github.com/brianc/node-postgres>
-   <https://github.com/event-driven-io/Pongo>
-   <https://github.com/launchql/pgsql-parser>
-   <https://github.com/liberation-data/drivine>
-   <https://github.com/twinlogix/typettapsecur>
-   <https://github.com/w3tecch/typeorm-seeding>
-   <https://github.com/drizzle-team/drizzle-orm>
-   <https://github.com/drifting-in-space/driftdb>
-   <https://github.com/drudge/mongoose-timestamp>
-   <https://github.com/sql-formatter-org/sql-formatter>
-   <https://github.com/benjamin658/typeorm-cursor-pagination>
-   <https://github.com/IRCraziestTaxi/typeorm-linq-repository>

## LIBS: CLI / PROMPTS

-   <https://github.com/cacjs/cac>
-   <https://github.com/dthree/vorpal>
-   <https://github.com/terkelg/prompts>
-   <https://github.com/jasonkuhrt/molt>
-   <https://github.com/vadimdemedes/ink>
-   <https://github.com/arcanis/clipanion>
-   <https://github.com/sindresorhus/meow>
-   <https://github.com/tunnckoCore/zodest>
-   <https://github.com/npkgz/cli-progress>
-   <https://github.com/vadimdemedes/pastel>
-   <https://github.com/bombshell-dev/clack>
-   <https://github.com/mattallty/Caporal.js>
-   <https://github.com/tinylibs/picospinner>
-   <https://github.com/SBoudrias/Inquirer.js>
-   <https://github.com/visionmedia/node-progress>
-   <https://docs.npmjs.com/cli/ci.html>
-   <https://github.com/lirantal/nodejs-cli-apps-best-practices>
-   <https://michael-kuehnel.de/tooling/2018/03/22/helpers-and-tips-for-npm-run-scripts.html>

## LIBS: INSTALL / COMPILE

-   <https://github.com/vercel/pkg>
-   <https://github.com/vercel/ncc>
-   <https://github.com/electron/electron-packager>

## LIBS: GAME

-   <https://github.com/colyseus/colyseus>

## SERVER: PROXY

-   <https://github.com/apify/proxy-chain>
-   <https://github.com/chimurai/http-proxy-middleware>
-   <https://github.com/joeferner/node-http-mitm-proxy>

## SERVER: EXPRESS/ITTY

-   <https://github.com/michaelcpuckett/express-worker>
-   <https://github.com/mucahitnezir/express-starter>
-   <https://github.com/berstend/tiny-request-router>
-   <https://github.com/kwhitley/itty-router-extras>
-   <https://github.com/YahooArchive/express-state>
-   <https://github.com/pcattori/hmr-from-scratch>
-   <https://github.com/dimdenGD/ultimate-express>
-   <https://github.com/justinfagnani/zipadee>
-   <https://github.com/kwhitley/itty-router>
-   <https://github.com/expressjs/multer>
-   <https://github.com/encoredev/encore>
-   <https://github.com/Xiphe/cachified>
-   <https://github.com/helmetjs/helmet>
-   <https://github.com/tsedio/tsed>

## SERVER: INFRA

-   <https://github.com/Unitech/pm2>
-   <https://github.com/itteco/graceful-cluster>
-   <https://github.com/louislam/node-cloudflared-tunnel>

## SERVER: EDGES

-   <https://github.com/kartikk221/hyper-express>
-   <https://github.com/rhinobase/hono-openapi>
-   <https://github.com/honojs/hono>

\## SERVER: ALL

-   <https://github.com/Rotorsoft/eventually-monorepo>
-   <https://github.com/differentialhq/differential>
-   <https://github.com/VilledeMontreal/workit>
-   <https://github.com/brightcove/hot-shots>
-   <https://github.com/typicode/json-server>
-   <https://github.com/httptoolkit/mockrtc>
-   <https://github.com/paulmillr/chokidar>
-   <https://github.com/fonoster/fonoster>
-   <https://github.com/ts-rest/ts-rest>
-   <https://github.com/elysiajs/elysia>
-   <https://github.com/vercel/og-image>
-   <https://github.com/mnfst/manifest>
-   <https://github.com/nitrojs/nitro>
-   <https://github.com/h3js/crossws>
-   <https://github.com/novuhq/novu>
-   <https://github.com/unjs/nitro>
-   <https://github.com/panva/jose>
-   <https://github.com/h3js/rou3>
-   <https://github.com/h3js/srvx>
-   <https://github.com/unjs/h3>
-   <https://github.com/h3js/h3>

## SERVER: RPC

-   <https://github.com/trpc/trpc>
-   <https://github.com/cloudflare/capnweb>
-   <https://github.com/capnproto/capnproto>
-   <https://github.com/maloguertin/msw-trpc>

## FRAMEWORKS

-   <https://github.com/hexojs/hexo>
-   <https://github.com/nestjs/nest>
-   <https://github.com/tsedio/tsed>
-   <https://github.com/strapi/strapi>
-   <https://github.com/remult/remult>
-   <https://github.com/rocicorp/mono>
-   <https://github.com/adonisjs/core>
-   <https://github.com/MotiaDev/motia>
-   <https://github.com/lukeautry/tsoa>
-   <https://github.com/bluelibs/runner>
-   <https://github.com/zone-eu/zone-mta>
-   <https://github.com/sindresorhus/got>
-   <https://github.com/OptimalBits/bull>
-   <https://github.com/directus/directus>
-   <https://github.com/balderdashy/sails>
-   <https://github.com/taskforcesh/bullmq>
-   <https://github.com/mikro-orm/mikro-orm>
-   <https://github.com/sequelize/sequelize>
-   <https://github.com/moleculerjs/moleculer>
-   <https://github.com/wundergraph/wundergraph>
-   <https://github.com/strongloop/loopback-next>
-   <https://github.com/serhiisol/node-decorators>
-   <https://github.com/deepkit/deepkit-framework>
-   <https://github.com/ujjwalguptaofficial/fortjs>
-   <https://github.com/differentialhq/differential>

## BASICS

The ECMAScript modules (ES or ESM modules) have a standard TC39 function that was not existing prior to Node version 14. This feature can only be used starting from Node16 and can be very helpful to charge the JavaScript modules. Unlike CommonJS, ESM provides an asynchronous API for loading modules. one advantage is an improved syntax via the import and export instructions. To use ESM you can declare "type": "module" in your file package.json.

## NODE UPDATE WINDOWS

1.  download & install node : latest version from official website
2.  use npm-windows-upgrade to update npm

## COMMANDS

## NPM

### Helper

    npm list -g --depth 0 (list the global package installed)
    npx ... (run directly a global or local package from the node_modules)
    npx ngcc (example to run angular ngcc in an angular (v9) project)

    npm run command --configuration production (pass simple param to the npm command, the same with yarn)
    npm run command -- --configuration production (pass complex param to the npm command, the same with yarn)

### Clean

    # Clean node project before updgrade or reinstall
    # Command for Linux
    rm -rf package-lock.json
    rm -rf yarn.lock
    rm -rf node_modules

Or see for other OS [Utils-cmd](utils-cmd.md)

### Versions

-   package version has 3 parts - major.minor.patch
-   ^ = latest minor version will be installed
-   ~ = latest patch version will be installed


    npm outdated # check the dep to update
    npm update # update all to the wanted
    npm update mypackage1 # update one to the wanted
    npm update mypackage1 mypackage2 # update many to the wanted
    npm install mypackage1@latest # update one to the latest (major)
    npx npm-check-updates -u # update all to the latest (major)

## MODULES

-   <https://dmitripavlutin.com/ecmascript-modules-nodejs/>
-   <https://blog.logrocket.com/commonjs-vs-es-modules-node-js/>
-   <https://itnext.io/great-import-schism-typescript-confusion-around-imports-explained-d512fc6769c2>
-   <https://adamcoster.com/blog/commonjs-and-esm-importexport-compatibility-examples>
-   <https://techsparx.com/nodejs/typescript/modules-01.html>
-   <https://stackoverflow.com/questions/33535879/how-to-run-typescript-files-from-command-line>
-   <https://www.typescriptlang.org/docs/handbook/esm-node.html>
-   <https://www.npmjs.com/package/fix-esm>
-   <https://github.com/standard-things/esm>
