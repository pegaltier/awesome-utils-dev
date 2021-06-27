<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [ANGULAR LIST](#angular-list)
  - [HELPER: NEW](#helper-new)
  - [HELPER: BEST PRACTICES](#helper-best-practices)
  - [HELPER: DESIGN PATTERN](#helper-design-pattern)
  - [HELPER: CHEAT-SHEETS](#helper-cheat-sheets)
  - [HELPER: ONLINE IDE](#helper-online-ide)
  - [HELPER: START](#helper-start)
  - [HELPER: DEBUG](#helper-debug)
  - [CORE: PWA](#core-pwa)
  - [CORE: CLI](#core-cli)
  - [CORE: PIPES](#core-pipes)
  - [CORE: OPTIMIZATION](#core-optimization)
  - [CORE: DATAFLOW](#core-dataflow)
  - [CORE: DECORATOR](#core-decorator)
  - [CORE: CONFIGURATION](#core-configuration)
  - [CORE: BUILD](#core-build)
  - [CORE: BUILDER](#core-builder)
  - [CORE: ELEMENTS](#core-elements)
  - [CORE: RENDERING](#core-rendering)
  - [CORE: TEMPLATE](#core-template)
  - [CORE: RESPONSIVE](#core-responsive)
  - [CORE: DIRECTIVES](#core-directives)
  - [CORE: COMPONENTS](#core-components)
  - [CORE: ARCHITECTURE](#core-architecture)
  - [CORE: MODULES](#core-modules)
  - [CORE: FORMS](#core-forms)
  - [CORE: PLATFORM](#core-platform)
  - [CORE: INTERCEPTOR](#core-interceptor)
  - [CORE: GUARD](#core-guard)
  - [CORE: ACL](#core-acl)
  - [CORE: RXJS](#core-rxjs)
  - [CORE: HTTP](#core-http)
  - [CORE: CHANGE DETECTION](#core-change-detection)
  - [CORE: SCHEMATICS](#core-schematics)
  - [CORE: DEPENDENCY INJECTION](#core-dependency-injection)
  - [CORE: ANIMATIONS](#core-animations)
  - [CORE: MATERIAL](#core-material)
  - [CORE: ROUTING](#core-routing)
  - [CORE: LAZY](#core-lazy)
  - [CORE: SECURITY](#core-security)
  - [CORE: CSS](#core-css)
  - [CORE: UNIVERSAL](#core-universal)
  - [CORE: ERROR HANDLER](#core-error-handler)
  - [CORE: UNIT TESTS](#core-unit-tests)
  - [CORE: E2E TESTS](#core-e2e-tests)
  - [CORE: MIGRATION](#core-migration)
  - [ECOSYSTEM: AUTHENTIFICATION](#ecosystem-authentification)
  - [ECOSYSTEM: STORE: NGRX](#ecosystem-store-ngrx)
  - [ECOSYSTEM: STORE: NGRX/DATA](#ecosystem-store-ngrxdata)
  - [ECOSYSTEM: STORE: NGRX/COMPONENT](#ecosystem-store-ngrxcomponent)
  - [ECOSYSTEM: STORE: NGRX/COMPONENT-STORE](#ecosystem-store-ngrxcomponent-store)
  - [ECOSYSTEM: STORE: ALTERNATIVE](#ecosystem-store-alternative)
  - [ECOSYSTEM: WEB-COMPONENTS](#ecosystem-web-components)
  - [ECOSYSTEM: MICROFRONTEND](#ecosystem-microfrontend)
  - [ECOSYSTEM: MONOREPO](#ecosystem-monorepo)
  - [ECOSYSTEM: SEEDS](#ecosystem-seeds)
  - [ECOSYSTEM: JAMSTACK](#ecosystem-jamstack)
  - [ECOSYSTEM: LIB: MAKE](#ecosystem-lib-make)
  - [ECOSYSTEM: LIB: LIST](#ecosystem-lib-list)
  - [ECOSYSTEM: LIB: JAMSTACK](#ecosystem-lib-jamstack)
  - [ECOSYSTEM: LIB: SCULLY](#ecosystem-lib-scully)
  - [ECOSYSTEM: LIB: IMMUTABLE](#ecosystem-lib-immutable)
  - [ECOSYSTEM: LIB: LINT](#ecosystem-lib-lint)
  - [ECOSYSTEM: LIB: DEVTOOLS](#ecosystem-lib-devtools)
  - [ECOSYSTEM: LIB: LAZY](#ecosystem-lib-lazy)
  - [ECOSYSTEM: LIB: DOM](#ecosystem-lib-dom)
  - [ECOSYSTEM: LIB: HTTP](#ecosystem-lib-http)
  - [ECOSYSTEM: LIB: ROUTING](#ecosystem-lib-routing)
  - [ECOSYSTEM: LIB: UTIL](#ecosystem-lib-util)
  - [ECOSYSTEM: LIB: RXJS](#ecosystem-lib-rxjs)
  - [ECOSYSTEM: LIB: GENERAL](#ecosystem-lib-general)
  - [ECOSYSTEM: LIB: ELEMENTS](#ecosystem-lib-elements)
  - [ECOSYSTEM: LIB: E2E TESTS](#ecosystem-lib-e2e-tests)
  - [ECOSYSTEM: LIB: UNIT TESTS](#ecosystem-lib-unit-tests)
  - [ECOSYSTEM: LIB: OPTIMIZATION](#ecosystem-lib-optimization)
  - [ECOSYSTEM: LIB: COMPONENTS](#ecosystem-lib-components)
  - [ECOSYSTEM: LIB: MARKETING](#ecosystem-lib-marketing)
  - [ECOSYSTEM: LIB: LAYOUT](#ecosystem-lib-layout)
  - [ECOSYSTEM: LIB: SCROLL](#ecosystem-lib-scroll)
  - [ECOSYSTEM: LIB: SELECT](#ecosystem-lib-select)
  - [ECOSYSTEM: LIB: UPLOAD](#ecosystem-lib-upload)
  - [ECOSYSTEM: LIB: DATA VIZ](#ecosystem-lib-data-viz)
  - [ECOSYSTEM: LIB: DEBUG](#ecosystem-lib-debug)
  - [ECOSYSTEM: LIB: MODAL](#ecosystem-lib-modal)
  - [ECOSYSTEM: LIB: LOADER](#ecosystem-lib-loader)
  - [ECOSYSTEM: LIB: FORM](#ecosystem-lib-form)
  - [ECOSYSTEM: LIB: CDK MATERIAL](#ecosystem-lib-cdk-material)
  - [ECOSYSTEM: LIB: INTERNATIONALIZATION](#ecosystem-lib-internationalization)
  - [ECOSYSTEM: LIB: MEDIA](#ecosystem-lib-media)
  - [ECOSYSTEM: LIB: UI](#ecosystem-lib-ui)
  - [ECOSYSTEM: LIB: STORAGE](#ecosystem-lib-storage)
  - [ECOSYSTEM: LIB: AUTH](#ecosystem-lib-auth)
  - [ECOSYSTEM: LIB: PAYMENT](#ecosystem-lib-payment)
  - [ECOSYSTEM: LIB: GEOLOCATION](#ecosystem-lib-geolocation)
  - [ECOSYSTEM: LIB: ACL](#ecosystem-lib-acl)
  - [ECOSYSTEM: LIB: PWA](#ecosystem-lib-pwa)
  - [ECOSYSTEM: CI/CD](#ecosystem-cicd)
  - [ECOSYSTEM: PLUG & PLAY:](#ecosystem-plug--play)
  - [ECOSYSTEM: DEMO: SOURCES & EXAMPLES](#ecosystem-demo-sources--examples)
  - [ECOSYSTEM: DEMO: LIVE](#ecosystem-demo-live)
  - [ECOSYSTEM: GAMES](#ecosystem-games)
  - [ECOSYSTEM: MOBILE](#ecosystem-mobile)
  - [ECOSYSTEM: COMPARAISON](#ecosystem-comparaison)
  - [ECOSYSTEM: PLUGINS](#ecosystem-plugins)
  - [ECOSYSTEM: TOOLS](#ecosystem-tools)
  - [ECOSYSTEM: VSCODE BEST](#ecosystem-vscode-best)
  - [ECOSYSTEM: VSCODE PERSO](#ecosystem-vscode-perso)
  - [ECOSYSTEM: VSCODE OTHERS](#ecosystem-vscode-others)
  - [ECOSYSTEM: AWESOME](#ecosystem-awesome)
  - [ECOSYSTEM: COMMUNITY](#ecosystem-community)
  - [ECOSYSTEM: BOOK](#ecosystem-book)
  - [ECOSYSTEM: MEDIAS](#ecosystem-medias)
  - [ECOSYSTEM: ARTICLES](#ecosystem-articles)
  - [ECOSYSTEM: TRAINING](#ecosystem-training)
  - [EVOLUTION](#evolution)
    - [ANGULAR11](#angular11)
    - [ANGULAR10](#angular10)
    - [ANGULAR9](#angular9)
    - [ANGULAR8](#angular8)
    - [ANGULAR7](#angular7)
    - [ANGULAR6](#angular6)
    - [ANGULAR5](#angular5)
    - [ANGULAR4](#angular4)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->



# ANGULAR LIST

## HELPER: NEW
 
 Fundamental decisions to take when new project start.

- Angular config? template-typecheck...
- Typescript config? strictNullChecks...
- Rules? linting, committing, formatting...
- Tooling? hooks, sentry, ci, cd, storybook...
- Util lib? ngx-pipes, rxjs-prim, lodash, luxon...
- UI lib? boostrap, material, ant, cdk, primeng...
- UI css? default, sass, less, mixins, responsive...
- Workspace? cli, nx, ngx-rocket, wizdm, jhipster...
- Store lib? ngrx or another, shared context, local...
- Translations? Official i18n, transloco, ngx-translate...
- Change detection? default (zone), onpush+ngrx/component...
- Structure of the rooting? primary outlet, secondary outlet...
- Structure of the ui? simple, embedded views, view teleportation...

## HELPER: BEST PRACTICES

Avoid common mistakes, bugs, find tips and checklist for good development...

- https://angular-checklist.io/
- https://github.com/SanderElias/Samples
- https://github.com/typebytes/angular-checklist
- https://indepth.dev/angular-bad-practices-revisited/
- https://github.com/mgechev/angular-performance-checklist
- https://blog.angularindepth.com/lean-angular-components-252bcb6ea6c1
- https://blog.angularindepth.com/angular-tools-you-should-be-aware-of-a6d37ad39f4e
- https://blog.bitsrc.io/an-opinionated-styleguide-for-angular-af623d54e2b8
- https://speakerdeck.com/kuncevic/how-to-architect-your-angular-app-like-a-pro
- https://indepth.dev/supercharge-event-management-in-your-angular-application/
- https://medium.com/@yiupang.ch/get-rid-of-if-statements-in-your-angular-app-with-oop-1efdf91da577
- https://medium.com/javascript-in-plain-english/angular-accessibility-81736ab4f1c4
- https://blog.angular.io/angular-tools-for-high-performance-6e10fb9a0f4a
- https://itnext.io/clean-code-checklist-in-angular-%EF%B8%8F-10d4db877f74
- https://dev.to/gc_psk/the-principles-for-writing-awesome-angular-components-2ofi
- https://medium.com/@tomastrajan/how-to-build-epic-angular-app-with-clean-architecture-91640ed1656
- https://medium.com/@thegiraffeclub/angular-clean-architecture-approach-fcfe32e983a5
- https://medium.com/free-code-camp/best-practices-for-a-clean-and-performant-angular-application-288e7b39eb6f
- https://code-maze.com/angular-best-practices/
- https://www.carloscaballero.io/angular-ngx-translate-typings
- https://web.dev/accessible-angular-with-codelyzer/
- https://dev.to/devpato/angular-unofficial-docs-architecture-2d4i
- https://medium.com/intive-developers/approach-to-clean-architecture-in-angular-applications-hands-on-35145ceadc98
- https://medium.com/better-programming/communication-patterns-in-angular-9b0a829aa916
- https://speakerdeck.com/mgechev/building-fast-angular-applications-by-default?slide=1
- https://malcoded.com/posts/why-angular-not-works
- https://dzone.com/articles/4-common-bugs-in-angular-and-how-to-fix-them
- https://blog.codewithdan.com/2017/08/26/5-key-benefits-of-angular-and-typescript/
- https://codeburst.io/angular-best-practices-4bed7ae1d0b7
- https://angular.schule/blog/2019-07-resolvers
- https://theinfogrid.com/tech/developers/angular/angular-development-tips/
- https://medium.com/@tomastrajan/6-best-practices-pro-tips-for-angular-cli-better-developer-experience-7b328bc9db81
- https://blog.ninja-squad.com/2019/03/15/cool-things-we-learned-part-2-frontend-edition/
- https://blog.angularindepth.com/expecting-the-unexpected-best-practices-for-error-handling-in-angular-21c3662ef9e4
- https://medium.com/better-programming/zone-js-for-angular-devs-573d89bbb890
- https://medium.com/@shairez/angular-routing-a-better-pattern-for-large-scale-apps-f2890c952a18
- https://github.com/BioPhoton/Reactive-Architecture-and-UX-Patterns_Angular
- https://dev.to/joerter/10-tips-for-awesome-angular-apps-a2b
- https://github.com/wesleygrimes/angular-routing-best-practices
- https://github.com/this-is-angular/angular-guides
- https://github.com/nirkaufman/bad-practice

## HELPER: DESIGN PATTERN

Learn about the most useful design patterns in Angular.

- https://indepth.dev/posts/1404/declarative-reactive-data-and-action-streams-in-angular
- https://dev.to/lifelongthinker/the-strategy-pattern-exemplified-in-typescript-3pmi
- https://blog.angularindepth.com/level-up-your-components-api-using-the-strategy-pattern-61762583a7d8
- https://medium.com/volosoft/strategy-pattern-implementation-with-typescript-and-angular-9ad8b1929e9c
- https://medium.com/better-programming/communication-patterns-in-angular-9b0a829aa916
- https://medium.com/@tomastrajan/model-pattern-for-angular-state-management-6cb4f0bfed87
- https://medium.com/angular-athens/working-with-state-machines-in-angular-2817441e26bf
- https://dev.to/florimondmanca/consuming-apis-in-angular--the-model-adapter-pattern-3fk5
- https://indepth.dev/the-shell-library-patterns-with-nx-and-monorepo-architectures/
- https://itnext.io/get-rid-of-if-statements-in-your-angular-app-with-oop-1efdf91da577
- https://medium.com/javascript-in-plain-english/selective-angular-component-rendering-with-ngswitch-4ec3a2b5e05e
- https://blog.nrwl.io/ngrx-patterns-and-techniques-f46126e2b1e5
- https://indepth.dev/presenters-with-angular/
- https://medium.com/swlh/basic-reactive-patterns-in-angular-b404bc127a0a
- https://medium.com/weekly-webtips/generating-dynamic-templates-from-json-in-angular-fe6322b93d5b
- https://blog.logrocket.com/how-typescript-design-patterns-help-you-write-better-code/
- https://medium.com/volosoft/how-to-use-attribute-directives-to-avoid-repetition-in-angular-templates-f681127e2537
- https://angular-academy.com/angular-architecture-best-practices/
- https://slides.com/tuantrungvo/angular-using-visitor-design-pattern-with-typescript
- https://dev.to/gc_psk/composing-angular-components-with-typescript-mixins-dn3
- https://medium.com/angular-in-depth/agnostic-components-in-angular-2427923b742d
- https://indepth.dev/posts/1417/demystifying-taiga-ui-root-component-portals-pattern-in-angular
- https://paulrobertlloyd.com/2017/03/designing_systems_part_3/
- https://medium.com/javascript-in-plain-english/why-you-should-generally-prefer-typescript-interfaces-and-custom-types-over-classes-d145814218ce
- https://carloscaballero.io/understanding-mvc-services-for-frontend-angular/
- https://blog.fullstacktraining.com/adapter-pattern-in-typescript/
- https://refactoring.guru/design-patterns/bridge/typescript/example
- https://refactoring.guru/design-patterns/catalog
- https://www.youtube.com/watch?v=CVH0v3EmCfs Nir Kaufman | Going SOLID with DI in Angular
- https://dev.to/humberd/context-menu-actions-at-scale-command-pattern-in-a-real-life-scenario-9o0
- https://dev.to/carlillo/understanding-design-patterns-factory-method-52fc
- https://github.com/Humberd/command-pattern-in-angular
- https://github.com/nirkaufman/patterns-starters
- https://github.com/Itchimonji/design-patterns-in-angular
- https://github.com/Itchimonji/refactoring-switch-statements-in-angular

## HELPER: CHEAT-SHEETS

- https://angular.io/docs/ts/latest/api/
- https://angular.io/docs/ts/latest/guide/cheatsheet.html
- https://codeburst.io/angular-bad-practices-eab0e594ce92
- http://angularjs.blogspot.fr/2016/04/5-rookie-mistakes-to-avoid-with-angular.html
- http://www.wintellect.com/devcenter/dbaskin/big-ideas-behind-angular2
- http://www.angulartypescript.com
- https://learnxinyminutes.com/docs/typescript/
- http://www.typescriptlang.org/Handbook
- https://acadgild.com/blog/typescript-functions/
- https://github.com/johnpapa/angular-styleguide/blob/master/a2/README.md
- https://angular.io/docs/js/latest/resources.html
- https://angular.io/docs/ts/latest/cookbook/a1-a2-quick-reference.html
- https://angular.io/docs/ts/latest/cookbook/component-communication.html
- http://blogs.walkingtree.in/2016/03/22/thinking-in-angular-2/
- https://medium.com/@NetanelBasal/angular-2-improve-performance-with-trackby-cc147b5104e5#.74fiumqt7
- https://www.logicroom.co/how-to-architect-enterprise-single-page-applications-part1
- http://www.sitepoint.com/introduction-angularjs-style-guides
- http://johnpapa.net/angular-2-styles/
- https://github.com/rangle/angular2-guidelines
- https://github.com/mgechev/angular2-style-guide
- https://github.com/sksaifuddin/angular-rxjs-tips
- https://ultimatecourses.com/blog/master-your-next-angular-job-interview-with-these-questions
- https://blog.bitsrc.io/6-concepts-to-master-to-be-an-angular-architect-807314e31ef3
- https://dev.to/caroso1222/what-do-you-look-for-in-a-pr-review-21gb
- https://angular.io/api/core/global
- https://indepth.dev/5-tips-to-boost-your-angular-skills/
- https://indepth.dev/best-angular-tips/

## HELPER: ONLINE IDE

- https://ng-run.com/
- https://codesandbox.io/
- https://stackblitz.com
- https://github.com/conwnet/github1s
- https://stackblitz.com/edit/angular-so7pmy
- https://stackblitz.com/edit/angular-material

## HELPER: START

- https://angular.io/docs/ts/latest/quickstart.html
- https://angular.io/docs/ts/latest/cookbook/
- http://www.tryangular2.com/
- http://learnangular2.com/
- http://builtwithangular2.com/
- http://angularexpo.com/


## HELPER: DEBUG

- https://github.com/rrweb-io/rrweb
- https://code.visualstudio.com/docs/nodejs/angular-tutorial debug with vscode and chrome
- https://medium.com/angular-in-depth/how-to-create-a-memory-leak-in-angular-4c583ad78b8b
- https://nolanlawson.com/2020/02/19/fixing-memory-leaks-in-web-applications/
- https://scotch.io/tutorials/debugging-angular-cli-applications-in-visual-studio-code
- https://medium.freecodecamp.com/10-tips-to-maximize-your-javascript-debugging-experience-b69a75859329#.o1mbuv4hn
- https://www.sitepoint.com/angular-augury-debug-code/
- https://medium.com/nextfaze/devmod-probing-your-angular-application-for-fun-and-debugging-d7e07c688247
- https://hackernoon.com/everything-you-need-to-know-about-debugging-angular-applications-d308ed8a51b4
- https://medium.com/@maximus.koretskyi/everything-you-need-to-know-about-debugging-angular-applications-d308ed8a51b4
- https://dzone.com/articles/how-to-debug-an-angular-application-with-chrome-an
- https://coryrylan.com/blog/angular-debugging-tips-and-tricks
- http://tutorials.pluralsight.com/front-end-javascript/debugging-angular-2-applications
- http://juristr.com/blog/2016/02/debugging-angular2-console/
- https://scotch.io/tutorials/debugging-angular-2-apps-with-augury
- http://juristr.com/blog/2016/02/debugging-angular2-console
- https://manuel-rauber.com/2016/09/30/how-to-debug-angular-2-with-webstorm/
- https://medium.com/better-programming/expressionchangedafterithasbeencheckederror-in-angular-what-why-and-how-to-fix-it-c6bdc0b22787

## CORE: HMR

- https://dev.to/this-is-angular/things-to-watch-out-for-when-using-hmr-with-angular-50j7
- https://dev.to/iamscottcab/using-hot-module-replacement-in-angular-11-mji

## CORE: PWA

- https://slides.com/webmax/angular-workbox/#/34
- https://github.com/webmaxru/angular-pwa/tree/workbox-v4-bundle
- https://dormoshe.io/daily-news/angular-performance-web-workers-1955
- https://blog.nrwl.io/a-new-day-for-pwa-e7c3342b753c
- https://medium.com/@amcdnl/service-worker-pwas-with-the-angular-cli-98a8f16d62d6
- http://blog.ionic.io/yann-braga-my-ionic-success-story/
- https://starwarnic.yannbraga.com
- https://medium.com/@josuabuecher/the-new-ease-of-building-app-like-reliable-and-engaging-web-apps-c27e5b486f2c
- https://www.thinkwithgoogle.com/intl/en-gb/consumer-insights/trivago-embrace-progressive-web-apps-as-the-future-of-mobile/
- https://medium.com/@webmaxru/a-new-angular-service-worker-creating-automatic-progressive-web-apps-part-1-theory-37d7d7647cc7

## CORE: CLI

- https://medium.com/angular-in-depth/angular-cli-flows-big-picture-9ed1a0d1930
- https://blog.ninja-squad.com/2019/01/31/angular-cli-7.3/
- https://blog.angular.io/the-past-present-and-future-of-the-angular-cli-13cf55e455f8
- https://github.com/angular/angular-cli
- http://developer.telerik.com/featured/rapid-cross-platform-development-angular-2-cli
- https://www.sitepoint.com/angular-2-tutorial
- http://houssein.me/angular2-hacker-news
- https://www.sitepoint.com/ultimate-angular-cli-reference
- http://www.dzurico.com/angular-cli-with-the-super-powers/
- https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/proxy.md
- https://juristr.com/blog/2016/11/configure-proxy-api-angular-cli/
- https://github.com/cexbrayat/angular-cli-diff

## CORE: PIPES

- http://www.angulartypescript.com/angular-2-pipes/
- https://medium.com/javascript-in-plain-english/6-pure-angular-pipes-for-human-readable-ui-c76b4e6fafa1
- https://www.cheatography.com/nathane2005/cheat-sheets/angular2-pipes/

## CORE: OPTIMIZATION

SCALABLE PERFORMANCE PERF OPTIMIZATION / MEMORY LEAK
- https://www.youtube.com/watch?v=FjyX_hkscII Profiling Angular Applications
- https://www.youtube.com/watch?v=ybNj-id0kjY Optimizing an Angular application runtime - Minko Gechev
- https://www.youtube.com/watch?v=moUCZoJfhwY Angular Performance: Your App at the Speed of Light - Christian Liebel | NG-DE 2019
- https://www.youtube.com/watch?v=ZI_MC3YdSo4 Angular Performance Workshop - Manfred Steyer
- https://timdeschryver.dev/blog/help-angular-to-make-your-application-faster
- https://medium.com/@dmitrymogilko/profiling-angular-change-detection-c00605862b9f
- https://speakerdeck.com/mgechev/tools-for-fast-angular-applications
- https://blog.angularindepth.com/how-i-increased-the-performance-of-an-extremely-deeply-nested-angular-reactive-form-by-380-c1b18ea668db
- https://zizzamia.github.io/perfume/
- https://alligator.io/angular/bundle-size/
- https://www.debugbear.com/blog/devtools-performance
- https://coryrylan.com/blog/analyzing-bundle-size-with-the-angular-cli-and-webpack
- https://indepth.dev/are-you-using-scss-properly/
- https://github.com/mgechev/angular-performance-checklist
- http://blog.mgechev.com/2016/04/10/scalable-javascript-single-page-app-angular2-application-architecture/
- https://github.com/mgechev/scalable-architecture-demo
- http://amcdnl.com/2017/10/02/angular-performance-tip-preserve-whitespace
- https://medium.com/ag-grid/5-tips-for-fixing-a-memory-leak-in-angular-debfc9ef9821
- https://blog.ninja-squad.com/2018/09/06/angular-performances-part-1/
- https://blog.ninja-squad.com/2018/09/13/angular-performances-part-2/
- https://blog.ninja-squad.com/2018/09/20/angular-performances-part-3/
- https://blog.ninja-squad.com/2018/09/27/angular-performances-part-4/
- https://nx.app/angular-cli-faster

## CORE: DATAFLOW

- http://blog.angular-university.io/angular-2-what-is-unidirectional-data-flow-development-mode

## CORE: DECORATOR

Annotations...

- https://alligator.io/angular/hostbinding-hostlistener/
- https://www.thecodecampus.de/blog/angular-2-use-hostbindings-set-class/
- https://toddmotto.com/angular-decorators
- https://netbasal.com/automagically-unsubscribe-in-angular-4487e9853a88

## CORE: CONFIGURATION

env files...

- https://dev.to/angular/compile-time-vs-runtime-configuration-of-your-angular-app-15f2
- https://medium.com/@hasan.hameed/reading-configuration-files-in-angular-2-9d18b7a6aa4#.4tvv0tgh5

## CORE: BUILD

production, build, bundle...

- https://alligator.io/angular/bundle-size/
- https://indepth.dev/under-the-hood-of-web-bundlers-e-g-webpack/
- https://coryrylan.com/blog/analyzing-bundle-size-with-the-angular-cli-and-webpack
- https://medium.com/@richavyas/webpack-new-way-of-building-ng2-app-a34a3bdabb17#.gcouo6jme
- https://hackernoon.com/rxjs-reduce-bundle-size-using-lettable-operators-418307295e85
- http://stackoverflow.com/questions/37631098/how-to-bundle-and-angular-2-app-for-production
- http://blog.scottlogic.com/2015/12/24/creating-an-angular-2-build.html
- http://blog.jhades.org/how-to-run-angular-2-in-production-today/
- https://www.webcodegeeks.com/javascript/angular-js/run-angular-2-production-today/
- http://www.bennadel.com/blog/3050-setting-the-window-document-title-in-angular-2-beta-9.htm

## CORE: BUILDER

CUSTOM BUILD / CLI BUILDER / CUSTOM WEBPACK / DEPLOYMENT BUILDER

- https://ngx.tools/
- https://angular-builders.dev/home
- https://github.com/angular/angular-cli/issues/6137
- https://github.com/bampakoa/ngx-electronify
- https://github.com/mgechev/cli-builders-demo
- https://github.com/bikecoders/ngx-deploy-npm
- https://github.com/Azure/ng-deploy-azure
- https://github.com/manfredsteyer/ngx-build-plus
- https://github.com/ngx-builders/angular-builder
- https://github.com/ngx-builders/netlify-builder
- https://github.com/ngx-builders/ngx-heroku-deploy
- https://github.com/mauriziovitale/angular-plugins
- https://github.com/angular-schule/angular-cli-ghpages
- https://www.smashingmagazine.com/2021/06/getting-started-webpack/
- https://github.com/meltedspark/angular-builders/tree/master/packages/dev-server
- https://codeburst.io/customizing-angular-cli-6-build-an-alternative-to-ng-eject-a48304cd3b21
- https://www.softwarearchitekt.at/post/2018/12/12/extending-the-angular-cli-s-build-chain-without-ejecting.aspx
- https://webpack.js.org/plugins/context-replacement-plugin/
- https://medium.com/javascript-in-plain-english/customizing-your-angular-apps-webpack-configuration-4099144949fc
- https://blog.angular.io/introducing-cli-builders-d012d4489f1b
- https://www.youtube.com/watch?v=M1Bk_O49n94 Enhancing the workspace with Custom Builders
- https://www.youtube.com/watch?v=hX0KLxMJVyU Unleash the power of Angular CLI Builders - Nir Kaufman

## CORE: ELEMENTS

- https://dev.to/stephenradams/using-angular-elements-for-a-micro-frontend-fgf
- https://medium.com/@tomastrajan/the-best-way-to-lazy-load-angular-elements-97a51a5c2007
- https://blog.angularindepth.com/angular-elements-how-does-this-magic-work-under-the-hood-3684a0b2be95
- https://speakerdeck.com/manfredsteyer/web-components-with-angular-elements-beyond-the-basics-at-ngconf-2019?slide=1

## CORE: RENDERING

- https://angular.io/guide/template-syntax
- https://alligator.io/angular/using-renderer2/
- https://github.com/Zizzamia/rendering-in-angular-2
- https://github.com/matsko/angular2-multi-client
- http://www.yearofmoo.com/2016/02/rendering-in-angular2.html
- https://github.com/matsko/angular2-canvas-renderer-experiment
- https://github.com/bojzi/sound-machine-electron-guide
- https://medium.com/developers-writing/building-a-desktop-application-with-electron-204203eeb658#.nt2t38q9n
- https://medium.com/@maximus.koretskyi/exploring-angular-dom-abstractions-80b3ebcfc02#.ibey01fko

## CORE: TEMPLATE

- https://codeburst.io/angular-interview-question-what-are-ng-container-ng-content-and-ng-template-9fafbbc255d5
- http://blog.angular-university.io/angular-ng-template-ng-container-ngtemplateoutlet/
- https://blog.angularindepth.com/angular-mastery-template-syntax-194bffe2ad6f
- https://medium.com/javascript-everyday/reusable-components-with-configurable-templates-in-angular-3c55741c97f3
- https://medium.com/@liutingchun_95744/angular-using-ngtemplateoutlet-to-communicate-between-parent-and-dynamic-child-components-4d74ca9ba9b
- https://ultimatecourses.com/blog/difference-change-ngmodelchange-angular

## CORE: RESPONSIVE

- https://indepth.dev/posts/1383/responsive-angular
- https://www.smashingmagazine.com/2019/02/image-breakpoints-angular/#top

## CORE: DIRECTIVES

- https://stackblitz.com/edit/repeat-times-directive
- https://github.com/SanderElias/an-sample-compose-directives
- https://www.newline.co/@krishna/angular-directives-demystified--effcda6a

## CORE: COMPONENTS

create your first components, learn how to use translusions, ng-content...

- https://indepth.dev/heres-what-you-should-know-when-creating-flexible-and-reusable-components-in-angular/
- https://dev.to/gc_psk/composing-angular-components-with-typescript-mixins-dn3
- https://medium.com/angular-in-depth/agnostic-components-in-angular-2427923b742d
- https://blog.bitsrc.io/component-reusability-techniques-with-angular-727a6c603ad2
- https://paulrobertlloyd.com/2017/03/designing_systems_part_3/
- https://speakerdeck.com/eliraneliassy/custom-components-templates
- https://scotch.io/tutorials/creating-your-first-angular-2-components
- https://scotch.io/tutorials/angular-2-transclusion-using-ng-content
- http://nicholasjohnson.com/blog/how-to-do-transclusion-in-angular-2/
- https://blog.angularindepth.com/creating-reusable-angular-components-how-to-avoid-the-painful-trap-most-go-in-d531761d6c7a
- https://coryrylan.com/blog/angular-custom-form-controls-with-reactive-forms-and-ngmodel
- https://embed.plnkr.co/Yj93mh5ZnX6ONtaMQPAQ/
- http://devarchy.com/angular-components
- https://medium.com/aviabird/complete-angular-2-guide-components-in-depth-96fca743966b#.t26pl8km2
- http://4dev.tech/2016/03/angular2-tutorial-detecting-clicks-outside-the-component/
- http://www.bennadel.com/blog/3062-creating-an-html-dropdown-menu-component-in-angular-2-beta-11.htm
- https://matthewross.me/blog/posts/notifications-an-angular-2-component
- http://tombuyse.com/creating-a-loading-indicator-in-angular-2-ionic-2/
- https://www.eduonix.com/blog/web-programming-tutorials/learn-create-zippy-component-angular-2/

## CORE: ARCHITECTURE

- https://youtu.be/3BOP1KCJq6g?t=4243 Nir Kaufman: Build your own portal with Angular Embedded views
- https://github.com/nirkaufman/angular-nyc-january Example Angular Embedded views
- https://medium.com/wizdm-genesys/teleporting-content-in-angular-4cbd9ba8427f
- https://netbasal.com/beam-me-up-scotty-on-teleporting-templates-in-angular-a924f1a7798
- https://stackblitz.com/edit/angular-template-teleporter

## CORE: MODULES

- https://www.thetombomb.com/2019/11/13/app-module-vs-core-module-vs-shared-module-vs-feature-modules-in-angular/
- https://monolithcode.co.uk/angular-app_initializer-and-multiple-instances-of-a-service
- https://angular.io/guide/module-types#guidelines-for-creating-ngmodules
- http://blog.angular-university.io/angular2-ngmodule/
- https://johnpapa.net/introducing-angular-modules-feature-modules-2/
- https://itnext.io/understanding-angular-modules-5f1215130bc8
- https://indepth.dev/stop-using-shared-material-module/
- https://indepth.dev/avoiding-common-confusions-with-modules-in-angular/
- https://github.com/matheo/ng-providers

## CORE: FORMS

Learn how to build perfect form using reactive forms.

- https://medium.com/ngconf/managing-complex-forms-in-angular-167e4141ee0f
- https://indepth.dev/creating-elegant-reactive-forms-with-rxwebvalidators/
- https://offering.solutions/blog/articles/2020/05/03/cross-field-validation-using-angular-reactive-forms/
- https://indepth.dev/angular-forms-story-strong-types/
- https://dev.to/maxime1992/building-scalable-robust-and-type-safe-forms-with-angular-3nf9
- https://blog.angularindepth.com/dont-reinvent-the-wheel-when-implementing-controlvalueaccessor-a0ed4ad0fafd
- https://netbasal.com/keeping-it-simple-implementing-edit-in-place-in-angular-4fd92c4dfc70
- https://netbasal.com/how-to-implement-file-uploading-in-angular-reactive-forms-89a3fffa1a03
- https://netbasal.com/detect-unsaved-changes-in-angular-forms-75fd8f5f1fa6
- https://netbasal.com/angular-reactive-forms-tips-and-tricks-bb0c85400b58
- https://www.sitepoint.com/angular-forms/
- https://www.toptal.com/angular-js/angular-4-forms-validation
- https://blog.nrwl.io/angular-forms-in-depth-ecb7c58166b5#.aq9267ptf
- http://stackoverflow.com/questions/33866824/angular2-control-validation-on-blur/41973780#41973780
- https://coryrylan.com/blog/angular-form-builder-and-validation-management
- http://learnangular2.com/forms/
- https://toddmotto.com/angular-2-forms-template-driven
- https://toddmotto.com/angular-dynamic-components-forms
- https://toddmotto.com/angular-2-forms-reactive
- https://toddmotto.com/reactive-formgroup-validation-angular-2
- https://toddmotto.com/angular-ng-errors-form-validation
- https://scotch.io/tutorials/angular-2-form-validation
- https://devdactic.com/dynamic-components-ionic
- https://codeburst.io/angular-dynamic-forms-ng-switch-approach-4f267c01d2c
- https://slides.com/juanstoppa/dynamic-reactive-forms-angular-denver
- https://medium.com/@oojhaajay/dynamic-validation-in-angular-dynamic-forms-aca8df20ece0
- https://medium.com/@tomastrajan/angular-reactive-sub-forms-type-safe-without-duplication-dbd24225e1e8
- https://medium.com/@jecelynyeen/building-model-driven-form-with-latest-technique-in-angular-2-rc-4-b825ef780b8e#.5fhpxx1sy
- https://netbasal.com/implementing-grouping-checkbox-behavior-with-angular-reactive-forms-9ba4e3ab3965
- https://netbasal.com/make-your-angular-forms-error-messages-magically-appear-1e32350b7fa5

## CORE: PLATFORM

- https://github.com/Tibing/platform-terminal

## CORE: INTERCEPTOR

Learn how to extend your app with interceptors.

- https://github.com/gbumanzordev/angular-interceptors
- https://medium.com/mikes-fullstack-ladder/how-to-skip-http-interceptor-dee136e54a5f
- https://blog.angularindepth.com/top-10-ways-to-use-interceptors-in-angular-db450f8a62d6
- https://ryanchenkie.com/angular-authentication-using-the-http-client-and-http-interceptors
- https://github.com/angular/angular/issues/20203#issuecomment-368680437
- https://stackoverflow.com/questions/46469349/how-to-make-an-angular-module-to-ignore-http-interceptor-added-in-a-core-module/49013534#49013534

## CORE: GUARD

Learn how to secure your app with guards.

- https://jwt.io/introduction/
- https://github.com/firebase/php-jwt
- https://github.com/melcor76/interceptors
- https://stormpath.com/blog/jjwt-how-it-works-why/
- https://auth0.com/authenticate/angular2/oauth2
- https://auth0.com/authenticate/angular2/google-apps
- https://auth0.com/authenticate/angular2/facebook
- https://github.com/auth0-blog/angular2-authentication-sample
- https://ryanchenkie.com/angular-authentication-using-route-guards
- http://blog.thoughtram.io/angular/2016/07/18/guards-in-angular-2.html
- https://itnext.io/handle-restricted-routes-in-angular-with-route-guards-95c93be9d05e
- https://github.com/Ekito/angular-sandbox/blob/master/src/app/shared/auth/auth.guard.ts
- https://medium.com/@blacksonic86/authentication-in-angular-2-958052c64492#.qhvo193ie

## CORE: ACL

Access Control List is a service that allows you to protect/show content based on the current user's assigned role(s)

- https://medium.com/swlh/restraint-access-by-acl-on-angular-9-7ebe71e34a13
- https://medium.com/dailyjs/managing-user-permissions-in-angular-application-504c83752f83
- https://jasonwatmore.com/post/2020/09/09/angular-10-role-based-authorization-tutorial-with-example
- https://devblogs.microsoft.com/premier-developer/angular-how-to-implement-role-based-security/

## CORE: RXJS

Learn the reactive programming using rxjs.

- https://rxviz.com
- https://thinkrx.io
- https://rxjs.tools
- https://www.learnrxjs.io
- https://learnreactive.com
- https://www.rxjs-fruits.com
- https://github.com/moroshko/rxviz
- https://github.com/btroncone/learn-rxjs
- https://github.com/ichpuchtli/awesome-rxjs
- https://github.com/jsonberry/rxjs-examples
- https://github.com/waterplea/rxjs-challenge
- https://github.com/AngularWave/rxjs-challenge
- https://juristr.com/blog/2019/04/rxjs-finalize-operator/
- https://blog.briebug.com/blog/what-can-i-do-with-observables
- https://medium.com/javascript-in-plain-english/more-rxjs-transformation-operators-mergescan-and-pluck-2f09510abef
- https://ncjamieson.com/avoiding-switchmap-related-bugs/
- https://stackblitz.com/edit/rxjs-ev5no4?file=index.ts (Observable)
- https://blog.angular-university.io/rxjs-higher-order-mapping/
- https://blog.angular-university.io/rxjs-error-handling/
- https://indepth.dev/power-of-rxjs-when-using-exponential-backoff/
- https://medium.com/razroo/rxjs-pitfalls-and-how-to-avoid-them-870e54bea467
- https://itnext.io/the-magic-of-rxjs-sharing-operators-and-their-differences-3a03d699d255
- https://medium.com/@luukgruijs/understanding-rxjs-map-mergemap-switchmap-and-concatmap-833fc1fb09ff
- https://www.nerdeez.com/articles/rxjs/top-operators
- https://netbasal.com/rxjs-six-operators-that-you-must-know-5ed3b6e238a0
- https://coursetro.com/posts/code/150/RxJS-Operators-Tutorial---Learn-How-to-Transform-Observables
- https://netbasal.com/why-its-important-to-unsubscribe-from-rxjs-subscription-a7a6455d6a02
- https://medium.com/@rangleio/thinking-in-nested-streams-with-rxjs-8e7d51ce4775
- https://blog.angulartraining.com/rxjs-subjects-a-tutorial-4dcce0e9637f
- https://github.com/ReactiveX/rxjs-tslint migration to rxjs6 script
- https://yakovfain.com/2018/01/03/wrapping-an-rxjs-observable-stream-into-an-angular-service/
- https://blog.craftlab.hu/clarifying-observables-b7b3ed7e0a5f
- https://www.youtube.com/watch?v=65Us8NwmYf4 Top 7 RxJS Concepts for Angular Developers
- https://netbasal.com/create-the-tojson-operator-in-angular-adaac9356e21
- https://toddmotto.com/component-architecture-reactive-forms-angular
- https://blog.nrwl.io/reactive-programming-in-angular-7dcded697e6c
- https://netbasal.com/implement-ngmodeloptions-with-rxjs-and-custom-form-control-in-angular-4aa3bf96ab6
- http://reactivex.io/documentation/operators/merge.html
- http://slides.com/brunobaia/everything-is-a-stream
- https://blog.thoughtram.io/angular/2017/02/02/making-your-angular-app-fast.html
- https://blog.thoughtram.io/angular/2017/02/27/three-things-you-didnt-know-about-the-async-pipe.html
- https://angular-2-training-book.rangle.io/handout/observables/observables_array_operations.html
- http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html
- http://espeo.eu/blog/angular-2-reactive-programming-rxjs/
- https://jaxenter.com/reactive-programming-http-and-angular-2-124560.html
- https://lukajcb.github.io/blog/angular2/2016/04/02/frp-in-angular-2.html
- http://blog.thoughtram.io/angular/2016/01/06/taking-advantage-of-observables-in-angular2.html
- http://www.metaltoad.com/blog/angular-2-http-observables
- http://blog.jhades.org/how-to-build-angular2-apps-using-rxjs-observable-data-services-pitfalls-to-avoid/
- http://blog.rangle.io/observables-and-reactive-programming-in-angular-2/
- http://blog.angular-university.io/rxjs-switchmap-operator/
- https://blog.strongbrew.io/build-the-operators-from-rxjs-from-scratch/
- https://netbasal.com/rxjs-subjects-for-human-beings-7807818d4e4d
- http://restlet.com/blog/2016/04/18/interacting-efficiently-with-a-restful-service-with-angular2-and-rxjs-part-3/
- http://www.syntaxsuccess.com/viewarticle/combining-multiple-rxjs-streams-in-angular-2.0
- https://www.bennadel.com/blog/3184-creating-leaky-abstractions-with-rxjs-in-angular-2-1-1.htm
- https://www.sitepoint.com/rxjs-functions-with-examples/
- http://www.syntaxsuccess.com/viewarticle/combining-multiple-rxjs-streams-in-angular-2.0
- http://xgrommx.github.io/rx-book/content/getting_started_with_rxjs/subjects.html
- https://github.com/ReactiveX/rxjs/blob/master/doc/subject.md

## CORE: HTTP
- https://dev.to/florimondmanca/consuming-apis-in-angular--the-model-adapter-pattern-3fk5
- https://medium.com/better-programming/a-generic-http-service-approach-for-angular-applications-a7bd8ff6a068
- http://codingthesmartway.com/angular-4-3-httpclient-accessing-rest-web-services-with-angular
- https://github.com/seeschweiler/angular2-http-client-tutorial
- https://medium.com/google-developer-experts/angular-2-introduction-to-new-http-module-1278499db2a0#.8bpdi5iht
- http://www.bennadel.com/blog/3047-creating-specialized-http-clients-in-angular-2-beta-8.htm
- http://bennadel.github.io/JavaScript-Demos/demos/specialized-http-clients-angular2/
- http://blogs.walkingtree.in/2016/03/28/angular2-q-a-ii/ << Interceptors
- https://www.illucit.com/blog/2016/03/angular2-http-authentication-interceptor/#more-385
- http://www.barbarianmeetscoding.com/blog/2016/04/02/getting-started-with-angular-2-step-by-step-6-consuming-real-data-with-http/
- https://github.com/zaqqaz/ng2-rest-api
- https://speakerdeck.com/kuncevic/graphql-magic-with-angular?slide=53
- http://www.sitepoint.com/angular-2-mockbackend
- http://jasonwatmore.com/post/2016/11/24/angular-2-mockbackend-example-for-backendless-development
- https://www.genuitec.com/connecting-angular-2-app-java-ee-backend/
- https://hackernoon.com/from-zero-to-production-with-angular-firebase-and-gitlab-ci-598181cfc6e5

## CORE: CHANGE DETECTION

Learn everything about the change detection with or without zone.js.

- https://chriskohler.dev/angular-change-detection-infographic
- https://github.com/waynegakuo/angular-change-detection
- https://github.com/Mokkapps/angular-change-detection-demo
- https://github.com/nirkaufman/starter-angular/blob/master/ref/ref.md
- https://indepth.dev/supercharge-event-management-in-your-angular-application/
- https://indepth.dev/everything-you-need-to-know-about-change-detection-in-angular/
- https://medium.com/angular-in-depth/boosting-performance-of-angular-applications-with-manual-change-detection-42cb396110fb
- https://indepth.dev/a-gentle-introduction-into-change-detection-in-angular/
- https://netbasal.com/a-comprehensive-guide-to-angular-onpush-change-detection-strategy-5bac493074a4
- https://blog.angularindepth.com/these-5-articles-will-make-you-an-angular-change-detection-expert-ed530d28930
- http://blog.mgechev.com/2017/11/11/faster-angular-applications-onpush-change-detection-immutable-part-1
- https://blog.angularindepth.com/these-5-articles-will-make-you-an-angular-change-detection-expert-ed530d28930
- https://alligator.io/angular/change-detection-strategy
- https://blog.thoughtram.io/angular/2017/02/21/using-zones-in-angular-for-better-performance.html
- http://www.joshmorony.com/understanding-zones-and-change-detection-in-ionic-2-angular-2
- http://blog.thoughtram.io/angular/2016/02/22/angular-2-change-detection-explained.html
- http://teropa.info/blog/2015/03/02/change-and-its-detection-in-javascript-frameworks.html
- http://blog.thoughtram.io/angular/2016/02/01/zones-in-angular-2.html
- http://www.bennadel.com/blog/3055-public-properties-component-inputs-and-the-change-detection-contract-in-angular-2.htm
- https://toddmotto.com/component-events-event-emitter-output-angular-2
- https://www.javascripttuts.com/global-events-and-event-delegation-in-angular-2
- http://blogs.walkingtree.in/2016/03/28/angular2-q-a-i/
- http://blog.rangle.io/angular-2-change-detection/
- http://juristr.com/blog/2016/04/angular2-change-detection/

## CORE: SCHEMATICS

Learn the schematics tool to automatize and be more efficient.

- https://indepth.dev/speed-up-your-angular-schematics-development-with-useful-helper-functions/
- https://medium.com/swlh/automate-your-teams-boilerplates-by-building-your-own-schematics-640949001d46
- https://medium.com/@tomastrajan/total-guide-to-custom-angular-schematics-5c50cf90cdb4
- https://auth0.com/blog/create-custom-schematics-with-nx/
- https://www.telerik.com/blogs/the-what-and-how-of-angular-schematics-the-super-simple-version
- https://softwarearchitekt.at/post/2017/10/29/generating-custom-code-with-the-angular-cli-and-schematics.aspx
- https://github.com/nitayneeman/schematics-utilities
- https://github.com/schuchard/ng-schematics
- https://github.com/kroeder/ngx-cli-toolkit
- https://github.com/manfredsteyer/angular-crud
- https://github.com/niklas-wortmann/ngx-pact
- https://github.com/herodevs/material-studies
- https://github.com/TinkoffCreditSystems/ng-morph
- https://github.com/bennymeg/nx-electron
- https://github.com/Teebo/scss-migrate
- https://github.com/ngxs/schematics
- https://github.com/ngneat/tailwind
- https://github.com/angular-architects/nx-ddd-plugin
- https://github.com/angular-architects/module-federation-plugin
- https://github.com/d-koppenhagen/schematics-helpers-playground
- https://www.youtube.com/watch?v=S_XxDC4WdKI Angular Schematics

## CORE: DEPENDENCY INJECTION

Learn the built-in dependency injection mecanism and how to use it to inject your services accoss the differents components.

- https://netbasal.com/the-hidden-power-of-injectiontoken-factory-functions-in-angular-d42d5575859b
- https://www.bennadel.com/blog/3836-using-abstract-classes-as-dependency-injection-tokens-with-providedin-semantics-in-angular-9-1-9.htm
- https://www.amadousall.com/angular-services-3-common-misconceptions-about-the-injectable-decorator/
- https://christiankohler.net/angular-dependency-injection-infographic
- https://vsavkin.com/dependency-injection-in-angular-1-and-angular-2-d69589979c18#.63fqu1f7r
- http://blog.thoughtram.io/angular/2015/05/18/dependency-injection-in-angular-2.html
- http://www.captaincodeman.com/2016/04/03/angular2-di-service-decorator/
- https://medium.com/@weswhite/angular-singleton-service-and-a-loading-indicator-ca3cc7892722
- https://debugmode.net/2020/06/24/when-to-use-viewproviders-in-angular-simplified/
- https://medium.com/@michelestieven/angular-writing-configurable-modules-69e6ea23ea42

## CORE: ANIMATIONS

- https://github.com/williamjuan027/angular-animations-explorer
- https://dev.to/angular/angular-animate-css-in-five-easy-steps-8o6
- https://netbasal.com/creating-reusable-animations-in-angular-6a2350d6191a
- https://medium.com/google-developer-experts/angular-supercharge-your-router-transitions-using-new-animation-features-v4-3-3eb341ede6c8
- http://www.dzurico.com/angular-animate
- https://blog.thecodecampus.de/angular-2-animate-creating-sliding-side-navigation
- https://www.youtube.com/watch?v=mVqQDEtRBwA
- http://jasonwatmore.com/post/2017/04/19/angular-2-4-router-animation-tutorial-example
- https://medium.com/google-developer-experts/angular-applying-motion-principles-to-a-list-d5cdd35c899e

## CORE: MATERIAL

- https://material.angular.io/guide/customizing-component-styles
- https://medium.com/web-factory-llc/an-approach-to-dynamic-theme-color-generation-in-angular-5bc7acf2a8e6
- https://stackblitz.com/edit/material-wihtout-viewencapsulation-1?embed=1&file=src/app/example.theme.scss

## CORE: ROUTING

Learn about the angular router, lazy load your modules.

- https://dev.to/angular/angular-router-getting-to-know-urltree-activatedroutesnapshot-and-activatedroute-5dd1
- https://medium.com/ngconf/routing-to-angular-material-dialogs-c3fb7231c177
- https://medium.com/angular-in-depth/angular-code-splitting-or-how-to-share-components-between-lazy-modules-432c755e389c
- https://timdeschryver.dev/blog/guarding-your-angular-modules
- https://dev.to/angular/angular-9-lazy-loading-components-o04
- https://netbasal.com/welcome-to-the-ivy-league-lazy-loading-components-in-angular-v9-e76f0ee2854a
- https://blog.angularindepth.com/asynchronous-modules-and-components-in-angular-ivy-1c1d79d45bd3
- https://github.com/herodevs/herodevs-packages/tree/master/projects/lazy
- https://medium.com/@tomastrajan/why-and-how-to-lazy-load-angular-libraries-a3bf1489fe24
- https://medium.com/@zamamohammed/announcing-angular-loadable-ngx-loadable-2-2kb-4ef7e6321784
- https://medium.com/@michelestieven/lazy-loading-angular-modules-27856e940bb0
- https://toddmotto.com/lazy-loading-angular-code-splitting-webpack
- https://blog.nrwl.io/enable-lazy-loading-in-angular-2-apps-8298916056#.184fee12y
- https://www.nativescript.org/blog/optimizing-app-loading-time-with-angular-2-lazy-loading
- https://www.softwarearchitekt.at/post/2016/12/02/sticky-routes-in-angular-2-3-with-routereusestrategy.aspx
- https://github.com/davinkevin/angular2-lazyRoute
- http://www.gistia.com/working-angular-2-router-part-1
- https://devblog.dymel.pl/2016/10/06/lazy-loading-angular2-modules/
- http://damienbod.com/2016/03/29/angular-2-child-routing-and-components/
- http://blog.devcross.net/2016/03/25/angular-2-router-and-regular-expressions/
- https://coryrylan.com/blog/introduction-to-angular-2-routing
- http://www.captaincodeman.com/2016/03/31/angular2-route-security/
- https://vsavkin.com/the-powerful-url-matching-engine-of-angular-router-775dad593b03#.3307476y4
- https://angular.io/docs/ts/latest/guide/router.html
- https://angular.io/docs/ts/latest/api/#!?apiFilter=router
- https://medium.com/@ladyleet/figured-this-would-help-yall-a-bit-if-i-walked-through-it-72910e1497e#.4q75553e5
- https://sebastian-mueller.net/post/angular-router-preloading-routes/
- https://medium.com/@daviddentoom/angular-2-lazy-loading-with-webpack-d25fe71c29c1#.2jxbnchgk
- http://blog.thoughtram.io/angular/2016/10/10/resolving-route-data-in-angular-2.html : resolve/null/loading/async
- https://vsavkin.com/angular-router-preloading-modules-ba3c75e424cb#.tvrcmfszm
- https://keathmilligan.net/lazy-loading-content-with-angular-cli/
- http://www.monkeypatch.io/2017/03/07/ngVikings.html#part-i---lazy-loading
- https://angular-2-training-book.rangle.io/handout/modules/lazy-loading-module.html
- https://github.com/AngularClass/angular2-webpack-starter/wiki/Routing-and-Lazy-loading-@NgModules
- https://medium.com/tixdo-labs/angular-2-dynamic-component-loader-752c3235bf9#.7jgfb1s1w
- https://medium.com/@Batch1211/angular2-resolving-asynchronous-data-services-before-they-are-injected-into-your-component-fa597cac41e0#.f4o55yprw

## CORE: LAZY

- https://dev.to/humberd/angular-architecture-lazy-loaded-dialogs-59di
- https://github.com/Humberd/lazy-loaded-dialogs-in-angular
- https://stackoverflow.com/questions/46240293/how-to-lazyload-library-in-angular-4-module
- https://stackoverflow.com/questions/44200434/in-angular-cli-how-does-the-lazy-attribute-work-to-load-global-libraries
- https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/global-scripts.md
- https://medium.com/@zainzafar/angular-load-external-javascript-file-dynamically-3d14dde815cb
- https://theinfogrid.com/tech/developers/angular/lazy-loading-scripts-and-styles-angular/
- https://coryrylan.com/blog/angular-tips-dynamic-module-imports-with-the-angular-cli

## CORE: SECURITY

- https://www.youtube.com/watch?v=GaJ71V28woY Angular Vienna, Web Application Security for Frontend Devs, July 2019
- https://www.youtube.com/watch?v=WN-XczmI-LY Martin Probst (@martin_probst) , Raphaël Jamet: Security in Angular
- https://www.youtube.com/watch?v=l89acmnGMSc Philippe De Ryck - Boosting the security of your Angular
- https://snyk.io/blog/angular-security-best-practices/
- http://www.gistia.com/talk-backend-services-angular-2s-http-client
- https://pragmaticwebsecurity.com/articles/spasecurity/angular-xss.html
- https://medium.com/@NetanelBasal/angular-2-security-the-domsanitizer-service-2202c83bd90#.qyagk4j6f
- https://medium.com/square-corner-blog/content-security-policy-for-single-page-web-apps-78f2b2cf1757#.gue0ycfnm

## CORE: CSS
- https://www.youtube.com/watch?v=-oh_4l9qMIQ (Organizing Styles)
- https://blog.angular-university.io/angular-host-context/
- https://blog.angular-university.io/angular-ngclass-ngstyle
- https://angular.io/docs/ts/latest/guide/component-styles.html
- https://coryrylan.com/blog/css-encapsulation-with-angular-2-components
- https://medium.com/swlh/how-to-structure-scss-in-an-angular-app-a1b8a759a028
- https://medium.com/@gerard.sans/angular-advanced-styling-guide-v4-f0765616e635#.g5ibd8z4y
- https://dev.to/themeticulist/everything-you-should-know-about-styles-in-angular-12ab
- https://medium.com/@hardikpthv/viewencapsulations-in-angular-component-ce48fedcf94c

## CORE: UNIVERSAL

Learn everything about angular universal, make a good SEO.

- https://web.dev/optimize-lcp/
- https://www.youtube.com/watch?v=-VDOAjzLcvQ
- https://github.com/maciejtreder/ng-toolkit/issues/327
- https://www.willtaylor.blog/angular-universal-gotchas/
- https://medium.com/5bayt/angular-universal-d2254645c96e
- https://indepth.dev/posts/1440/global-objects-in-angular
- https://brianflove.com/2020-06-05/angular-transfer-state/
- https://github.com/angular/universal/blob/master/docs/gotchas.md
- https://indepth.dev/posts/1437/angular-universal-real-app-problems
- https://developers.google.com/search/docs/guides/dynamic-rendering
- https://stackoverflow.com/questions/61188853/angular-ssr-page-rerender-issue
- https://hackernoon.com/angular-server-side-rendering-state-transfer-for-http-requests-wu263t3h
- https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/client-hints
- https://medium.com/@dsimmons_23530/frustrated-with-angular-universal-ssr-heres-the-answer-35bf37d70cee
- https://www.w3resource.com/angular/server-side-rendering-an-intro-to-angular-universal.php
- https://www.positronx.io/angular-seo-set-dynamic-page-title-meta-tags-in-universal-app/
- https://medium.com/codestory/seo-in-angular-without-server-side-rendering-fa7d984dd44b
- https://samvloeberghs.be/posts/better-sharing-on-social-media-platforms-with-angular-universal/
- https://bcodes.io/blog/post/angular-universal-relative-to-absolute-http-interceptor
- https://dev.to/deekshithrajbasa/angular-server-side-rendering-ssr-the-browser-is-not-the-server-30a5
- https://www.thirdrocktechkno.com/blog/server-side-rendering-with-angular-10/
- https://www.digitalocean.com/community/tutorials/angular-angular-universal
- https://itnext.io/dont-let-angular-universal-break-you-or-your-app-some-tips-to-keep-your-sanity-5bf263495bb9
- https://scotch.io/tutorials/server-side-rendering-in-angular-2-with-angular-universal
- https://nichola.dev/optimizing-angular-applications/
- https://nichola.dev/user-experience-core-web-vitals-optimization-angular-universal/
- https://davidea.st/articles/measuring-server-side-rendering-performance-is-tricky
- https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/client-hints
- https://developers.google.com/web/updates/2019/02/rendering-on-the-web
- https://dev.to/ikatsuba/angular-universal-real-app-problems-3d2a
- https://malcoded.com/posts/server-rendering-pitfalls/
- https://www.loom.com/share/35330a858cd741ba92e8be0c0496ffbb
- https://slides.com/craigspence/angular-universal-in-the-real-world-15
- https://www.youtube.com/watch?v=-VDOAjzLcvQ SSR
- https://www.npmjs.com/package/ngx-seo
- https://snipcart.com/blog/angular-seo-universal-server-side-rendering
- https://davidea.st/articles/the-beginners-guide-to-angular-universal
- http://blog.devcross.net/2016/03/20/angular-2-seo/
- https://netbasal.com/exploring-the-new-meta-service-in-angular-version-4-b5ba2403d3e6
- https://blog.pusher.com/make-angular-4-app-seo-friendly
- https://angularfirebase.com/lessons/seo-angular-part-1-rendertron-meta-tags/
- https://stackoverflow.com/questions/53677419/add-static-pre-rendering-to-ng-add-nguniversal-express-engine


## CORE: ERROR HANDLER

Learn the angular error handler in order to catch the front-end and back-end errors.

- https://github.com/melcor76/global-error-handling
- https://blog.angularindepth.com/expecting-the-unexpected-best-practices-for-error-handling-in-angular-21c3662ef9e4
- https://medium.com/@aleixsuau/error-handling-angular-859d529fa53a
- https://medium.com/dailyjs/how-to-send-errors-into-slack-dc552e30506f
- https://medium.com/@aleixsuau/error-handling-angular-859d529fa53a
- https://medium.com/@NetanelBasal/angular-2-custom-exception-handler-1bcbc45c3230#.q40h2dl73

## CORE: UNIT TESTS

- https://www.youtube.com/watch?v=S0LxogWSMzE
- https://www.youtube.com/watch?v=7JucMlrs3dQ
- https://dev.to/rfornal/bad-test-bad-1og7
- https://dev.to/ryanlanciaux/better-testing-with-storybook-3fn
- https://www.udemy.com/course/rxjs-unit-testing-in-angular-application-the-whole-picture/
- https://timdeschryver.dev/blog/good-testing-practices-with-angular-testing-library
- https://ordina-jworks.github.io/testing/2018/08/03/testing-angular-with-jest.html
- https://netbasal.com/testing-asynchronous-code-in-angular-using-fakeasync-fc777f86ed13
- https://netbasal.com/spectator-v4-a-powerful-tool-to-simplify-your-angular-tests-bd65a0bf317e
- https://www.newline.co/@timdeschryver/good-testing-practices-with-angular-testing-library--7ecb6210
- https://marketplace.visualstudio.com/items?itemName=raagh.angular-karma-test-explorer
- https://medium.com/ngconf/how-to-override-component-providers-in-angular-unit-tests-b73b47b582e3
- https://medium.com/javascript-in-plain-english/unit-testing-angular-component-testing-f0c478de3dd8
- https://medium.com/@kevinkreuzer/test-your-components-using-angular-materials-component-harnesses-f9c1deebdf5d
- https://medium.com/@pattferraggi/how-i-found-a-problem-with-angular-unit-testing-and-decided-to-fix-it-myself-7c00b58d57a7
- https://medium.com/swlh/simplifying-angular-unit-testing-fc09bf142a7a
- https://netbasal.com/simulating-events-in-angular-unit-tests-5482618cd6c6
- https://medium.com/@joshblf/testing-angular-directives-dc8bffff5fa2
- https://medium.com/bhargav-bachina-angular-training/angular-unit-testing-pipes-4af036a3d98d
- https://medium.com/@nishu0505/crud-with-angular-5d8f39805c49
- https://blog.angularindepth.com/angular-unit-testing-viewchild-4525e0c7b756
- https://medium.com/@abdul_74410/towards-better-testing-in-angular-part-1-mocking-child-components-b51e1fd571da
- https://medium.com/claritydesignsystem/angular-testing-made-easy-4e11f6044129
- https://stackoverflow.com/questions/48789289/how-to-reuse-all-imports-in-angular-test-files
- https://christianlydemann.com/complete-guide-to-angular-testing/
- https://codecraft.tv/courses/angular/unit-testing/overview/
- https://alligator.io/angular/testing-async-fakeasync/
- https://github.com/codecraft-tv/angular-course/tree/current/13.unit-testing
- https://github.com/marmicode/farmicode/tree/master/docs/angular-unit-testing-fundamentals
- http://slides.com/gerardsans/ng-stockholm-testing-recipes
- https://medium.com/google-developer-experts/angular-2-testing-guide-a485b6cb1ef0
- https://gist.github.com/michaelbromley/bb4291200c25196507d12d2fd948a13e
- https://medium.com/allenhwkim/generate-angular-unit-tests-automatically-1300601ed73
- https://www.amadousall.com/unit-testing-angular-stubs-vs-spies-vs-mocks/
- http://onehungrymind.com/writing-basic-component-test-angular-testing-utilities/
- https://vsavkin.com/three-ways-to-test-angular-2-components-dcea8e90bd8d#.fh0twlfjl
- http://blog.rangle.io/testing-angular-2-applications/
- http://blog.devcross.net/2016/03/11/angular-2-typescript-codecoverage/
- https://medium.com/google-developer-experts/angular-2-unit-testing-with-jasmine-defe20421584#.8fqvbe9dr
- http://raibledesigns.com/rd/entry/testing_angular_2_applications
- https://semaphoreci.com/community/tutorials/testing-components-in-angular-2-with-jasmine
- https://medium.com/@paynoattn/simple-observable-unit-testing-in-angular2-43c4f4a0bfe2#.f51bkw9q4
- https://semaphoreci.com/community/tutorials/testing-services-in-angular-2?
- https://medium.com/google-developer-experts/angular-2-testing-guide-a485b6cb1ef0#.okdmpr9vu
- https://github.com/tomastrajan/angular-js-es6-testing-example
- https://blog.nrwl.io/rxjs-advanced-techniques-testing-race-conditions-using-rxjs-marbles-53e7e789fba5
- https://blog.craftlab.hu/testing-http-requests-in-angular-has-never-been-easier-dfe53c267522
- https://dev.to/qarunqb/tdd-in-angular-the-basics-of-general-testing-2bfb
- https://indepth.dev/create-your-angular-unit-test-spies-automagically/
- https://medium.com/swlh/simplifying-angular-unit-testing-fc09bf142a7a
- https://dev.to/nas5w/generate-all-possible-combinations-in-javascript-using-combinate-1713

## CORE: E2E TESTS

- https://angular.io/cli/e2e
- https://medium.com/@TammyTorres/e2e-testing-on-angular-app-with-protractor-tips-included-f3d5f65a8816
- https://dev.to/francisca80s/automation-e2e-testing-in-angular-with-protractor-72d
- https://coryrylan.com/blog/introduction-to-e2e-testing-with-the-angular-cli-and-protractor
- https://medium.com/@lukas.klement/implementing-code-coverage-with-angular-and-cypress-6ed08ed7e617

## CORE: MIGRATION

- https://vsavkin.com/migrating-angular-1-applications-to-angular-2-in-5-simple-steps-40621800a25b#.xhk466v64
- http://maxlab.fr/2015/12/migrer-de-angularjs-1-x-vers-angularjs-2-0-pratique/

## ECOSYSTEM: AUTHENTIFICATION

- https://github.com/abacritt/angularx-social-login
- http://jasonwatmore.com/post/2017/02/22/mean-with-angular-2-user-registration-and-login-example-tutorial
- http://4dev.tech/2016/03/login-screen-and-authentication-with-angular2/
- http://blog.thoughtram.io/angular/2016/03/14/custom-validators-in-angular-2.html
- http://almerosteyn.com/2016/03/angular2-form-validation-component
- http://youknowriad.github.io/angular2-cookbooks/stateless-authentication.html
- http://blog.rangle.io/how-angular-2-form-models-work/
- https://toddmotto.com/angular-2-authentication
- http://tphangout.com/angular-2-authentication-using-the-new-router/

## ECOSYSTEM: STORE: NGRX

- https://github.com/ngrx/platform
- https://github.com/co-IT/ngrx-ducks
- https://github.com/co-IT/ngrx-vis
- https://github.com/cartant/ts-action
- https://github.com/paularmstrong/normalizr
- https://github.com/johnpapa/ngrx-data-lab
- https://github.com/timdeschryver/ngrx-etc
- https://github.com/markostanimirovic/ngrx-child-selectors
- https://github.com/markostanimirovic/ngrx-handlers
- https://github.com/meeroslav/ng-helpers
- https://github.com/nartc/ngrx-slice
- https://github.com/SaulMoro/ngrx-rtk-query
- https://github.com/rtk-incubator/rtk-query
- https://github.com/MrWolfZ/ngrx-forms
- https://github.com/satanTime/ngrx-graphql
- https://github.com/briebug/ngrx-auto-entity
- https://github.com/satanTime/ngrx-correlation-id
- https://github.com/briebug/ngrx-entity-schematic
- https://github.com/IliaIdakiev/ngrx-action-bundles
- https://github.com/satanTime/ngrx-entity-relationship
- https://github.com/larscom/ngrx-store-storagesync
- https://github.com/brandonroberts/ngrx-store-freeze
- https://github.com/wesleygrimes/ngrx-file-upload
- https://github.com/nilsmehlhorn/ngrx-wieder
- https://github.com/btroncone/ngrx-store-logger
- https://github.com/btroncone/ngrx-store-localstorage
- https://github.com/timdeschryver/ngrx-tslint-rules
- https://github.com/timdeschryver/eslint-plugin-ngrx
- https://github.com/NetanelBasal/ngrx-generator
- https://github.com/ngrx-utils/ngrx-utils
- https://github.com/blove/ngrx-testing
- https://github.com/timdeschryver/ngrx-immer
- https://github.com/waynegakuo/ngrx-learning
- https://github.com/tomastrajan/angular-ngrx-material-starter

## ECOSYSTEM: STORE: NGRX: DEMO
- https://github.com/Wykks/wonderful-todo-list
- https://github.com/bbaia/todomvc-angular-ngrx

## ECOSYSTEM: STORE: NGRX: ARTICLES
- https://dev.to/angular/nested-ngrx-entity-state-211k
- https://timdeschryver.dev/blog/nested-ngrx-entity-state
- https://indepth.dev/posts/1206/understanding-the-magic-behind-ngrx-effects
- https://netbasal.com/listening-for-actions-in-ngrx-store-a699206d2210
- https://blog.strongbrew.io/how-to-write-clean-reducers-and-test-them/
- https://dev.to/alfredoperez/my-notes-from-ngrx-workshop-from-ngconf-2020-part-1-introduction-h8l
- https://dev.to/jonrimmer/where-to-initiate-data-load-in-ngrx-358l
- https://nx.dev/angular/guides/misc-data-persistence
- https://tomastrajan.github.io/angular-ngrx-material-starter
- https://dev.to/itnext/ngrx-store-and-5-silly-mistakes-2nho
- https://christianlydemann.com/top-5-ngrx-mistakes/
- https://dev.to/this-is-angular/why-you-should-definitely-use-ngrx-2pf2
- https://www.katesky.com/2020/06/22/angular-ngrx-enabling-devtools-at-runtime/
- https://medium.com/@gregor.woiwode/ngrx-ducks-9-the-new-api-a3a4be242309
- https://medium.com/@haldun7/caching-http-requests-while-using-ngrx-effects-98abd50c5c78
- https://medium.com/angular-in-depth/ngrx-cherry-picking-the-meta-30869953e929
- https://blog.brainsandbeards.com/advanced-redux-patterns-normalisation-6b9a5aa46e1f
- https://itnext.io/ngrx-best-practices-for-enterprise-angular-applications-6f00bcdf36d7
- https://medium.com/angular-in-depth/the-benefits-of-application-state-normalization-in-angular-f93392ca9f44
- https://medium.com/@bo.vandersteene/mock-your-ngrx-store-on-the-easy-way-68c66d4bea63
- https://medium.com/@andrew_evans/exception-handling-with-ngrx-effects-70ec942e6465
- https://medium.com/@thomasburlesonIA/ngrx-facades-better-state-management-82a04b9a1e39
- https://medium.com/razroo/quick-dive-into-centralizing-your-data-in-angular-with-ngrx-router-store-ca4b177b0b10
- https://medium.com/simars/ngrx-router-store-reduce-select-route-params-6baff607dd9
- https://medium.com/capital-one-tech/multiple-entities-in-a-single-ngrx-8-state-ed5fd082c3f0
- https://codeburst.io/state-management-in-angular-ee2ccb81c283
- https://blog.angularindepth.com/ngrx-action-creators-redesigned-d396960e46da
- https://itnext.io/reactive-programming-in-angular-reactive-components-part-1-7291882e352c
- https://angularfirebase.com/lessons/angular-ngrx-redux-starter-guide/
- https://medium.com/@gregor.woiwode/ngrx-ducks-dynamic-facades-improving-coding-experience-3bf5f832f21c
- https://devchat.tv/adv-in-angular/aia-260-ngrx-the-mystical-machine-with-wes-grimes/
- https://indepth.dev/start-using-ngrx-effects-for-this/
- https://www.logisticinfotech.com/blog/easiest-demo-to-learn-ngrx-in-angular-6
- http://brianhudi.org/2017/11/15/adding-ngrx-to-existing-projects-is-easy
- https://medium.com/developers-writing/a-class-based-approach-to-writing-reducers-in-redux-ngrx-4a8ec5f97b1
- https://alligator.io/angular/ngrx-entity/
- https://medium.com/ngrx/introducing-ngrx-entity-598176456e15
- https://netbasal.com/connect-angular-forms-to-ngrx-store-c495d17e129
- https://blog.nrwl.io/ngrx-patterns-and-techniques-f46126e2b1e5
- https://www.toptal.com/angular-js/ngrx-angular-reaction-application
- https://netbasal.com/implementing-a-meta-reducer-in-ngrx-store-4379d7e1020a
- https://blog.dmbcllc.com/how-to-really-use-ngrx
- https://dzone.com/articles/managing-state-in-angular-with-ngrxstore
- https://appendto.com/2016/08/handling-the-challenge-of-shared-state-with-ngrxstore-in-angular-2/
- https://hackernoon.com/what-i-have-learned-using-ngrx-redux-with-angular-2-20a748149661
- https://julienrenaux.fr/2017/02/16/from-redux-to-angular-ngrxstore
- http://julienrenaux.fr/2016/08/03/introduction-to-redux-and-angular2/
- http://blog.ng-book.com/introduction-to-redux-with-typescript-and-angular-2/
- http://orizens.com/wp/topics/adding-redux-with-ngrxstore-to-angular-2-part-1
- https://indepth.dev/understanding-the-magic-behind-ngrx-store/
- https://www.youtube.com/watch?v=LesJdh4uRmk Hello generics, goodbye boilerplate
- https://www.youtube.com/watch?v=T-vQoI_AM9E Magical TypeScript features for NgRx
- https://www.youtube.com/watch?v=UEcdQR-NoNA Using Redux in Angular 2+ Apps
- https://www.youtube.com/watch?v=4YKrBTQykzA NgRx Tree Like Shaped Data
- https://www.youtube.com/watch?v=OZam9fNNwSE The Facade of NgRx Facades
- https://www.youtube.com/watch?v=YbYj4b2yIN8 Advanced NgRx Techniques
- https://www.youtube.com/watch?v=1hlXlsaMeTs Simple login/logout

## ECOSYSTEM: STORE: NGRX/DATA

- https://github.com/ngrx/platform/network/dependents?package_id=UGFja2FnZS00NjAxODgyMTE%3D
- https://github.com/jannesrsa/ng-bootstrap-training
- https://github.com/victorbandeira182/CrudReduxV8
- https://github.com/manfredsteyer/ngrx-data-sample
- https://github.com/fpl1976/ngrx-data
- https://github.com/ershad1/ngrx-data
- https://github.com/sithelo/hlc-web

## ECOSYSTEM: STORE: NGRX/COMPONENT

- https://ngrx.io/guide/component
- https://indepth.dev/angulars-push-pipe-part-1/
- https://medium.com/ngconf/a-first-look-at-ngrx-component-f7fcbf83669a


## ECOSYSTEM: STORE: NGRX/COMPONENT-STORE

- https://github.com/beeman/component-store-playground
- https://github.com/dsebastien/ngrx-component-store-demo
- https://github.com/alex-okrushko/component-store-demo
- https://github.com/tomwhite007/ngrx-component-store-experiment
- https://stackblitz.com/edit/heroes-component-store
- https://stackblitz.com/edit/github-component-store-demo
- https://stackblitz.com/edit/angular-ivy-hdkz19
- https://stackblitz.com/edit/angular-ivy-p9cgc9
- https://stackblitz.com/@alex-okrushko
- https://hackmd.io/zLKrFIadTMS2T6zCYGyHew?view
- https://github.com/ngrx/platform/issues/2489
- https://www.youtube.com/watch?v=EeNMGhLnBGg component store - april 24
- https://www.youtube.com/watch?v=6H31VLtS4ZA component store - july 15
- https://www.twitch.tv/videos/710076459 Angular Unfiltered - NgRx V10 

- https://indepth.dev/posts/1408/how-to-manage-angular-state-in-your-components
- https://medium.com/javascript-in-plain-english/introducing-ngrx-component-store-part-1-67019dba0cb0
- https://medium.com/javascript-in-plain-english/ngrx-component-store-deep-dive-947c0a5be6dc
- https://medium.com/ngrx/announcing-ngrx-version-10-new-packages-for-local-component-state-and-reactive-components-swag-62bedda0be91

## ECOSYSTEM: STORE: ALTERNATIVE

Discover alternative to ngrx for the state management of your objects.

- https://github.com/nullpub/dux
- https://github.com/mobxjs/mobx
- https://github.com/ngxs/store
- https://github.com/logux/state
- https://github.com/BioPhoton/ngx-rx
- https://github.com/kuncevic/rx-service
- https://github.com/spierala/mini-rx-store
- https://github.com/aikoven/typescript-fsa
- https://github.com/lacolaco/reactive-store
- https://github.com/stefanoslig/xstate-angular
- https://github.com/iliasbhal/xstate-builder
- https://github.com/markostanimirovic/juliette
- https://github.com/AmadeusITGroup/ngx-tansu
- https://github.com/state-adapt/state-adapt
- https://github.com/ngxs-labs/data
- https://github.com/ngxs-labs/emitter
- https://github.com/ngxs-labs/immer-adapter
- https://github.com/profanis/ngxs-history-pluginma
- https://github.com/reclarejs/reclare
- https://github.com/storeon/angular
- https://github.com/datorama/akita
- https://github.com/dappsnation/akita-ng-fire
- https://github.com/zerobias/effector
- https://github.com/cerebral/overmind
- https://github.com/maktarsis/routeshub
- https://github.com/danwahlin/observable-store
- https://github.com/redux-observable/redux-observable
- https://github.com/markerikson/redux-ecosystem-links
- https://github.com/angular-extensions/model
- https://github.com/universal-model/universal-model-angular
- https://github.com/davidkpiano/xstate/
- https://github.com/georgebatalinski/localstatetodo
- https://github.com/codethatstack/cqrx
- https://github.com/NetanelBasal/akita-ng-forms-manager
- https://github.com/trungk18/jira-clone-angular
- https://stackblitz.com/edit/rxjs-arjn1h
- http://www.getbreezenow.com/
- https://medium.com/ngxs/ngxs-facade-3aa90c41497b
- https://codeburst.io/effector-state-manager-6ee2e72e8e0b
- https://blog.angularindepth.com/state-management-in-angular-using-akita-82f117d282dd
- https://blog.angularindepth.com/angular-you-may-not-need-ngrx-e80546cc56ee
- https://dev.to/alfredoperez/angular-service-to-handle-state-using-behaviorsubject-4818
- https://dev.to/arielgueta/introducing-one-to-many-relationship-in-angular-akita-37me
- https://engineering.datorama.com/ui-state-management-made-easy-with-akita-and-angular-6e460566ec7c
- https://juristr.com/blog/2018/10/simple-state-management-with-scan/
- https://medium.com/@rmcavin/my-favorite-state-management-technique-in-angular-rxjs-behavior-subjects-49f18daa31a7
- https://dev.to/danwahlin/simplifying-front-end-state-management-with-observable-store-1jjp
- https://ordina-jworks.github.io/angular/2018/10/08/angular-state-management-comparison.html
- https://netbasal.com/introducing-akita-a-new-state-management-pattern-for-angular-applications-f2f0fab5a8
- https://medium.com/@amcdnl/the-future-of-javascript-state-management-is-less-state-management-ba1d97b99308
- https://medium.com/@tomastrajan/model-pattern-for-angular-state-management-6cb4f0bfed87
- https://www.youtube.com/watch?v=fBQnDSeN8r8 Brew your own state management vs NgRx

## ECOSYSTEM: WEB-COMPONENTS

- https://webcomponents.dev/
- https://open-wc.org/publishing/
- https://github.com/open-wc/open-wc
- https://github.com/BuilderIO/jsx-lite
- https://custom-elements-everywhere.com/
- https://github.com/HTMLElements/smart-webcomponents

## ECOSYSTEM: MICROFRONTEND

- https://frint.js.org
- https://www.mosaic9.org
- https://single-spa.js.org
- https://micro-frontends.org
- https://github.com/SAP/luigi
- https://github.com/phodal/mooa
- https://github.com/smapiot/piral
- https://github.com/umijs/qiankun
- https://github.com/module-federation
- https://github.com/worktile/ngx-planet
- https://github.com/CanopyTax/single-spa
- https://github.com/valorkin/ng-mf-submodules
- https://github.com/TinkoffCreditSystems/roofer
- https://github.com/flash-me/angular-micro-frontends
- https://github.com/manfredsteyer/angular-microfrontend
- https://github.com/manfredsteyer/module-federation-light
- https://github.com/manfredsteyer/microfrontend-prototype
- https://github.com/manfredsteyer/nx-and-module-federation
- https://github.com/manfredsteyer/multi-framework-micro-frontend
- https://github.com/angular-architects/module-federation-plugin
- https://github.com/manfredsteyer/module-federation-with-angular
- https://github.com/manfredsteyer/module-federation-plugin-example
- https://github.com/manfredsteyer/module-federation-plugin-example-nx
- https://github.com/TinkoffCreditSystems/shared-library-webpack-plugin
- https://github.com/manfredsteyer/module-federation-with-angular-dynamic
- https://github.com/newvladimirov/module-federation-with-angular-universal
- https://github.com/alexzuza/angular-plugin-architecture-with-module-federation
- https://leanpub.com/enterprise-angular
- https://www.infoq.com/podcasts/micro-frontends-dazn/
- https://ruairidh.dev/introduction-to-micro-frontends
- https://martinfowler.com/articles/micro-frontends.html
- https://slides.com/williamgrasel/a-era-dos-micro-frontends#/
- https://codeburst.io/breaking-a-large-angular-app-into-microfrontends-fb8f985d549f
- https://medium.com/bb-tutorials-and-thoughts/how-to-implement-micro-frontend-architecture-with-angular-e6828a0a049c
- https://blog.angularindepth.com/how-to-compile-your-angular-components-library-into-web-components-47ff0ac73bd7
- https://blog.angularindepth.com/angular-and-react-together-with-ivy-5c77d1f48204
- https://egghead.io/lessons/angular-transform-an-angular-component-into-a-native-custom-element
- https://fr.slideshare.net/AmadouSall3/web-components-and-angular-gdg-toulouse-23022017
- https://www.angulararchitects.io/aktuelles/the-microfrontend-revolution-module-federation-in-webpack-5/
- https://www.angulararchitects.io/aktuelles/the-microfrontend-revolution-part-2-module-federation-with-angular/
- https://www.angulararchitects.io/konferenzen/the-microfrontend-revolution-module-federation-with-angular/
- https://dev.to/manfredsteyer/tutorial-getting-started-with-webpack-module-federation-and-angular-2edd?utm_source=dormosheio&utm_campaign=dormosheio
- https://www.youtube.com/watch?v=-ThsrA8hRLc AngularAir - Micro Front End Revolution with Module Federation and Angular with Manfred Steyer

## ECOSYSTEM: MONOREPO

ANUGLAR SCALABLE / LARGE ORGANIZATION / BIG APPS REPO / MONOREPO / SHARED CODEBASE

- https://youtu.be/piQ0EZhtus0 Angular at Large Organizations - Victor Savkin
- https://youtu.be/tTR9OVMC0VE ngConf & Nx Webinar: Never Build the Same Code Twice with Nx Cloud
- https://youtu.be/LEqJ1xKf_1w Smarter & Faster Angular Development with Nx | ng-conf & Nx
- https://youtu.be/YU-fMRs-ZYU Manfred Steyer: Architectures for huge Angular based enterprise applications
- https://youtu.be/shqVhPJGEZU Manfred Steyer: Architectures for huge Angular based enterprise applications
- https://youtu.be/hozkdCsP2fs Angular Vienna, Architecting large angular solutions, May 2019
- https://youtu.be/eAeoDxLTavc The monorepo blueprint - creating scalable architecture for a monorepo
- https://youtu.be/EqqNexmu3Ug Super Powered, Server Rendered Progressive Native Apps - Nathan Walker, Jeff Whelpley
- https://youtu.be/0I8D25nab5c xplat multi-platform tools for Nx workspaces with Nathan Walker
- https://youtu.be/uUSe0QZm6AE Cross Platform with Angular and Ionic 4 by Mike Hartington
- https://youtu.be/pcTSDMid-aE AngularAir - Advanced Nx
- https://youtu.be/hQ5qCK9-n2Q Angular Monorepo Diaries | Balazs Korossy-Khayll
- https://youtu.be/gybfda4UsI4 mono-repos for frontend
- https://www.twitch.tv/videos/636354209 NX plugin example: NX Ionic React
- https://leanpub.com/enterprise-angular
- https://leanpub.com/angular-architecture-the-unofficial-guide
- https://github.com/alan-agius4/ng-mono-repo-starter
- https://github.com/microsoft/rushstack
- https://nstudio.io/xplat
- https://nxpm.dev/
- https://bit.dev
- https://nxplaybook.com/
- https://nxplaybook.com/p/advanced-nx-workspaces
- https://github.com/nrwl/nx
- https://github.com/jscutlery/semver
- https://github.com/eulerrapp/nx-python
- https://github.com/nx-dotnet/nx-dotnet
- https://github.com/simondotm/nx-firebase
- https://github.com/atlassian/changesets
- https://github.com/nrwl/nx-examples
- https://github.com/nrwl/nx-jenkins-build
- https://github.com/nrwl/nx-custom-layout
- https://github.com/Phillip9587/nx-stylelint
- https://github.com/nxpm/nxpm-cli
- https://github.com/twittwer/nx-tools
- https://github.com/nx-go/nx-go
- https://github.com/ctx-core/ctx-core
- https://github.com/codeonrocks/nx-python
- https://github.com/kachkaev/njt
- https://github.com/NativeScript/nx
- https://github.com/Dev-Thought/nx-plugins
- https://github.com/flowaccount/nx-plugins
- https://github.com/bennymeg/nx-electron
- https://github.com/DominikPieper/nx-extensions
- https://github.com/MansaGroup/nrwl-nx-action
- https://github.com/gperdomor/nx-tools
- https://github.com/devinshoemaker/nxtend
- https://github.com/nxtend-team/nxtend
- https://github.com/TriPSs/nx-extend
- https://github.com/tinesoft/nxrocks
- https://github.com/ZachJW34/nx-plus
- https://github.com/nxext/nx-extensions
- https://github.com/nrwl/nx-workshop
- https://github.com/gagle/nx-check-changes
- https://github.com/sevenwestmedia-labs/nx-plugins
- https://github.com/manfredsteyer/angular-ddd
- https://github.com/orjandesmet/nx-sparse-checkout
- https://github.com/manfredsteyer/strategic-design
- https://github.com/Quramy/npm-ts-workspaces-example
- https://github.com/manfredsteyer/monorepo_domains
- https://github.com/pmowrer/semantic-release-monorepo
- https://github.com/angularbuilders/angular-blueprint
- https://github.com/manfredsteyer/demo-workspace-schematics
- https://github.com/manfredsteyer/nx-plugin-example
- https://github.com/lydemann/Todo-monorepo
- https://github.com/korfuri/awesome-monorepo
- https://github.com/balazsconf/monodemo
- https://github.com/nxpm/stack
- https://github.com/jsonberry/pentacle
- https://github.com/Bielik20/nx-mean-starter
- https://github.com/manfredsteyer/custom-nx-cache
- https://github.com/xmlking/ngx-starter-kit
- https://github.com/nrwl/nx/issues/2633 ionic5 support
- https://github.com/nstudio/xplat-sample-ionic-web
- https://github.com/warrendugan/ionic-capacitor-nx-monorepo
- https://github.com/lerna/lerna
- https://github.com/preconstruct/preconstruct
- https://github.com/bcabanes/nxCloudTravisCi
- https://angularbites.com/building-scalable-multi-platform-projects-with-angular-and-nx/
- https://dev.to/devinshoemaker/running-nx-affected-commands-in-github-actions-56f6
- https://dev.to/devinshoemaker/executing-external-schematics-in-an-nx-plugin-a4k
- https://izifortune.com/share-angular-libraries-with-lerna/
- https://devdactic.com/ionic-multi-app-shared-library/
- https://nstudio.io/xplat/getting-started/getting-started
- https://egghead.io/lessons/node-js-create-an-nx-workspace-with-prettier-husky-and-lint-staged
- https://ordina-jworks.github.io/architecture/2020/01/23/Nx.html
- https://ordina-jworks.github.io/architecture/2020/03/31/nx-sparse-checkout.html
- https://github.blog/2020-01-17-bring-your-monorepo-down-to-size-with-sparse-checkout/
- https://tane.dev/2020/05/publishing-npm-libraries-using-nx-and-github-actions/
- https://indepth.dev/the-shell-library-patterns-with-nx-and-monorepo-architectures/
- https://blog.devget.net/development/angular-8-ionic-4-monorepo-part-1-the-setup/
- https://blog.bitsrc.io/monorepo-architecture-simplified-with-bit-and-npm-b1354be62870
- https://www.softwarearchitekt.at/aktuelles/6-steps-to-your-angular-based-microfrontend-shell/
- https://itnext.io/building-scalable-multi-platform-projects-with-angular-and-nx-a13b40885e54
- https://itnext.io/building-an-enterprise-grade-angular-project-structure-f5be32533ba3
- https://itnext.io/monorepo-pains-9064db3b9882
- https://blog.bitsrc.io/sharing-components-with-angular-and-bit-b68896806c18
- https://medium.com/mean-fire/nx-nrwl-ionic-1baf3a43db74
- https://medium.com/swlh/migrating-to-monorepo-ee641dd6502a
- https://medium.com/@hoangbkit/why-monorepo-in-2018-89221acd4bfb
- https://medium.com/invisible-reports/report-we-went-monorepo-c0aadd144fb
- https://medium.com/angular-in-depth/release-management-in-angular-with-lerna-21b4ab417c59
- https://blog.strongbrew.io/opinionated-guidelines-for-large-nx-angular-projects/
- https://blog.angularindepth.com/release-management-in-angular-with-lerna-21b4ab417c59
- https://dev.to/thisdotmedia/angular-libraries-with-nx-for-enterprise-apps-395h
- https://dev.to/angular/sustainable-angular-architectures-with-tactical-ddd-and-monorepos-c61
- https://dev.to/gc_psk/building-an-enterprise-grade-angular-project-structure-3ihk
- https://speakerdeck.com/manfredsteyer/sustainable-architectures-with-angular-monorepos-and-ddd-at-ijs-2019-in-munich
- https://speakerdeck.com/manfredsteyer/architectures-for-huge-angular-based-enterprise-applications-at-it-tage-2018-in-frankfurt-c6896923-cb10-406d-aec5-cd696c6133c6?slide=1
- https://www.softwarearchitekt.at/aktuelles/automating-your-angular-architecture-with-workspace-schematics-part-1-rules-and-parameters/
- https://medium.com/agorapulse-stories/sharing-ngrx-based-logic-between-angular5-web-app-and-ionic3-mobile-app-77c19470cccc
- https://cdn2.hubspot.net/hubfs/2757427/enterprise-angular-mono-repo-patterns.pdf
- https://blog.nrwl.io/12-things-to-help-large-organizations-do-angular-right-f261a798ad6b
- https://www.netlify.com/blog/2020/04/21/deploying-nx-monorepos-to-netlify/
- https://blog.angularindepth.com/why-angular-teams-fail-at-code-sharing-and-how-this-monorepo-approach-will-fix-it-7a29e366a1f9
- https://github.com/duncanhunter/Enterprise-Angular-applications-with-ngrx-and-nx/blob/master/chapter1.md
- https://indepth.dev/how-to-set-up-an-nx-style-monorepo-workspace-with-the-angular-cli-part-1/
- https://indepth.dev/how-to-set-up-an-nx-style-monorepo-workspace-with-the-angular-cli-part-2/
- https://indepth.dev/how-to-set-up-an-nx-style-monorepo-workspace-with-the-angular-cli-part-3/
- https://indepth.dev/how-to-set-up-an-nx-style-monorepo-workspace-with-the-angular-cli-part-4/
- https://docs.google.com/presentation/d/1MknPww1MdwzreFvDh086TzqaB5yyQga0PaoRR9bgCXs/edit#slide=id.g2fa7fd70ec_0_2157
- https://docs.google.com/presentation/d/1pBh13OQlNU014ImABfP-8MXJL3eIuXLdBdMvp9ZVIuc/edit#slide=id.g41a47c59d4_0_3
- https://courses.nativescripting.com/courses/nativescript-with-nx-workspaces-and-xplat/lectures/25021523
- https://juristr.com/blog/2020/05/nx-libs-with-assets/
- https://medium.com/showpad-engineering/how-to-programmatically-enforce-boundaries-between-applications-and-libraries-in-an-nx-monorepo-39bf8fbec6ba
- https://codeburst.io/continuous-integration-lint-staged-husky-pre-commit-hook-test-setup-47f8172924fc
- https://offering.solutions/blog/articles/2021/01/27/starting-angular-projects-with-nx/
- https://emilyxiong.medium.com/my-nx-project-boilerplate-7e0aa95f848

## ECOSYSTEM: INCREMENTAL

- https://github.com/nrwl/nx-incremental-large-repo
- https://nx.dev/previous/angular/structure/buildable-and-publishable-libraries
- https://tech.trellis.org/Coverting-Legacy-Codebase-to-Nx-Incremental-Builds/

## ECOSYSTEM: SEEDS

Starter samples, seeds, alternative to the default Angular CLI tools in order to help to bootstrap a new Angular project in different platforms (web, mobile, desktop)

- https://github.com/nrwl/nx
- https://github.com/ngneat/lib
- https://github.com/wizdmio/wizdm
- https://github.com/angular/angular-cli
- https://github.com/martinoppitz/leanup
- https://github.com/irustm/angular-nodegui
- https://github.com/maximegris/angular-electron
- https://github.com/jhipster/generator-jhipster
- https://github.com/ngx-rocket/generator-ngx-rocket
- https://github.com/just-jeb/electron-angular-native
- https://github.com/DanWahlin/Angular-JumpStart
- https://github.com/DanWahlin/angular-architecture
- https://github.com/NathanWalker/angular2-seed-advanced
- https://github.com/mgechev/angular2-seed
- https://github.com/juliemr/ng2-test-seed
- https://github.com/kolorobot/angular2-typescript-gulp
- https://github.com/mitsuruog/angular2-minimum-starter
- https://github.com/jgodi/angular2-fullstack-starter
- https://github.com/preboot/angular2-webpack
- https://github.com/pkozlowski-opensource/ng2-play
- https://github.com/ocombe/ng2-play/tree/ng2-translate
- https://github.com/ocombe/angular2-seed/tree/ng2-translate
- https://github.com/angular-cms/angular-cms
- https://github.com/pregular

## ECOSYSTEM: JAMSTACK

- https://github.com/Jefiozie/scully-101
- https://indepth.dev/how-to-migrate-wordpress-to-scully/
- https://d-koppenhagen.de/blog/2020-01-angular-scully
- https://d-koppenhagen.de/blog/2020-03-dig-deeper-into-scully-ssg
- https://snipcart.com/blog/angular-static-site-generator-scully
- https://solocoding.dev/blog/eng_angular_angular_ci_cd_githupactions
- https://solocoding.dev/blog/eng_angular_title_meta_tags_Angular_Scully 
- https://www.netlify.com/blog/2020/02/24/update-on-scully-angulars-static-site-generator/  
- https://samvloeberghs.be/posts/scully-or-angular-universal-what-is-the-difference
- https://samvloeberghs.be/posts/custom-plugins-for-scully-angular-static-site-generator
- https://www.netlify.com/blog/2019/12/17/building-an-angular-jamstack-app-with-scully/
- https://dev.to/bitovi/server-side-rendering-dynamic-routes-in-angular-with-scully-6m8
- https://dev.to/bitovi/why-you-should-be-using-transferstate-to-cache-your-api-calls-in-angular-3nn7
- https://jenniferwadella.com/blog/rendering-static-pages-from-dynamic-routes-in-angular-with-scully
- https://podcasts.google.com/feed/aHR0cHM6Ly93d3cuc3ByZWFrZXIuY29tL3Nob3cvNDE3NTIyMS9lcGlzb2Rlcy9mZWVk/episode/aHR0cHM6Ly9hcGkuc3ByZWFrZXIuY29tL2VwaXNvZGUvMjc0MTMxNDY?ved=0CA0QzsICahcKEwi47Mi1lNnpAhUAAAAAHQAAAAAQBQ

## ECOSYSTEM: LIB: MAKE 

Learn how to make your own angular lib, build, distribute.

- https://github.com/kreuzerk/ng-samurai
- https://github.com/ng-packagr/ng-packagr
- https://github.com/robisim74/angular-library-starter
- https://github.com/TinkoffCreditSystems/angular-open-source-starter
- https://github.com/tomastrajan/angular-library-architecture-example
- https://github.com/mattlewis92/generator-angular-library
- https://github.com/jvandemo/generator-angular2-library
- https://github.com/rangle/angular-2-aot-sandbox
- https://github.com/angular/angular-cli/issues/3580
- https://next.angular.io/guide/creating-libraries
- https://blog.angularindepth.com/creating-a-library-in-angular-6-87799552e7e5
- https://blog.angularindepth.com/creating-a-library-in-angular-6-part-2-6e2bc1e14121
- https://blog.angularindepth.com/the-angular-library-series-publishing-ce24bb673275
- https://blog.angularindepth.com/building-extensible-dynamic-pluggable-enterprise-application-with-angular-aed8979faba5
- https://medium.com/angular-in-depth/step-by-step-guide-to-creating-your-first-library-in-angular-6827276bfc9f
- http://blog.mgechev.com/2017/01/21/distributing-an-angular-library-aot-ngc-types
- https://hackernoon.com/how-to-create-library-in-angular-2-and-publish-to-npm-from-scratch-f2b1272d6266
- https://medium.com/@cyrilletuzi/how-to-build-and-publish-an-angular-module-7ad19c0b4464
- https://medium.com/@cyrilletuzi/how-to-build-and-publish-an-angular-module-7ad19c0b4464
- http://www.gistia.com/optimize-angular-2-applications
- https://medium.com/spektrakel-blog/angular-writing-aot-friendly-applications-7b64c8afbe3f
- http://dbarnes.me/writing-an-aot-compliant-angular-library
- https://www.netlify.com/blog/2020/02/24/update-on-scully-angulars-static-site-generator/

## ECOSYSTEM: LIB: LIST

- https://github.com/PatrickJS/awesome-angular
- https://github.com/brillout/awesome-angular-components
- https://github.com/anubhavsrivastava/awesome-ui-component-library#angular

## ECOSYSTEM: LIB: JAMSTACK

- https://github.com/scullyio/scully
- https://github.com/benwinding/ngext
- https://github.com/ng-web-apis/universal
- https://github.com/TrilonIO/ng-universal
- https://github.com/chrisguttandin/angular-prerender
- https://github.com/coryrylan/ngx-lite/tree/master/projects/ngx-json-ld

## ECOSYSTEM: LIB: SCULLY

- https://www.npmjs.com/search?q=scully
- https://github.com/fulls1z3/ngx-meta
- https://github.com/gammastream/scully-plugins
- https://github.com/samvloeberghs/kwerri-oss
- https://github.com/etavener/scully-tools
- https://github.com/flowaccount/nx-plugins
- https://github.com/Gorniv/ngx-universal
- https://github.com/notiz-dev/scully-plugins
- https://github.com/pjlamb12/scully-plugin-page-title
- https://github.com/pjlamb12/scully-plugin-canonical
- https://github.com/d-koppenhagen/scully-plugin-mermaid
- https://github.com/pjlamb12/scully-plugin-amp-css
- https://github.com/scullyio/scully/tree/main/libs/plugins
- https://github.com/scullyio/scully/tree/main/libs/plugins/extra
- https://github.com/scullyio/scully/tree/main/libs/plugins/from-data
- https://github.com/scullyio/scully/tree/main/libs/plugins/base-href-rewrite
- https://github.com/samvloeberghs/kwerri-oss/tree/master/projects/scully-plugin-disable-angular
- https://github.com/samvloeberghs/kwerri-oss/tree/master/projects/scully-plugin-minify-html
- https://github.com/scullyio/scully/blob/main/scully.sample-blog.config.ts
- https://github.com/samvloeberghs/ng-v9-localized-scullyio/blob/master/scully.ng-v9-localized-scullyio.config.js 

## ECOSYSTEM: LIB: SSR
- https://github.com/IKatsuba/ngx-ssr
- https://github.com/enten/udk
- https://github.com/angular/preboot
- https://github.com/salemdar/ngx-cookie
- https://github.com/ngx-utils/cookies
- https://github.com/aescarcha/cookies
- https://github.com/maciejtreder/ng-toolkit
- https://github.com/angular/in-memory-web-api
- https://github.com/ng-web-apis/universal
- https://github.com/trellisorg/platform
- https://github.com/nxpm/nxpm-universal
- https://github.com/avivharuzi/ngx-seo
- https://github.com/nimesko/ngx-seo-page
- https://npm.io/search/keyword:angular+universal

## ECOSYSTEM: LIB: IMMUTABLE

Learn the best way to make your objects immutable.

- https://dev.to/glebec/four-ways-to-immutability-in-javascript-3b3l
- https://www.imkrish.com/immutable-object-array-using-typescript/ \*
- https://mgv.io/deep-readonly-play
- https://twitter.com/mgechev/status/1240178886979223552
- https://houssein.me/angular2-with-immutablejs-and-redux \*
- https://github.com/immutable-js/immutable-js
- https://github.com/krzkaczor/ts-essentials
- https://github.com/millsp/ts-toolbelt
- https://github.com/rtfeldman/seamless-immutable
- https://github.com/immerjs/immer
- https://github.com/jonaskello/tslint-immutable
- https://github.com/jonaskello/eslint-plugin-functional
- https://github.com/microsoft/TypeScript/issues/13923
- https://github.com/microsoft/TypeScript/issues/29566
- https://medium.com/@bamieh/immutablejs-records-bd369137da06
- https://medium.com/@ezequiel/immutability-and-builders-with-typescript-b69a51c94e8c
- https://leocode.com/blog/you-may-not-need-immutable-js/
- https://juejin.im/post/5d7c9e54e51d4561cb5ddf46
- https://vsavkin.com/immutability-vs-encapsulation-90549ab74487
- https://blog.scottlogic.com/2016/01/05/angular2-with-immutablejs.html
- https://blog.mayflower.de/6630-typescript-redux-immutablejs.html
- https://angular-2-training-book.rangle.io/immutable/immutable-js/official_documentation


## ECOSYSTEM: LIB: LINT

- https://github.com/stylelint/stylelint
- https://github.com/htmlhint/HTMLHint
- https://github.com/palantir/tslint
- https://github.com/eslint/eslint
- https://github.com/mgechev/ngrev
- https://github.com/mgechev/ng2lint
- https://github.com/mgechev/codelyzer
- https://github.com/ReactiveX/rxjs-tslint
- https://github.com/mgechev/tslint-angular
- https://github.com/cartant/rxjs-tslint-rules
- https://github.com/NativeScript/eslint-plugin
- https://github.com/ranyitz/eslint-plugin-jest
- https://github.com/wesbos/eslint-config-wesbos
- https://github.com/angular-extensions/lint-rules
- https://github.com/angular-eslint/angular-eslint
- https://github.com/prettier/tslint-config-prettier
- https://github.com/SonarSource/eslint-plugin-sonarjs
- https://github.com/cartant/eslint-plugin-rxjs-angular
- https://github.com/sindresorhus/eslint-plugin-unicorn
- https://github.com/typescript-eslint/typescript-eslint
- https://github.com/trivago/prettier-plugin-sort-imports
- https://github.com/lydell/eslint-plugin-simple-import-sort
- https://github.com/MarkKragerup/weblint-eslint-security
- https://github.com/typescript-eslint/tslint-to-eslint-config
- https://github.com/cyrilletuzi/typescript-strictly-typed
- https://github.com/danielnixon/eslint-plugin-total-functions
- https://github.com/angular/angular-cli/issues/13732#issuecomment-617274183
- http://blog.mgechev.com/2016/02/29/static-code-analysis-angular-typescript
- https://timdeschryver.dev/blog/migrating-a-tslint-rule-to-eslint-with-typescript-eslint
- https://indepth.dev/setting-up-efficient-workflows-with-eslint-prettier-and-typescript/

## ECOSYSTEM: LIB: DEVTOOLS
- https://github.com/expertly-simple/angular-evergreen
- https://github.com/rangle/angular-devtools
- https://github.com/omniboard-dev/analyzer
- https://github.com/angular/dgeni-packages
- https://github.com/xlayers/version-stamp
- https://github.com/irustm/ng-app-counter
- https://github.com/compodoc/ts-stats
- https://github.com/compodoc/compodoc
- https://github.com/ngneat/inspector
- https://github.com/swimlane/DocSPA
- https://github.com/mgechev/ngrev
- https://github.com/compodoc/ngd
- https://github.com/ng-ast/ngast
- https://github.com/pahen/madge

## ECOSYSTEM: LIB: LAZY

- https://github.com/ded/script.js
- https://github.com/IndigoSoft/ngxd
- https://github.com/mgechev/ngx-quicklink
- https://github.com/mgechev/ngx-hover-preload
- https://github.com/angular-extensions/elements
- https://github.com/mohammedzamakhan/ngx-loadable
- https://stackoverflow.com/questions/34489916/how-to-load-external-scripts-dynamically-in-angular
- https://medium.com/better-programming/angular-load-external-javascript-file-dynamically-3d14dde815cb

## ECOSYSTEM: LIB: DOM

- https://github.com/ng-web-apis/resize-observer
- https://github.com/ng-web-apis/intersection-observer
- https://github.com/ng-web-apis/mutation-observer
- https://github.com/ChristianKohler/ng-resize-observer
- https://github.com/fidian/ngx-resize-observer
- https://github.com/fidian/ngx-mutation-observer
- https://github.com/fidian/ngx-visibility
- https://github.com/k3nsei/ng-in-viewport
- https://github.com/arkon/ng-click-outside
- https://github.com/TinkoffCreditSystems/ng-dompurify
- https://github.com/TinkoffCreditSystems/ng-event-plugins
- https://github.com/cloudnc/ngx-favicon
- https://github.com/dhilt/ngx-ui-scroll
- https://github.com/Nolanus/ngx-page-scroll
- https://github.com/nicky-lenaers/ngx-scroll-to
- https://github.com/meeroslav/ng-motion

## ECOSYSTEM: LIB: HTTP

- https://github.com/ngneat/cashew
- https://github.com/jscutlery/convoyr
- https://github.com/timdeschryver/rx-query
- https://github.com/ytilis/ngx-batch-requests
- https://github.com/angelnikolov/ngx-cacheable
- https://github.com/alexzuza/angular-refresh-token
- https://github.com/kamilkisiela/apollo-angular
- https://github.com/flowup/api-client-generator
- https://github.com/vugar005/ngx-awesome-uploader
- https://github.com/kukhariev/ngx-uploadx

## ECOSYSTEM: LIB: ROUTING

- https://github.com/angular-component/router
- https://github.com/Dankwansere/aop-routing
- https://github.com/retarsis/routerkit
- https://github.com/retarsis/routeshub
- https://github.com/benwinding/ngext
- https://github.com/ui-router/angular

## ECOSYSTEM: LIB: UTIL

- https://github.com/danrevah/ngx-pipes
- https://github.com/meeroslav/ng-helpers
- https://github.com/ng-web-apis/permissions
- https://github.com/willmendesneto/ngx-feature-toggle
- https://github.com/omridevk/ng-keyboard-shortcuts
- https://github.com/brtnshrdr/angular2-hotkeys
- https://github.com/ThomasBurleson/mindspace-utils
- https://github.com/typebytes/ngx-template-streams
- https://github.com/zhaosiyang/property-watch-decorator
- https://github.com/BioPhoton/angular-formatter-parser
- https://github.com/ndr/ngx-route-params-input
- https://github.com/stupidawesome/ng-effects
- https://github.com/ngrx-utils/ngrx-utils
- https://github.com/rx-angular/rx-angular
- https://github.com/rarmatei/ngx-reexportr
- https://github.com/wishtack/wishtack-steroids
- https://github.com/TinkoffCreditSystems/ng-polymorpheus
- https://github.com/ManuCutillas/ngx-responsive
- https://github.com/cristiammercado/ng-event-bus
- https://github.com/ng-web-apis/workers
- https://github.com/joanllenas/ngx-date-fns
- https://github.com/PatrickJS/angular-hmr
- https://github.com/cloudnc/observable-webworker
- https://github.com/ng-web-apis/speech
- https://github.com/arkon/ng-inline-svg
- https://github.com/angular/flex-layout
- https://github.com/angular/angularfire
- https://github.com/codethatstack/platform
- https://github.com/gund/ng-dynamic-component
- https://github.com/obenjiro/create-angular-components
- https://github.com/MTobisch/ngx-dynamic-hooks
- https://github.com/pjlamb12/runtime-config-loader
- https://github.com/KostyaTretyak/ng-stack
- https://github.com/KoderLabs/ngx-device-detector
- https://github.com/herodevs/herodevs-packages
- https://github.com/myndpm/open-source
- https://github.com/embarq/safe-pipe
- https://github.com/glebmachine/ngx-betalabs
- https://github.com/trellisorg/platform


## ECOSYSTEM: LIB: RXJS
- https://github.com/observable-playground/observable-playground
- https://github.com/NetanelBasal/ngx-auto-unsubscribe
- https://github.com/NetanelBasal/ngx-take-until-destroy
- https://github.com/cloudnc/ngx-observable-lifecycle
- https://github.com/w11k/ngx-componentdestroyed
- https://github.com/w11k/rx-ninja
- https://github.com/gcanti/fp-ts-rxjs
- https://github.com/wardbell/subsink
- https://github.com/cartant/rxjs-xyz
- https://github.com/cartant/rxjs-etc
- https://github.com/cartant/rxjs-spy
- https://github.com/cartant/rxjs-traits
- https://github.com/rxjs-debug/rxjs-debug
- https://github.com/cartant/rxjs-interop
- https://github.com/kwonoj/rx-sandbox
- https://github.com/kosich/rxjs-proxify
- https://github.com/kosich/rxjs-autorun
- https://github.com/hirezio/observer-spy
- https://github.com/loreanvictor/rxmetics
- https://github.com/benlesh/rxjs-for-await
- https://github.com/tanepiper/rxjs-primitives
- https://github.com/nilsmehlhorn/ngx-operators
- https://github.com/alex-okrushko/backoff-rxjs
- https://github.com/kievsash/rxjs-toolbox
- https://github.com/niklas-wortmann/rxjs-web
- https://github.com/nilsmehlhorn/ngx-observe
- https://github.com/timdeschryver/rxjs-operator-counter
- https://github.com/chrisguttandin/subscribable-things
- https://github.com/ftischler/ngx-rxjs-zone-scheduler

## ECOSYSTEM: LIB: GENERAL

- https://medium.com/flatlogic/top-angular-open-source-projects-6e9b91a455c0
- https://www.telerik.com/blogs/17-angular-libraries-you-should-know-about
- https://alligator.io/angular/stripe-elements
- https://swimlane.github.io/ng2d3/
- https://github.com/basvandenberg/angular2-select
- https://github.com/michaelbromley/ng2-pagination
- https://github.com/flauc/angular2-notifications
- https://github.com/tjoskar/ng2-lazyload-image
- https://github.com/ksachdeva/angular2-swiper
- https://github.com/easy-two/ngx-child-injector
- https://github.com/akserg/ng2-dnd

## ECOSYSTEM: LIB: ELEMENTS

- https://www.youtube.com/watch?v=t1ohOAyA_sI
- https://github.com/frintjs/frint
- https://github.com/ionic-team/stencil
- https://github.com/aelbore/ngx-elements
- https://github.com/brunob15/ngx-element
- https://github.com/ng-packagr/ng-packagr
- https://github.com/aelbore/ngx-elements-demo
- https://github.com/angular-extensions/elements
- https://github.com/BioPhoton/angular-element-variants
- https://github.com/MarsiBarsi/angular-library-to-web-components-demo
- https://angular-extensions.github.io/elements/#/examples/advanced

## ECOSYSTEM: LIB: E2E TESTS

- https://screenster.io/
- https://testrec.com/
- https://www.browserstack.com/
- https://angularplayground.it/
- https://testing-playground.com/
- https://github.com/mswjs/msw
- https://github.com/appium/appium
- https://github.com/rrweb-io/rrweb
- https://github.com/Netflix/pollyjs
- https://github.com/cypress-io/cypress
- https://github.com/agoldis/sorry-cypress
- https://github.com/jscutlery/test-utils
- https://github.com/NetanelBasal/cyrun
- https://github.com/DevExpress/testcafe
- https://github.com/nas5w/combinate
- https://github.com/ComponentDriven/csf
- https://github.com/cypress-io/cypress-xpath
- https://github.com/briebug/cypress-schematic
- https://github.com/microsoft/playwright-test
- https://github.com/deanius/storybook-animate
- https://github.com/NoriSte/cypress-wait-until
- https://github.com/smeijer/testing-playground
- https://github.com/socreate/angular-playground
- https://github.com/component-driven/cypress-axe
- https://github.com/ceceliacreates/ionic-cypress
- https://github.com/cypress-io/cypress-skip-test
- https://github.com/gkushang/cucumber-html-reporter
- https://github.com/ksocha/cypress-circleci-reporter
- https://github.com/cypress-io/cypress-realworld-app
- https://github.com/cypress-io/cypress-example-recipes
- https://github.com/maximilianschmitt/cypress-routines
- https://github.com/bahmutov/cypress-angular-unit-test
- https://github.com/gothinkster/angular-realworld-example-app
- https://github.com/TheBrainFamily/cypress-cucumber-preprocessor
- https://github.com/Flaxline/angular-nx-cypress-coverage-example
- https://github.com/CypressCecelia/cypress-testing-angular-workshop
- https://cypress.slides.com/amirrustam/patterns-practices
- https://cypress.slides.com/cecelia/testing-angular-applications-with-cypress#/1
- https://webdave.de/blog/cypress
- https://www.youtube.com/watch?v=V-o8WzlwKmM Cypress Patterns and Practices
- https://www.youtube.com/watch?v=UHgtUSAROtc Comparing Testing Tools
- https://www.youtube.com/watch?v=aH19jwv1l70 Cypress test in angular
- https://medium.com/@charith.rhettiarachchi/why-use-jest-over-karma-for-angular-testing-b56ffa82f8
- https://itnext.io/cypress-storybook-keeping-test-scenario-data-and-component-rendering-in-one-place-c57b23cc1640
- https://blog.checklyhq.com/easy-automated-e2e-testing-monitoring-for-your-frontend-with-vercel-and-checkly-3/
- https://christianlydemann.com/the-most-common-cypress-mistakes/
- https://www.checklyhq.com/docs/puppeteer-recorder/
- https://timdeschryver.dev/blog/using-msw-in-an-angular-project

## ECOSYSTEM: LIB: UNIT TESTS

- https://github.com/mswjs/msw
- https://github.com/ui-jar/ui-jar
- https://github.com/facebook/jest
- https://github.com/ike18t/ng-mocks
- https://github.com/ng-mocks/examples
- https://github.com/google/intermock
- https://github.com/ngneat/spectator
- https://github.com/wallabyjs/public
- https://github.com/nas5w/combinate
- https://github.com/kwonoj/rx-sandbox
- https://github.com/hirezio/auto-spies
- https://github.com/hirezio/observer-spy
- https://github.com/getsaf/shallow-render
- https://github.com/just-jeb/jest-marbles
- https://github.com/briebug/jest-schematic
- https://github.com/skovhus/jest-codemods
- https://github.com/storybookjs/storybook
- https://github.com/stryker-mutator/stryker
- https://github.com/amcdnl/angular-storybook
- https://github.com/Ninja-Squad/ngx-speculoos
- https://github.com/youdz/dry-angular-testing
- https://github.com/jest-community/jest-extended
- https://github.com/topnotch48/ng-bullet-workspace
- https://github.com/juristr/angular-testing-recipes
- https://github.com/duluca/angular-unit-test-helper
- https://github.com/Idered/typescript-expect-plugin
- https://github.com/angular-extensions/pretty-html-log
- https://github.com/DmitryEfimenko/jest-given-when-then
- https://github.com/gparlakov/scuri
- https://github.com/brandonroberts/angular-testing-library
- https://github.com/testing-library/angular-testing-library
- https://github.com/testing-library/jest-dom
- https://github.com/synapse-wireless-labs/jasmine-marbles
- https://github.com/cartant/rxjs-marbles
- https://github.com/hirezio/jasmine-auto-spies
- https://stackblitz.com/edit/angular-testing-v7
- https://github.com/blove/ngrx-testing
- https://github.com/ngworker/ngworker

## ECOSYSTEM: LIB: OPTIMIZATION

Analyze and optimize the performance of your app

- https://github.com/mgechev/ngrev
- https://github.com/Zizzamia/perfume.js
- https://github.com/puppeteer/puppeteer
- https://github.com/willmendesneto/perf-marks
- https://github.com/danvk/source-map-explorer
- https://github.com/ivanblazevic/ngx-unused-css
- https://github.com/addyosmani/puppeteer-webperf
- https://github.com/ngx-builders/source-map-analyzer
- https://github.com/webpack-contrib/webpack-bundle-analyzer
- https://github.com/stephencookdev/speed-measure-webpack-plugin

## ECOSYSTEM: LIB: COMPONENTS

- https://github.com/fetrarij/ngx-daterangepicker-material
- https://github.com/maxisam/ngx-progressive-image-loader
- https://github.com/drozhzhin-n-e/ng2-tooltip-directive
- https://github.com/DmitryEfimenko/ng-expandable-input
- https://github.com/andreasonny83/angular2-cookie-law
- https://github.com/milantenk/ngx-interactive-paycard
- https://github.com/AlexMiniApps/angular-code-input
- https://github.com/webcat12345/ngx-intl-tel-input
- https://github.com/ivylaboratory/angular-carousel
- https://github.com/ivylaboratory/angular-gallery
- https://github.com/adisreyaj/angular-star-rating
- https://github.com/ivylaboratory/angular-popover
- https://github.com/michaelbromley/ngx-pagination
- https://github.com/isaacplmann/ngx-contextmenu
- https://github.com/Marcelh1983/document-viewer
- https://github.com/XuPeiYao/ngx-document-view
- https://github.com/mikyaj/ngx-rough-notation
- https://github.com/ivylaboratory/ivypinch
- https://github.com/qgrid/ng2-expression-builder
- https://github.com/exportarts/ngx-cookie-banner
- https://github.com/dig-platform/ngx-stackblitz
- https://github.com/mgechev/ngx-circular-player
- https://github.com/KensingtonTech/ng2-panzoom
- https://github.com/madoar/angular-archwizard
- https://github.com/abdulkadirgenc/ng-wizard
- https://github.com/verizonconnect/ngx-panels
- https://github.com/vlio20/angular-datepicker
- https://github.com/pjlamb12/angular-loaders
- https://github.com/darkoandreev/d-ng-rating
- https://github.com/pjlamb12/ngx-plug-n-play
- https://github.com/MSakamaki/ngx-onesignal
- https://github.com/Greentube/ngx-typeahead
- https://github.com/wittlock/ngx-image-zoom
- https://github.com/exportarts/ngx-prismic
- https://github.com/maxisam/ngx-clipboard
- https://github.com/ng2-ui/auto-complete
- https://github.com/ngneat/edit-in-place
- https://github.com/cipchk/ngx-filesaver
- https://github.com/nolimits4web/swiper
- https://github.com/oferh/ng2-completer
- https://github.com/ng-select/ng-select
- https://github.com/dappsnation/ng-rive
- https://github.com/akserg/ng2-toasty
- https://github.com/JsDaddy/ngx-mask
- https://github.com/ngneat/hot-toast
- https://github.com/daybrush/moveable
- https://github.com/matheo/angular
- https://github.com/sitecore/jss
- https://github.com/chigix/rengular
- https://github.com/angular-material-extensions
- https://github.com/Gbuomprisco/ngx-chips
- https://github.com/sanjayV/ng-image-slider
- https://github.com/BioPhoton/angular-star-rating
- https://github.com/BioPhoton/angular-signature-pad
- https://github.com/Asymmetrik/ngx-leaflet
- https://github.com/francoisromain/leaflet-markers-canvas
- https://github.com/Wykks/ngx-mapbox-gl
- https://github.com/text-mask/text-mask
- https://github.com/KillerCodeMonkey/ngx-quill
- https://github.com/ayush013/ngx-quill-upload
- https://github.com/georgipeltekov/ngx-file-drop
- https://github.com/vadimdez/ng2-pdf-viewer/
- https://github.com/osahner/ngx-show-hide-password
- https://github.com/lon-yang/ngx-markdown-editor
- https://github.com/kekeh/angular-mydatepicker
- https://github.com/mattlewis92/angular-calendar
- https://github.com/stabzs/Angular2-Toaster
- https://github.com/JsDaddy/ngx-copypaste
- https://github.com/dominique-mueller/angular-notifier
- https://github.com/mattlewis92/angular-confirmation-popover
- https://github.com/mattlewis92/angular-draggable-droppable
- https://github.com/mattlewis92/angular-resizable-element
- https://github.com/kamiazya/ngx-speech-recognition
- https://github.com/angular-slider/ng5-slider
- https://github.com/reppners/ngx-drag-drop
- https://github.com/surveyjs/survey-library
- https://github.com/leifermendez/ngx-copilot
- https://github.com/ngneat/helipopper
- https://github.com/coryrylan/ngx-lite
- https://github.com/jdjuan/ng-notyf
- https://github.com/beeman/ngx-split
- https://github.com/exportarts/ngx-cookie-banner
- https://github.com/angular-split/angular-split
- https://github.com/ngfelixl/ng-write/
- https://github.com/ngfelixl/pro-widgets
- https://github.com/stevermeister/ngx-wig
- https://github.com/sibiraj-s/ngx-editor
- https://github.com/udayvunnam/xng-breadcrumb
- https://github.com/bootsoon/ng-circle-progress
- https://github.com/scttcper/ngx-emoji-mart
- https://github.com/DethAriel/ng-recaptcha
- https://github.com/scttcper/ngx-toastr
- https://github.com/tinesoft/ngx-cookieconsent
- https://github.com/aavanzyl/ngx-tiny
- https://github.com/ngx-lib/multiselect
- https://github.com/livechat/angular-livechat
- https://github.com/vitalii-andriiovskyi/ngx-owl-carousel-o
- https://github.com/bfwg/ngx-drag-scroll
- https://github.com/tinymce/tinymce-angular
- https://github.com/MurhafSousli/ngx-bar-rating
- https://github.com/MurhafSousli/ngx-sharebuttons
- https://github.com/MurhafSousli/ngx-scrollbar
- https://github.com/MurhafSousli/ngx-gallery
- https://github.com/ngx-lottie/ngx-lottie
- https://github.com/ngneat/dag

## ECOSYSTEM: LIB: MARKETING

- https://github.com/scttcper/ng2-adsense
- https://github.com/codediodeio/angular-gtag
- https://github.com/angulartics/angulartics2
- https://github.com/maxandriani/ngx-google-analytics
- https://github.com/dottedsquirrel/AngularGoogleAnalytics

## ECOSYSTEM: LIB: LAYOUT

- https://github.com/SheetJS/sheetjs
- https://github.com/ag-grid/ag-grid
- https://github.com/paulhodel/jexcel
- https://github.com/shlomiassaf/ngrid
- https://github.com/yohangz/ornamentum
- https://github.com/angular-ui/ui-grid
- https://github.com/sbstjn/timesheet.js
- https://github.com/kreuzerk/ng-sortgrid
- https://github.com/sinedied/ngx-foldable
- https://github.com/swimlane/ngx-datatable
- https://github.com/SortableJS/ngx-sortablejs
- https://github.com/swiety85/angular2gridster
- https://github.com/katoid/angular-grid-layout
- https://github.com/golden-layout/golden-layout
- https://github.com/ssuperczynski/ngx-easy-table
- https://github.com/exportarts/ngx-material-data-table
- https://github.com/marinantonio/angular-mat-table-crud
- https://github.com/nilsmehlhorn/ngx-pagination-data-source

## ECOSYSTEM: LIB: SCROLL

- https://github.com/MurhafSousli/ngx-scrollbar
- https://github.com/orizens/ngx-infinite-scroll

## ECOSYSTEM: LIB: SELECT

- https://github.com/HaidarZ/ng-mat-select-infinite-scroll
- https://github.com/bithost-gmbh/ngx-mat-select-search
- https://github.com/softsimon/angular-2-dropdown-multiselect
- https://github.com/NileshPatel17/ng-multiselect-dropdown
- https://github.com/mdlivingston/mat-select-filter
- https://github.com/ngx-lib/multiselect

## ECOSYSTEM: LIB: UPLOAD

- https://scotch.io/tutorials/file-uploads-in-angular-with-a-node-and-hapi-backend
- https://github.com/ribizli/ng2-imageupload
- https://github.com/jkuri/ng2-uploader

## ECOSYSTEM: LIB: DATA VIZ

- https://github.com/worktile/ngx-gantt
- https://github.com/swimlane/ngx-graph
- https://github.com/swimlane/ngx-charts
- https://github.com/apexcharts/ng-apexcharts
- https://github.com/valor-software/ng2-charts
- https://github.com/MurhafSousli/ngx-highlightjs
- https://github.com/highcharts/highcharts-angular
- https://medium.com/@lsharir/visualizing-data-with-angular-and-d3-209dde784aeb#.dp6gdnx1h

## ECOSYSTEM: LIB: DEBUG

- https://github.com/getsentry/sentry
- https://github.com/LogRocket/logrocket
- https://github.com/dbfannin/ngx-logger
- https://github.com/ngworker/lumberjack
- https://github.com/hyperjumptech/monika
- https://github.com/tgure/ngx-loggly-logger
- https://github.com/Angular-RU/angular-logger
- https://github.com/chigix/linked-data-graphic
- https://github.com/ngdevelop-tech/ngx-fancy-logger
- https://github.com/TinkoffCreditSystems/micro-sentry
- https://github.com/aackerman/circular-dependency-plugin


## ECOSYSTEM: LIB: MODAL

- https://github.com/ngneat/dialog
- https://github.com/Greentube/ngx-modal
- https://github.com/caroso1222/ng-popups
- https://github.com/shenweiliu/ngex-dialog
- https://github.com/biig-io/ngx-smart-modal
- https://github.com/shlomiassaf/ngx-modialog
- https://github.com/maximelafarie/ngx-smart-modal
- https://matthewross.me/blog/posts/minimal-angular-2-modal
- https://malcoded.com/posts/angular-dynamic-components/

## ECOSYSTEM: LIB: LOADER

Add a progressbar for displaying a loader during the different async task like http requests...

- https://github.com/ngneat/loadoff
- https://github.com/Zak-C/ngx-loading
- https://github.com/t-ho/ngx-ui-loader
- https://github.com/biig-io/ngx-smart-loader
- https://github.com/aitboudad/ngx-loading-bar
- https://github.com/akserg/ng2-slim-loading-bar
- https://github.com/JsDaddy/ngx-loader-indicator
- https://github.com/MurhafSousli/ngx-progressbar
- https://github.com/HackAfro/angular-epic-spinners
- https://github.com/Gbuomprisco/ngx-content-loading
- https://github.com/adisreyaj/angular-shimmer-effect
- https://github.com/willmendesneto/ngx-skeleton-loader

## ECOSYSTEM: LIB: FORM

- https://github.com/rxweb/rxweb
- https://github.com/ngx-meta/rules
- https://github.com/formql/formql
- https://github.com/ngspot/ngx-errors
- https://github.com/DmitryEfimenko/ngx-messages
- https://github.com/cloudnc/ngx-sub-form
- https://github.com/ngneat/reactive-forms
- https://github.com/ngx-formly/ngx-formly
- https://github.com/udos86/ng-dynamic-forms
- https://github.com/Ninja-Squad/ngx-valdemort
- https://github.com/jstoppa/dynamic-forms
- https://github.com/SanderElias/ngObservableForm
- https://github.com/maximelafarie/angular-dynamic-forms
- https://github.com/formql/formql
- https://github.com/formql/formql/tree/master/examples
- https://github.com/UltimateAngular/ngxerrors
- https://github.com/rsaenen/ngx-custom-validators
- https://github.com/verizonconnect/ngx-form-generator
- https://github.com/why520crazy/ngx-validator
- https://github.com/JsDaddy/ngx-mask
- https://github.com/ngx-formly/ngx-formly
- https://github.com/Ninja-Squad/ngx-valdemort
- https://github.com/ngneat/dirty-check-forms
- https://github.com/ngneat/forms-manager
- https://github.com/ngneat/error-tailor
- https://github.com/ngneat/bind-query-params
- https://github.com/xtreamsrl/ngx-validation-errors
- https://github.com/zebzhao/Angular-QueryBuilder
- https://github.com/JohannesHoppe/angular-date-value-accessor
- https://github.com/TinkoffCreditSystems/angular-contenteditable-accessor
- https://github.com/gparlakov/forms-typed
- https://github.com/gparlakov/forms-typed/blob/master/projects/forms/
- https://github.com/gparlakov/forms-typed/blob/master/projects/show-form-control/
- https://github.com/rxweb/rxweb/tree/master/client-side/angular/packages/reactive-form-validators
- https://bit.dev/kevinrodbe/utils/helpers/angular/~code#frm-validators.ts
- https://stackblitz.com/@formqlx

## ECOSYSTEM: LIB: CDK MATERIAL

- https://material.angular.io/cdk/a11y/overview
- https://alligator.io/angular/infinite-scroll
- https://alligator.io/angular/custom-svg-icons-angular-material

## ECOSYSTEM: LIB: INTERNATIONALIZATION

- https://angular.io/cli/xi18n
- https://github.com/loclapp/locl
- https://github.com/ngneat/transloco
- https://github.com/fkirc/attranslate
- https://github.com/ngx-translate/core
- https://github.com/robisim74/angular-l10n
- https://github.com/Greentube/localize-router
- https://github.com/martinroob/ngx-i18nsupport
- https://github.com/gilsdav/ngx-translate-router
- https://github.com/jgpacheco/ngx-translate-cache
- https://github.com/ngneat/transloco-keys-manager
- https://github.com/biesbjerg/ngx-translate-extract
- https://github.com/ngx-translate/i18n-polyfill
- https://github.com/Tuizi/i18n-split-example
- https://itnext.io/lazy-load-translation-files-in-angular-using-transloco-2d3afed116ce
- https://netbasal.com/introducing-transloco-angular-internationalization-done-right-54710337630c
- https://medium.com/better-programming/angular-ngx-translate-typings-816eb4b5d92
- https://medium.com/@TuiZ/how-to-split-your-i18n-file-per-lazy-loaded-module-with-ngx-translate-3caef57a738f

## ECOSYSTEM: LIB: MEDIA

- https://github.com/FortAwesome/angular-fontawesome
- https://github.com/chrisguttandin/angular-audio-context
- https://github.com/NorthwoodsSoftware/gojs-angular
- https://github.com/kevoj/angular-editor-fabric-js
- https://github.com/makimenko/angular-template-for-threejs
- https://github.com/jannicz/ng-svg-icon-sprite
- https://github.com/czeckd/angular2-svg-icon
- https://github.com/fengyuanchen/cropperjs
- https://github.com/videogular/ngx-videogular
- https://github.com/tjoskar/ng-lazyload-image
- https://github.com/greg-md/ng-lazy-load
- https://github.com/scaleflex/ng-cloudimage-responsive
- https://github.com/bennymeg/ngx-embedded-media
- https://github.com/ng-web-apis/canvas
- https://github.com/ng-web-apis/midi
- https://github.com/ng-web-apis/audio
- https://github.com/irustm/angular-canvas
- https://www.thepolyglotdeveloper.com/2019/06/image-cropping-zooming-scaling-angular-javascript/

## ECOSYSTEM: LIB: UI

- https://blog.thoughtram.io/angular/2017/05/23/custom-themes-with-angular-material.html
- https://medium.com/@amcdnl/theming-angular-with-css-variables-3c78a5b20b24
- https://medium.com/@beeman/tutorial-add-bootstrap-to-angular-cli-apps-b0a652f2eb2#.bwypv3is1
- https://scotch.io/tutorials/all-the-ways-to-add-css-to-angular-2-components
- https://github.com/valor-software/ngx-bootstrap
- https://github.com/ng-bootstrap/ng-bootstrap
- https://github.com/swimlane/ngx-ui
- https://github.com/akveo/nebular/
- https://github.com/vmware/clarity
- https://github.com/rdkmaster/jigsaw
- https://github.com/primefaces/primeng
- https://github.com/angular/components
- https://github.com/DevCloudFE/ng-devui
- https://github.com/NG-ZORRO/ng-zorro-antd
- https://github.com/NG-ZORRO/ng-zorro-antd-mobile
- https://github.com/TinkoffCreditSystems/taiga-ui
- https://github.com/alvarotrigo/angular-fullpage
- https://github.com/ng-lightning/ng-lightning
- https://github.com/vladotesanovic/ngSemantic
- https://github.com/kikstart-ui/kikstart-ui
- https://github.com/IgniteUI/igniteui-angular
- https://github.com/IgniteUI/igniteui-angular-wrappers
- https://github.com/ngx-builders/ngx-bulma
- https://github.com/morrisjdev/ng-metro4
- https://github.com/Teradata/covalent
- https://github.com/aposin/ng-aquila
- https://github.com/oblique-bit/oblique
- https://github.com/SAP/fundamental-ngx
- https://github.com/dxc-technology/halstack-angular
- https://github.com/DevExpress/devextreme-angular
- https://github.com/kirbydesign/designsystem
- https://github.com/positive-js/mosaic
- https://github.com/src-zone/material

## ECOSYSTEM: LIB: STORAGE
- https://github.com/ngneat/storage
- https://github.com/zoomsphere/ngx-store
- https://github.com/UlisesHllSk/ng-indexed-db
- https://github.com/PillowPillow/ng2-webstorage
- https://github.com/assuncaocharles/ngx-indexed-db
- https://github.com/cyrilletuzi/angular-async-local-storage

## ECOSYSTEM: LIB: AUTH

- https://github.com/manfredsteyer/angular-oauth2-oidc
- https://github.com/damienbod/angular-auth-oidc-client
- https://github.com/mauriciovigolo/keycloak-angular
- https://github.com/IdentityModel/oidc-client-js
- https://github.com/angular/angularfire
- https://github.com/auth0/angular2-jwt
- https://github.com/auth0/auth0-angular

## ECOSYSTEM: LIB: PAYMENT

- https://github.com/ng-web-apis/payment-request

## ECOSYSTEM: LIB: GEOLOCATION

- https://github.com/ng-web-apis/geolocation

## ECOSYSTEM: LIB: ACL

- https://github.com/stalniy/casl
- https://github.com/chihab/ngx-access
- https://github.com/AlexKhymenko/ngx-permissions


## ECOSYSTEM: LIB: PWA
- https://github.com/cyrilletuzi/ngx-pwa-offline
- https://ionicframework.com/docs/angular/pwa
- https://github.com/OnsenUI/OnsenUI

## ECOSYSTEM: CI/CD

Find here useful tips for managing your continious integration and delivery process.

- https://medium.com/@jamzi/continuous-everything-with-angular-travis-ci-firebase-and-greenkeeper-6656543bd826
- https://medium.com/dev-thought/introducing-nx-deployit-e5cfe89b810c
- https://gitlab.com/gitlab-org/gitlab-runner/issues/1797

## ECOSYSTEM: PLUG & PLAY:

- https://github.com/javascript-dragons/ionic-ecommerce
- https://github.com/NodeArt/angular-commerce
- https://github.com/raymond-frontend/eShop
- https://github.com/exportarts/ngx-prismic
- https://github.com/aviabird/angularspree
- https://github.com/ng-alain/ng-alain
- https://github.com/akveo/ngx-admin
- https://github.com/scullyio/scully
- https://github.com/wizdmio/wizdm
- https://github.com/SAP/spartacus
- https://github.com/snipcart
- https://angularexpo.com
- https://ng-alain.com
- https://abp.io/

## ECOSYSTEM: DEMO: SOURCES & EXAMPLES: FEAT
- https://github.com/yjaaidi/ng-experiments
- https://github.com/vthinkxie/ng-pull-refresh
- https://github.com/lacolaco/angular-testing-recipes
- https://github.com/pankajparkar/lazy-loading-recipes
- https://github.com/ultrasonicsoft/ng-application-builder

## ECOSYSTEM: DEMO: SOURCES & EXAMPLES: SSR

- https://github.com/nxpm/nxpm-universal
- https://github.com/enten/angular-universal
- https://github.com/TrilonIO/universal-nest
- https://github.com/servrox/nx-ng-nest-universal
- https://github.com/TrilonIO/angular-universal-v9
- https://github.com/mgechev/angular-hybrid-rendering
- https://github.com/angular-schule/demo-ssr-playground
- https://github.com/TrilonIO/angular-universal-tutorial
- https://github.com/mehrad-rafigh/nx-angular-universal

## ECOSYSTEM: DEMO: SOURCES & EXAMPLES: SCULLY

- https://github.com/brandonroberts/blog
- https://github.com/stewones/scully-demo
- https://github.com/Jefiozie/scully-notion
- https://github.com/yangjunhan/scully-example
- https://github.com/MSakamaki/scully-homepage
- https://github.com/samvloeberghs/scully-universal
- https://github.com/snipcart/scully-snipcart-store
- https://github.com/d-koppenhagen/d-koppenhagen.de
- https://github.com/samvloeberghs/ng-v9-localized-scullyio
- https://github.com/this-is-learning/this-is-learning-website

## ECOSYSTEM: DEMO: SOURCES & EXAMPLES: FULL

- https://github.com/neekware/fullerstack
- https://github.com/rfprod/nx-ng-starter
- https://github.com/xmlking/ngx-starter-kit
- https://github.com/brechtbilliet/winecellar
- https://github.com/r-park/todo-angular2-firebase

## ECOSYSTEM: DEMO: SOURCES & EXAMPLES: SPA

- https://github.com/mraible/ng-demo
- https://github.com/beeman/panng-stack
- https://github.com/ionic-team/ionifits
- https://github.com/ngStuttgart/homeboi
- https://github.com/SanderElias/Samples
- https://github.com/tieppt/angular-docker
- https://github.com/ganatan/angular11-app
- https://github.com/gothinkster/realworld
- https://github.com/orizens/echoes-player
- https://github.com/bbaia/gdgtoulouse-ngrx
- https://angular.io/guide/example-apps-list  
- https://github.com/intershop/intershop-pwa
- https://github.com/trungk18/angular-spotify
- https://github.com/waynegakuo/resumebuilder
- https://github.com/MSakamaki/multiple-stores
- https://github.com/alan-agius4/prune-css-poc
- https://github.com/herodevs/material-studies
- https://github.com/retarsis/angular-warehouse
- https://github.com/Peshou/dynamic-theming-demo
- https://github.com/ganatan/angular-example-seo
- https://github.com/maximegris/angular-electron
- https://github.com/trungk18/jira-clone-angular
- https://github.com/spierala/jira-clone-angular
- https://github.com/ganatan/angular-example-pwa
- https://github.com/Angular-RU/universal-starter
- https://github.com/waynegakuo/angular-dashboard
- https://github.com/LayZeeDK/ngx-stryker-robobar
- https://github.com/ikismail/Angular-ShoppingCart
- https://github.com/twerske/material-theme-builder
- https://github.com/thenaim/ionic-tk-social-network
- https://github.com/HybridShivam/pokedex-angular-app
- https://github.com/juanmesa2097/angular-boilerplate
- https://github.com/DenysVuika/medium-angular-docker
- https://github.com/alan-agius4/ng-mono-repo-starter
- https://github.com/StephenFluin/angular-update-guide
- https://github.com/DavideViolante/Angular-Full-Stack
- https://github.com/FabianGosebrink/auth0-angular-ngrx
- https://github.com/gbumanzordev/ng-docker-boilerplate
- https://github.com/santoshyadavdev/threejsAngularDemo
- https://github.com/DenysVuika/developing-with-angular
- https://github.com/brandonroberts/nx-ngrx-seinfeld-app
- https://github.com/start-angular/SB-Admin-BS4-Angular-8
- https://github.com/avatsaev/angular-contacts-app-example
- https://github.com/laarrrx/angular-bootstrap-boilerplate
- https://github.com/vagnersabadi/awesome-components-ionic
- https://github.com/ionicthemes/ionic5-starter-app-tutorial
- https://github.com/frederiksen/angular-electron-boilerplate
- https://github.com/nativescript-community/expo-nativescript
- https://github.com/stefanoslig/angular-ngrx-nx-realworld-example-app
- https://github.com/BioPhoton/Reactive-Architecture-and-UX-Patterns_Angular

## ECOSYSTEM: DEMO: LIVE

- https://netbasal.com/build-an-infinite-scroll-component-in-angular-a9c16907a94d
- https://matthewross.me/blog/posts/angular-2-recipes-app-the-api (with SlimPHP)
- https://github.com/avatsaev/angular-contacts-app-example
- https://medium.com/the-guild/fully-functional-whatsapp-clone-using-angular-graphql-apollo-typescript-and-postgresql-5479d83baaa4
- http://winecellar.surge.sh/
- http://rawgit.com/start-angular/ani-angular-2/master/dist/prod/index.html
- http://builtwithangular2.com/
- http://amcdnl.github.io/angular2-demo/ (parallax)
- http://bennadel.github.io/JavaScript-Demos/demos/html-dropdown-menu-angular2/
- https://ng2do-mean-app.herokuapp.com/ WITH BACKEND node server.js
- http://www.syntaxsuccess.com/angular-2-samples/ ****\*\*\*****
- http://source.lishman.com/tutorial/marklishman/angular-2-configuration-tour
- http://rawgit.com/SekibOmazic/angular2-playground/master/dist/index.html
- http://embed.plnkr.co/rGwbKmwAA5eWjkzJyc6V/preview
- http://www.htmlxprs.com/post/54/creating-a-super-simple-todo-app-using-angular-2-tutorial
- http://rawgit.com/SekibOmazic/angular2-playground/master/dist/index.html#
- http://www.syntaxsuccess.com/viewarticle/angular-2.0-examples
- http://www.tattoocoder.com/legion-of-heroes-haproxy-nginx-angular2-aspnetcore-redis-docker/
- https://angular2-es6-starter.herokuapp.com/
- https://dot-md.herokuapp.com/
- https://scotch.io/tutorials/mvc-in-an-angular-world
- https://www.codeproject.com/Articles/1139558/Single-Page-Application-SPA-for-Enterprise-App-Ang roles
- https://hackernoon.com/chatbot-with-angular-5-dialogflow-fdac97fef681

## ECOSYSTEM: GAMES

- https://jamigo.app/
- https://js-rocks.web.app/
- https://tetris.trungk18.com/
- https://github.com/mgechev/ngworld
- https://github.com/melcor76/ng-tetris
- https://github.com/trungk18/angular-tetris
- https://focused-mestorf-930f82.netlify.app/
- https://blog.angularindepth.com/how-to-get-started-with-canvas-animations-in-angular-2f797257e5b4
- https://blog.angularindepth.com/game-development-tetris-in-angular-64ef96ce56f7

## ECOSYSTEM: MOBILE

Learn how to build mobile applications using angular. You will find many cross platform framework for building native or hybrid mobile app.

- https://nrwl.io/nx
- https://nstudio.io/xplat
- https://github.com/nstudio/xplat
- http://www.hybridtonative.com/
- http://gonehybrid.com/build-your-first-mobile-app-with-ionic-2-angular-2/
- http://angularjs.blogspot.fr/2016/03/code-reuse-in-angular-2-native-mobile.html
- https://tjvantoll.github.io/nativescript-angular-guide/
- https://github.com/NativeScript/template-hello-world-ng
- https://github.com/NativeScript/sample-ng-todomvc
- https://www.nativescript.org
- https://nativescript.org/ionic/
- https://www.nativescript.org/nativescript-is-how-you-build-native-mobile-apps-with-angular
- http://www.telerik.com/nativescript-ui
- https://github.com/telerik/nativescript-ui-samples
- http://blog.backand.com/angular-2-nativescript-vs-react-native/
- https://www.quora.com/What-are-the-key-difference-between-ReactNative-and-NativeScript
- http://www.syntaxsuccess.com/viewarticle/using-nativescript-with-angular-2.0
- https://dev.to/devinshoemaker/build-cross-platform-applications-in-a-monorepo-with-nx-ionic-and-capacitor-6f8

## ECOSYSTEM: COMPARAISON

ANGULAR / REACT / VUE...

- https://framework.watch/
- https://dev.to/cloudx/react-thoughts-from-an-angular-developer-hbb
- https://www.toptal.com/front-end/angular-vs-react-for-web-development
- http://blog.krawaller.se/posts/angular2-versus-react-comparing-components/
- http://tutorials.pluralsight.com/front-end-javascript/react-vs-angular-2
- https://daveceddia.com/to-react-from-angular
- http://www.ociweb.com/resources/publications/sett/comparison-of-angular-2-and-react/
- http://www.clock.co.uk/blog/javascript-frameworks-in-2016
- https://medium.freecodecamp.com/angular-2-versus-react-there-will-be-blood-66595faafd51#.85eviijcq
- http://www.stridenyc.com/blog/coming-to-react-from-angular/
- http://blog.scalac.io/2016/02/16/react-vs-angular-2.html
- https://tech.evojam.com/2016/03/31/react-vs-angular2-the-fight-rages-on/
- https://hackernoon.com/javascript-framework-comparison-with-examples-react-vue-hyperapp-97f064fb468d
- https://indepth.dev/what-every-front-end-developer-should-know-about-change-detection-in-angular-and-react/

## ECOSYSTEM: PLUGINS

Find here plugins for different browser.

- https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
- https://chrome.google.com/webstore/detail/angular-profiler-devtools/eiicmpipobbbfnmmbggcjnnfaionccbp
- https://chrome.google.com/webstore/detail/angular-component-overvie/ffaclkhkellkeknodafdgeaapdniahhh
- https://blog.angularindepth.com/chrome-extension-with-angular-why-and-how-778200b87575
- https://hackernoon.com/twelve-fancy-chrome-devtools-tips-dc1e39d10d9d#.imf6priwg

## ECOSYSTEM: TOOLS

Find here tools, snippets, extensions, plugins for different IDE.

- http://codelyzer.com/
- https://augury.angular.io/
- https://xlayers.app/#/home
- https://github.com/pregular
- https://github.com/Dynatrace/sketchmine
- https://github.com/irustm/figma-to-angular
- https://blog.angularindepth.com/angular-tools-you-should-be-aware-of-a6d37ad39f4e
- https://github.com/d-koppenhagen/ngx-semantic-version
- https://github.com/mgechev/ngrev
- https://github.com/rangle/batarangle/
- https://github.com/manekinekko/angular2-dependencies-graph
- https://dev.to/zaklaughton/every-vs-code-extension-a-javascript-web-developer-should-have-in-2020-with-gifs-2b6n
- https://medium.com/angulardoc/introducing-copilot-for-vs-code-c1b1a16bdd21
- https://www.genuitec.com/products/angular-ide/
- https://scotch.io/bar-talk/best-vs-code-extensions-for-angular-v2-development
- https://johnpapa.net/essential-angular-vs-code-extensions/
- https://medium.com/@tomsu/7-must-have-visual-studio-code-extensions-for-angular-af9c476147fd#.lo1w8ym8k
- http://blog.ionic.io/cordova-extension-for-vscode/
- http://blog.jetbrains.com/webstorm/2016/04/angular-2-workflow-in-webstorm/
- https://blog.nrwl.io/using-webstorm-for-building-angular-apps-fe8b3ab92565#.xwiyt3668
- https://jaxenter.com/angular-2-intellij-netbeans-eclipse-128461.html

## ECOSYSTEM: VSCODE BEST

- https://marketplace.visualstudio.com/items?itemName=obenjiro.arrr
- https://marketplace.visualstudio.com/items?itemName=antfu.i18n-ally
- https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2
- https://marketplace.visualstudio.com/items?itemName=Angular.ng-template
- https://marketplace.visualstudio.com/items?itemName=bilelmsekni.componizer
- https://marketplace.visualstudio.com/items?itemName=Metatype.copilot-vscode
- https://marketplace.visualstudio.com/items?itemName=Mikael.Angular-BeastCode
- https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials
- https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner
- https://marketplace.visualstudio.com/items?itemName=cyrilletuzi.angular-schematics
- https://marketplace.visualstudio.com/items?itemName=devboosts.angular-productivity-pack
- https://marketplace.visualstudio.com/items?itemName=sanderledegen.angular-follow-selector
- https://marketplace.visualstudio.com/items?itemName=ThorstenRintelen.angular-spec-generator

## ECOSYSTEM: VSCODE PERSO

- https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2
- https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens
- https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost
- https://marketplace.visualstudio.com/items?itemName=usernamehw.snippets-view
- https://marketplace.visualstudio.com/items?itemName=erhise.vs-ng-quick-switch
- https://marketplace.visualstudio.com/items?itemName=usernamehw.run-commands-view
- https://marketplace.visualstudio.com/items?itemName=ChakrounAnas.turbo-console-log
- https://marketplace.visualstudio.com/items?itemName=dzhavat.css-flexbox-cheatsheet
- https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag
- https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer
- https://marketplace.visualstudio.com/items?itemName=RandomFractalsInc.snippets-viewer

## ECOSYSTEM: VSCODE OTHERS

- https://marketplace.visualstudio.com/items?itemName=cipchk.ng-zorro-vscode
- https://marketplace.visualstudio.com/items?itemName=DSKWRK.vscode-generate-getter-setter
- https://marketplace.visualstudio.com/items?itemName=juanallo.vscode-dependency-cruiser
- https://marketplace.visualstudio.com/items?itemName=jasonnutter.search-node-modules
- https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client
- https://marketplace.visualstudio.com/items?itemName=steoates.autoimport
- https://marketplace.visualstudio.com/items?itemName=nicoespeon.abracadabra
- https://marketplace.visualstudio.com/items?itemName=infinity1207.angular2-switcher
- https://marketplace.visualstudio.com/items?itemName=AngularDoc.angulardoc-vscode
- https://marketplace.visualstudio.com/items?itemName=abusaidm.html-snippets
- https://marketplace.visualstudio.com/items?itemName=Thavarajan.ionic2
- https://marketplace.visualstudio.com/items?itemName=vsmobile.cordova-tools
- https://marketplace.visualstudio.com/items?itemName=aeschli.vscode-css-formatter
- https://marketplace.visualstudio.com/items?itemName=justjavac.teletype
- https://marketplace.visualstudio.com/items?itemName=hediet.debug-visualizer
- https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager
- https://marketplace.visualstudio.com/items?itemName=folke.vscode-monorepo-workspace
- http://brianflove.com/2017/04/11/angular-language-service/
- https://github.com/angular/vscode-ng-language-service
- https://github.com/Microsoft/TypeScript-Sublime-Plugin Sublimetext
- https://github.com/nwinkler/atom-keyboard-shortcuts ATOM shortcut
- https://github.com/johnpapa/vscode-angular2-snippets
- https://github.com/evanplaice/angular2-snippets

## ECOSYSTEM: AWESOME

- https://github.com/brillout/awesome-angular-components
- https://github.com/swirlycheetah/awesome-angular2
- https://github.com/timjacobi/angular2-education
- https://github.com/jonrimmer/angular-2-examples
- https://github.com/PatrickJS/awesome-angular
- https://github.com/jmcunningham/AngularJS2-Learning
- https://github.com/timjacobi/angular2-education
- http://whatpixel.com/learn-angular2-from-scratch/


## ECOSYSTEM: COMMUNITY

- https://indepth.dev/
- https://web.dev/angular
- https://www.angularnation.net/
- https://www.reddit.com/r/Angular2/
- https://dev.to/angular
- http://blog.mgechev.com/
- https://jameshenry.blog/
- https://blog.thoughtram.io/
- https://angularconferences.com/
- http://brianflove.com/
- https://julienrenaux.fr/
- https://blog.ninja-squad.com/
- https://christianlydemann.com/
- https://timdeschryver.dev/blog
- https://toddmotto.com/
- https://nxplaybook.com/
- https://nrwlcommunity.slack.com/
- https://github.com/maartentibau/angular-logos
- https://github.com/AngularCommunity/angular-missions
- https://voidcosmos.github.io/angular-communities/

## ECOSYSTEM: BOOK

- https://ng-book.com/2
- https://angular.institute
- http://AngularAdvocate.com
- https://angulararchitecture.com
- https://leanpub.com/angular2-book
- https://books.ninja-squad.com/angular2
- https://gumroad.com/l/angular-universal
- https://github.com/codecraft-tv/angular-course
- https://github.com/PacktPublishing/Angular-Projects
- https://www.packtpub.com/web-development/switching-angular-2/
- https://manning.com/books/angular-2-development-with-typescript
- http://www.hirez.io/c/angular-2-preparation/e/episode-1-code-structure-comparison
- https://egghead.io/series/angular-2-fundamentals
- https://leanpub.com/developing-with-angular


## ECOSYSTEM: MEDIAS

- https://angularair.com/
- https://happy-angular.de/
- https://devchat.tv/adv-in-angular/
- https://github.com/ngRuAir/ngruair
- https://www.twitch.tv/brandontroberts
- https://soundcloud.com/angularlicious/angular-architecture-part-2-with-lars-still-getting-rid-of-modules

## ECOSYSTEM: ARTICLES

- https://medium.com/dailyjs/real-time-apps-with-typescript-integrating-web-sockets-node-angular-e2b57cbd1ec1
- https://medium.com/ampgular-bringing-angular-app-t-to-amp-world-and/https-medium-com-ampgular-angular-to-amp-madrid-day-spa-com-use-case-56d6809604fd
- https://devchat.tv/adventures-in-angular
- https://www.voxxed.com/blog/2016/02/why-java-developers-will-embrace-angular-2-and-typescript/
- http://blog.42la.bs/building-simple-reddit-client-with-angular2-and-rxjs-part-1/
- http://www.synbioz.com/blog/angularjs_2_0_changements_notables
- https://auth0.com/blog/2015/05/14/creating-your-first-real-world-angular-2-app-from-authentication-to-calling-an-api-and-everything-in-between/
- http://swirlycheetah.com/try-angular2-today/
- http://www.sitepoint.com/getting-started-with-angular-2-using-typescript/
- http://victorsavkin.com/post/123555572351/writing-angular-2-in-typescript
- http://info.meteor.com/blog/comparing-performance-of-blaze-react-angular-meteor-and-angular-2-with-meteor
- http://www.developpez.com/actu/93927/Angular-2-0-est-disponible-en-version-beta-le-framework-JavaScript-annonce-un-gain-de-vitesse-impressionnant/
- https://egghead.io/series/angular-2-fundamentals
- https://angular.io/docs/ts/latest/guide/architecture.html
- http://thejackalofjavascript.com/getting-started-with-angular-2-0/
- https://egghead.io/technologies/angular2
- http://angular-tips.com/blog/2015/05/an-introduction-to-angular-2/
- http://blog.thoughtram.io/angular/2015/04/09/developing-a-tabs-component-in-angular-2.html
- http://www.bennadel.com/blog/3044-creating-a-run-block-in-angularjs-2-beta-8.htm
- https://www.ag-grid.com/understanding-packaging-for-javascript-typescript-commonjs-and-everything-else/
- http://juristr.com/blog/

## ECOSYSTEM: TRAINING

- https://oasisdigital.com/class/angular-for-architects
- https://thoughtram.io/angular-master-class.html
- https://tomastrajan.com/workshops/angular-mastery
- https://ultimatecourses.com/courses/angular

## EVOLUTION

- http://g.co/ng/weekly-notes
- https://github.com/literalpie/Annotated-Angular-Roadmap
- https://gist.github.com/LayZeeDK/c822cc812f75bb07b7c55d07ba2719b3
- https://swatijaiwal03.medium.com/angular-cheat-sheet-8e81c17010cf

### ANGULAR12

- https://javascript.plainenglish.io/whats-new-for-the-angular-ecosystem-ng-conf-21-update-56f365cc12bc

### ANGULAR11

- https://indepth.dev/angular-11-towards-type-safety

### ANGULAR10

- https://blog.angular.io/version-10-of-angular-now-available-78960babd41
- https://volosoft.com/blog/what-is-new-in-angular-10

### ANGULAR9

- https://trilon.io/blog/angular-universal-v9-whats-new
- https://dev.to/angular/angular-9-lazy-loading-components-o04
- https://alexzuza.github.io/angular-9-ivy-change-detection-preview/
- https://www.softwarearchitekt.at/aktuelles/architecture-with-ivy-a-possible-future-without-angular-modules/
- https://blog.angular.io/version-9-of-angular-now-available-project-ivy-has-arrived-23c97b63cfa3
- https://www.telerik.com/blogs/top-new-features-of-angular-9
- https://indepth.dev/component-features-with-angular-ivy
- https://blog.angulartraining.com/dependency-injection-with-angular-9-63ce524496d9
- https://christiankohler.net/improved-dependency-injection-with-the-new-providedin-scopes-any-and-platform
- https://docs.google.com/presentation/d/1LzoJbhiXzKQawoeO1RljAgRD4Lr5kUrY86h_kt55n9U/present?slide=id.p
- https://blog.angularindepth.com/exciting-time-ahead-be-ready-for-angular-9-b3dbb4078c47
- https://speakerdeck.com/eliraneliassy/everything-you-need-to-know-about-angular-ivy
- https://github.com/MikeRyanDev/rethinking-reactivity-angularconnect2019
- https://github.com/eliraneliassy/bye-bye-ngmodules
- https://indepth.dev/next-level-testing-in-angular-ivy-version-9/

### ANGULAR8

- https://juristr.com/blog/2019/05/Angular-8-and-the-Future-NGConf-2019-Roundup/
- https://docs.google.com/presentation/d/1HV7BcYBx8KIN0uUd2Aq7hAI8VG1Fj7h7bT1HCeDqVHg/edit

### ANGULAR7

- https://blog.angularindepth.com/new-in-angular-v7-1-updates-to-the-router-fd67d526ad05
- https://blog.angularindepth.com/inside-ivy-exploring-the-new-angular-compiler-ebf85141cee1
- https://blog.angular.io/version-7-of-angular-cli-prompts-virtual-scroll-drag-and-drop-and-more-c594e22e7b8c

### ANGULAR6

- https://loiane.com/2018/05/upgrading-to-angular-v6/
- https://formationjavascript.com/mettre-a-jour-vers-angular-6/
- https://blog.ninja-squad.com/2018/05/04/what-is-new-angular-6/
- https://dzone.com/articles/whats-new-in-angular-6
- https://www.telerik.com/blogs/whats-new-in-angular-6
- https://blog.angular.io/version-6-of-angular-now-available-cc56b0efa7a4
- https://blog.angular.io/run-angular-cli-repos-directly-in-your-browser-41332fd80901

### ANGULAR5

- https://medium.com/@nsmirnova/creating-pwa-with-angular-5-e36ea2378b5d
- https://medium.com/@nsmirnova/creating-pwa-with-angular-5-part-2-progressifying-the-application-449e3a706129
- https://malcoded.com/posts/angular-top-2017
- https://blog.angular.io/angular-5-1-more-now-available-27d372f5eb4e
- https://angular-update-guide.firebaseapp.com/
- https://auth0.com/blog/whats-new-in-angular5
- https://alligator.io/angular/angular-5/
- https://blog.angular.io/version-5-0-0-of-angular-now-available-37e414935ced
- https://blog.angular.io/the-past-present-and-future-of-the-angular-cli-13cf55e455f8
- https://netbasal.com/boosting-performance-with-the-new-updateon-option-in-angular-v5-18857279ace2
- https://hackernoon.com/what-to-expect-for-in-angular-v5-6e0fc9c4b13e
- https://www.onlineinterviewquestions.com/installing-configuring-angular-5-project/
- https://jaxenter.com/road-to-angular-5-133253.html

### ANGULAR4

- https://blog.thoughtram.io/angular/2016/05/23/opaque-tokens-in-angular-2.html#injectiontoken-since-angular-4x
- http://seowebsitedesigning.com/angular-js-4-features-depreciations-and-new-changes/
- https://scotch.io/tutorials/5-features-to-watch-out-for-in-angular-4

## TOSYNC
- https://github.com/myndpm/open-source
- https://github.com/DevExpress/devextreme-angular