<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [ANGULAR](#angular)
  - [TEMPLATES](#templates)
  - [CSS](#css)
  - [CLI](#cli)
    - [AUTO UPDATE](#auto-update)
    - [BUILD PROD](#build-prod)
    - [EXTENDS](#extends)
  - [UPGRADE](#upgrade)
    - [CLEAN NODE_MODULES](#clean-node_modules)
    - [UPGRADE CLI VERSION](#upgrade-cli-version)
    - [UPGRADE NG VERSION](#upgrade-ng-version)
  - [MONOREPO](#monorepo)
    - [INSTALL](#install)
    - [ADD ANGULAR](#add-angular)
    - [ADD SCULLY](#add-scully)
    - [START](#start)
    - [BUILD&SERVE](#buildserve)
    - [BUILD&SERVE (+WATCH)](#buildserve-watch)
    - [RESOURCES](#resources)
    - [STRUCTURE](#structure)
    - [REUSABLE LIB](#reusable-lib)
  - [HTTP POST PARAMS](#http-post-params)
  - [REDUX / NGRX](#redux--ngrx)
    - [Summary](#summary)
    - [New projects](#new-projects)
    - [Cycle](#cycle)
    - [Issues](#issues)
    - [Pitfalls](#pitfalls)
    - [Tips](#tips)
    - [Components](#components)
  - [PIPES](#pipes)
  - [DIRECTIVES](#directives)
    - [ANGULAR DIRECTIVES](#angular-directives)
  - [DECORATORS](#decorators)
  - [LIFECYCLE](#lifecycle)
  - [API](#api)
  - [ANGULAR DOM](#angular-dom)
  - [FORM](#form)
  - [ANGULAR TESTING](#angular-testing)
    - [E2E TESTS](#e2e-tests)
    - [UNIT TESTS](#unit-tests)
    - [STRATEGY](#strategy)
    - [EXAMPLE TYPE OF TESTS](#example-type-of-tests)
    - [MOCKING](#mocking)
    - [TESTING FACTORIZE/IMPORTS](#testing-factorizeimports)
    - [TESTING TRANSLATE](#testing-translate)
  - [MODULES](#modules)
    - [Benefits of lazy modules](#benefits-of-lazy-modules)
    - [One shared module](#one-shared-module)
    - [Multiple shared modules](#multiple-shared-modules)
    - [Shared modules part](#shared-modules-part)
    - [Dependency injection (DI)](#dependency-injection-di)
    - [Types](#types)
    - [Providing](#providing)
    - [Decorators](#decorators)
  - [CHANGE DETECTION](#change-detection)
    - [Optimization](#optimization)
    - [OnPush and immutability](#onpush-and-immutability)
    - [Pipes instead of methods in template](#pipes-instead-of-methods-in-template)
    - [Cahing](#cahing)
    - [TrackBy in ngFor](#trackby-in-ngfor)
    - [Detach change detection](#detach-change-detection)
    - [Others optimization](#others-optimization)
  - [CODING RULES](#coding-rules)
    - [Reactive programming](#reactive-programming)
  - [DEBUG](#debug)
    - [DEVTOOLS](#devtools)
    - [PERFORMANCE](#performance)
    - [MEASURE](#measure)
    - [CIRCULAR DEPENDENCIES](#circular-dependencies)
  - [BAD PRACTICES](#bad-practices)
  - [BEST PRACTICES](#best-practices)
  - [JOIN AN EXISTING PROJECTS](#join-an-existing-projects)
  - [MICROFRONTEND](#microfrontend)
  - [JAMSTACK](#jamstack)
    - [SCULLY](#scully)
  - [TIPS](#tips)
  - [INTERVIEW](#interview)
    - [BREAKING ICE QUESTIONS:](#breaking-ice-questions)
    - [OPEN QUESTIONS:](#open-questions)
    - [TECHNICAL QUESTIONS:](#technical-questions)
    - [CLOSED QUESTIONS:](#closed-questions)
    - [TEST](#test)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# ANGULAR

## TEMPLATES

- {{}} pour l’interpolation,
- [] pour le binding de propriété (entrée)
- () pour le binding d’événement (sortie)
- '#' pour la déclaration de variable
- '\*' pour les directives structurelles (for/if...)

Template binding works with properties and events of DOM elements, components, and directives, not HTML, not attributes. When you write a data-binding, you're dealing exclusively with the DOM properties and events of the target object.

- Attributes (are defined by HTML) initialize DOM properties and directive state and then they are done. 
- Property (are accessed from DOM nodes) values can change; attribute values can't.
- A few HTML attributes have 1:1 mapping to properties; for example, id. Some HTML attributes don't have corresponding properties; for example, aria-*. 

There is one exception to this rule. Attributes can be changed by setAttribute(), which re-initializes corresponding DOM properties.

- https://angular.io/guide/binding-syntax
- https://blog.angularindepth.com/angular-mastery-template-syntax-194bffe2ad6f


## CSS

::ng-deep .mat-option  { ... } without :host then it's not isolated and it apply to all mat-option in the app...


## CLI

```
ng g component pony test-list
ng g class article
ng g service article
ng g pipe my-new-pipe
ng g directive my-directive
ng g guard logged-in

ng g module lazy
ng g component lazy/lazypage

ng serve

ng github-pages:deploy
git subtree push --prefix dist/ origin gh-pages
```

- https://angularconsole.com/
- https://www.amadousall.com/my-favourite-angular-cli-commands-and-options/
- https://github.com/angular/angular-cli#proxy-to-backend

### AUTO UPDATE

```
sudo npm install -g npm-check-updates
rmdir /s/q node_modules
ncu for display
ncu -u for re-writing your package.json
ncu -a for upgrade all
```

### BUILD PROD

```
ng build --prod
ng build --prod --aot
ng build --prod --aot --bh /enterprise/webapp/ --build-optimizer		OK
ng build --prod --aot --base-href '/enterprise/'
ng build --target=production --base-href '/enterprise/'
```

- http://stackoverflow.com/questions/37631098/how-to-bundle-and-angular-2-app-for-production

### EXTENDS

- Add lib:
- ajouter un fichier css ou lib js :
- installer via npm --save
- ajouter dans angular-cli.json > balises styles + scripts


## UPGRADE

### CLEAN CACHE

```
npm run clean
rm -rf node_modules/.cache
rm -rf .angular
nx reset
```

### CLEAN NODE_MODULES

```
rmdir /s /q node_modules (windows)
rm -r -f node_modules (linux)
```

### UPGRADE CLI VERSION

- https://yakovfain.com/2017/02/05/upgrading-to-the-latest-angular-cli
- https://github.com/angular/angular-cli/wiki/Upgrading-from-Beta.10-to-Beta.14

```
npm uninstall -g angular-cli
npm cache clean
npm install -g @angular/cli
```

### UPGRADE CLASSIC APP 

```
npm outdated # Check for out of date modules
ng update @angular/core @angular/cli # Update Angular
ng update --all --force # Update all Angular and force
npm update # Update non-Angular dependencies
```

### UPGRADE NX/XPLAT

```
nx migrate @nrwl/workspace@x.x.x # Update with NX Workspace (sol:1)
nx migrate latest # Update with latest NX (sol:2)
npm install
nx migrate --run-migrations=migrations.json
```

NOTE: The packages you update may differ depending on your xplat workspace but this shows an example of a workspace that had web and nativescript platforms configured. It will usually be all the @nstudio packages in devDependencies.

```
nx migrate @nstudio/angular@11.0.3-rc.3
nx migrate @nstudio/nativescript-angular@11.0.3-rc.3
nx migrate @nstudio/nativescript@11.0.3-rc.3
nx migrate @nstudio/web-angular@11.0.3-rc.3 
nx migrate @nstudio/web@11.0.3-rc.3
nx migrate @nstudio/xplat@11.0.3-rc.3
npm install
```

Now that the latest versions installed, kick off the xplat architecture init to add the new xplat lib separations.

You will want to pass just the platforms which you currently use in your workspace.
The prefix you use can be the same your workspace is currently configured to use. This can be found in package.json under the xplat key.

```
nx g @nstudio/xplat:init --prefix=abc --platforms=web,nativescript --framework=angular
```

With the new architecture in place and the latest all installed, you can now kick off the workspace migration:
```
nx migrate --run-migrations=migrations.json
```

This will handle a lot of laborious manual update tasks like:

Updating your tsconfig path mappings
Updating imports throughout all shared and app code to match the new xplat lib barrels
Update app configurations to use the latest Nx 11 has to offer
Update nx.json and workspace to clean out old retired references and update to new ones
Lastly move all your shared code into the new structure
Lastly do a full clean of your workspace to ensure you're in good updated shape now:

### UPGRADE LINKS
- https://update.angular.io
- https://github.com/angular/angular-cli#updating-angular-cli
- https://blog.angular.io/version-6-of-angular-now-available-cc56b0efa7a4
- https://www.techiediaries.com/updating-angular-cli-projects/
- https://appdividend.com/2018/10/20/how-to-update-angular-cli-to-version-7/
- https://blog.angularindepth.com/angular-5-or-angular-6-yes-please-d71b08b5e59b
- https://stackoverflow.com/questions/43931986/how-to-upgrade-angular-cli-to-the-latest-version
- https://medium.com/@timdeschryver/ng-update-the-setup-2d2c54d05a0e (update libs)
- http://angularjs.blogspot.fr/2017/03/angular-400-now-available.html
- http://stackoverflow.com/questions/36597780/how-do-i-correctly-upgrade-angular-2-npm-to-the-latest-version
- http://stackoverflow.com/questions/41274341/upgrading-from-angular-2-2-3-to-2-4-0
- http://stackoverflow.com/questions/186737/whats-the-fastest-way-to-delete-a-large-folder-in-windows


## MONOREPO

### INTRODUCTION

Since NX11 The @nrwl/devkit package naming is different:
- builders are now executors in fact builder execute a kind of command
- schematics are now generators in fact schematics are just a tool for code genarator automation

In the workspace config file you will find different level of nested configuration, you can see the most important namings are : Projects/Targets/Tasks/Executors/Generators.
- Projects are the source code in the repo.
- A generators (schematics in Angular) in fact schematics are just a tool for code genarator automation
- A target (called architect in angular) is something that you can do with a project (for example, build/serve/test). A project can have many targets.
- An executor (called builders in angular) is a function (with some metadata) that executes a command, indeed it tells Nx what to do when you run say nx test lib. The metadata piece is crucial. This is what tells Nx how to validate params and set defaults, what to cache, and so forth.
- A task is an invocation of a target. If you invoke the same target twice, you create two tasks.


### INSTALL

```
nvm install 12.16.1 # install the latest npm using nvm
npm install -g @nrwl/cli # install the latest nrwl cli using npm
node -v # check that the good version of node is selected
npx create-nx-workspace@latest my-project # init the repo
```

### ADD ANGULAR

```
npm install --save-dev @nrwl/angular # add angular capability
npm install --save-dev @nstudio/xplat # add xplat capability
nx g @nrwl/angular:app my-project/my-app # or just ng g myapp if angular default
nx g @nstudio/xplat my-project/my-app # or just ng g myapp if xplat default
nx update @angular/core # or ng update @angular/core
nx migrate @nrwl/workspace@x.x.x # better to use migrate instead of update
```

### ADD SCULLY

```
nx add @scullyio/init # todo run inside the project path
nx add @scully/init:install -- --project=<projectName> # or run from root
ng generate @scullyio/init:blog # create a blog module with scully
```

### START
```
nvm use v12.16.1 # select the good version of node
nx serve my-project-my-app # start the new project
```

### BUILD&SERVE

```
npm run build # Angular build
npm run scully -- --scanRoutes # generate static build and force checking new routes
npm run scully:serve -- --scanRoutes # serve static build and force checking new routes
npm run scully serve # serve the scully results
```

### BUILD&SERVE (+WATCH)

```
ng build --watch
npm run scully -- --watch
```

### RESOURCES

- https://nx.dev/angular/getting-started/getting-started
- https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console
- https://medium.com/mean-fire/nx-nrwl-ionic-1baf3a43db74
- https://github.com/Bielik20/nx-mean-starter/commit/aacbfa66dbd6465a0e0087fe6dcccd1b805619c3
- https://medium.com/@gregor.woiwode/how-to-setup-jest-in-an-ionic-4-project-ff1e5b72dd79

### BEST PRACTICES

- The libs must be split in two part: data-access-namefeature and feature-shell-namefeature. The data-access-namefeature will probably export via the barrel file the models, services, ngrx selectors... On the contrary the feature-shell-namefeature should not export that much except the module itself.
best practices:
- keep the files architecture flat and the app folder bare as much as possible.- dep-graph trace dependencies graphes between apps and libs. The graph is created using the angular/workspace.json and the nx.json configurations however it's not linked to your typescript alias path configuration so feel free to adapt a bit the aliast path to your need.
- ts alias path: You can customize your alias path even if they have been generated by NX by default. This will not impact the dependency graph or any NX feature. For instance if you have lazy modules in a shared library (used by the main bundle) and you follow the recommended barrel files for exposing all your files then you will not be able to load those lazy modules lazily, in fact they will be included in the main bundle by webpack because with the barrel import everything is grouped at the same place. So in this case you must add another alias path for each lazy module inside the shared library This is just an exemple but it's not recommended to do that, indeed at this time it's better to extract your lazy module in a domain library. But again your domain library can have multiple lazy modules and with the barrel import all those modules will be grouped so again if you want to keep them independant you will need to have one alias path for each however if you want to group them and load only one big the barrel import by default is the right solution. 
- nx-enforce-module-boundaries is a linting verification that help to protect access to your libraries. Indeed when you create libraries, especially lazy loaded libraries it's important that no others apps or libraries inside the monorepository can access them except by using the barrel import. So if you try to import any file by a relative or absolute path you will get the following error: nx-enforce-module-boundaries libraries cannot be imported by a relative or absolute path, and must begin with a npm scope
- remove an unused NX library automatically with the schematics command: ng g @nrwl/workspace:remove project-name
- run commands is a NX builder, it's the perfect tool to turn any command line into an executor command, you can chain multiple commands directly here and

### AFFECTED

NX affected work by default comparing the code affected between the current state and the latest commit in the master branch, it's possible to change the base branch and the head. however there are other special behavior for instance when you pass uncommited or untracked of a files list in input then it works using this file list

### REUSABLE LIB (WIP)

- In the specific app: develop components that will be injected with this.router.resetConfig
- In the same generic lib: use the ng-content to integrate visual components
- In the same generic lib: create a specific module + routing (in app or lib) 
- In a new specific lib: import the generic lib and add the specific behavior

To try:
- Create a factory for routing and switching components
- Create an injection token and pass specific components/routing through it
- Use a third parties lib to dynamically instantiate components

## LINTING

```
npx mrm lint-staged
rm .git/hooks/pre-commit
npx husky
npm rebuild
```

## SECONDARY ENTRY POINTS
- https://github.com/nrwl/nx/issues/3518
- https://github.com/nrwl/nx/issues/5952
- https://github.com/ng-packagr/ng-packagr/issues/987
- https://github.com/nrwl/nx/issues/5952#issuecomment-998039783
- https://izifortune.com/multiple-packages-repository-with-angular/
- https://github.com/ng-packagr/ng-packagr/blob/main/docs/secondary-entrypoints.md
- https://techmark.pk/multiple-entry-points-for-the-ngxsimplecharts-angular-library/
- https://medium.com/tunaiku-tech/creating-secondary-entry-points-for-your-angular-library-1d5c0e95600a
- https://stackoverflow.com/questions/65538963/service-is-not-under-rootdir-in-angular-secondary-entry-point

## HTTP POST PARAMS

- https://forum.ionicframework.com/t/http-post-not-sending-data/47452/6
- http://michael.laffargue.fr/blog/2016/04/17/angularjs2-send-http-post-request-with-parameters-to-php/
- https://auth0.com/blog/angular-2-series-part-3-using-http/
- https://www.barbarianmeetscoding.com/blog/2016/04/02/getting-started-with-angular-2-step-by-step-6-consuming-real-data-with-http/


## REDUX / NGRX


### Summary

- store.dispatch = trigger an action
- store.select = get current state
- effects = async task like http request
- reducer = switch where state is updated

### New projects

- When you start a new project consider enabling all the runtime checks:
- https://ngrx.io/guide/store/configuration/runtime-checks

```
runtimeChecks: {
  strictStateImmutability: true,
  strictActionImmutability: true,
  strictStateSerializability: true,
  strictActionSerializability: true,
  strictActionWithinNgZone: true
}
```


### Cycle

- dispatch action -> effect -> success/failure action -> reducer pattern.

### Issues

- The root of the problem is that once you fire an Action you’re completely disconnected from the lifecycle of that action (

1. Effects
   Ngrx/effects is middleware for handling side effects in ngrx/store. It listens for dispatched actions in an observable stream, performs side effects, and returns new actions either immediately or asynchronously. The returned actions get passed along to the reducer.

### Pitfalls

1. Bloated stores: not everything must be in the store. How to determine if it should go in the store:(SHARI: Shared, Hydrated, Available, Retrieved, Impacted) (DUGSA: Dependent, Unique, Global, Serializable, Atomic)
2. Too few selectors: will get harder to test and instead of building selectors you maybe duplicate a lot of data in the store. You must compose selectors.
3. Common-based actions: create and reuse a base action instead of creating all actions from scratch
4. Effects dominos: actions which trigger effect which trigger action which trigger effect...
5. Selector-based effects: do no trigger async things using a selector as a trigger... you will not have any way to understand what is going on.
6. Overly smart conponents: instead of waiting actions success in your components, you should use the state instead, also think you can do router in your effects, you can trigger toaster from your effects
7. Large effects are problematic: When you're deciding where to re-allocate business logic put it (in priority order: (1. In external pure function > 2. In a selector > 3. In a service > 4. In an effect)): Selectors are easier to test and easier to understand. Services are slightly harder in both categories. Effects are the hardest of all. Only put code there that absolutely needs to go there (asynchronous call for instance).

### Tips

1. Don't forget to release when you use a selector with parameter, you can eventually release in the effect when you get a new value. ex: 
- selectTotal(state); // returns the memoized value of 8
- selectTotal.release(); // memoized value of selectTotal is now null
2. Split nested data apart for store: split directly in service or effect or helper functions
3. Use NgRx Entity if you load data from api and you are dealing with array of objects. You will get many utility functions. ex: find by id, fast shortcuts like that...
4. Use NgRx Data if you have a very big app with many entities (+40).
5. Use NgRx Entity Schematic to skaffold entities with actions, effects, reducer, model, service, and passing specs.

### Components

So @ngrx/component (and partly @ngrx/component-store) are all about leveraging the observable as the primary means of change detection in Angular apps. The goal is to enable fully reactive Angular applications to run without Zone.js. Right now we accomplish this with two APIs:

- observable$ | ngrxPush is a drop-in replacement for the async pipe. ngrxPush pipe will run change detection for you when the provided observable emits. It also handles errors a little more gracefully than the async pipe. Unlike the Angular async pipe it triggers change detection and rendering ONLY in the very component where the change got introduced, and the child components effected by the change.
- *ngrxLet="observable$ as value" is an alternative for *ngIf="observable$ | async as value" that handles falsey values correctly, lets you handle errors, and also runs change detection when the provided observable emits.

- *ngIf="state$ | async as vm" (old syntax)
- *ngrxLet="state$ as vm" (no typing at the moment)
- *ngIf="state$ | ngrxPush as vm" (no typing at the moment)
- *ngrxLet="state$; let vm" (typing work)

## PIPES

``
{{ asyncGreeting | async }

{{ birthday | date:'shortTime' }} <!-- will display '3:30 PM' --
{{ article.date() | date:'medium'}}
{{ birthday | date:'longDate' }} <!-- will display 'July 16, 1986' -->
{{ birthday | date:'dd/MM/yyyy' }}

{{ ponies | json }}
{{ ponies | slice:0:2 | json }
{{ 'Ninja Squad' | uppercase }}
{{ 'Ninja Squad' | lowercase }}
{{ 12345 | number:'.2' }			<!-- will display '12,345.00' -->
{{ 12345.13 | number:'.1-1' }} <!-- will display '12,345.1' -->
{{ 0.8 | percent }} <!-- will display '80%' -->
{{ 0.8 | percent:'.3' }} <!-- will display '80.000%' -->
{{ 10.6 | currency:'EUR' } <!-- will display 'EUR10.60' -->
``

<div *ngFor="let pony of ponies | slice:0:2">{{pony.name}}</div> 
<div loggable [logText]="expression | uppercase">Hello</div> 
``

## DIRECTIVES

### ANGULAR DIRECTIVES

ngTemplate

Welcome {{user?.name}} 
 
ngIf 
<div *ngIf="races.length > 0">Races</div>  So, it’s important to understand that the Angular ngIf directive actually creates and destroys DOM elements. T
 
ngFor 
<ul> <li *ngFor="let race of races; let i=index">{{i}} - {{race.name}}</li> </ul> 
<ul> <li *ngFor="let article of articles | async">{{article.name}}</li> </ul> 
 
ngFor + input class/bean 
<app-article *ngFor="let article of articles" [article]="article"></app-article> 
export class ArticleComponent { 
	@Input() article: Article; 
} 
 
ngSwitch 
<div [ngSwitch]="messageCount">   <p *ngSwitchCase="0">You have no message</p>   <p *ngSwitchCase="1">You have a message</p>   <p *ngSwitchDefault>You have some messages</p> </div> 
 
ngStyle 		La clé peut être en camelCase (fontWeight) ou en dash-case ('font-weight') 
<p [style.color]="foreground">Friendship is Magic</p>														> 1 atrribut 
<div [ngStyle]="{fontWeight: fontWeight, color: color}">I've got style</div>								> x atrributs 
 
ngClass 
<div [class.awesome-div]="isAnAwesomeDiv()">I've got style</div>											> 1 classe 
<div [ngClass]="{'awesome-div': isAnAwesomeDiv(), 'colored-div': isAColoredDiv()}">I've got style</div>		> x classes 
 
attribute input == binding de propriété 
<ns-pony name="{{pony.name}}"></ns-pony> === <ns-pony [name]="pony.name"></ns-pony> 
<ns-pony name="Pony {{pony.name}}"></ns-pony> === <ns-pony [name]="'Pony ' + pony.name"></ns-pony> 
<ns-pony name="{{pony.fullName()}}"></ns-pony> === <ns-pony [name]="pony.fullName()"></ns-pony> 
<option [selected]="isPonySelected" value="Rainbow Dash">Rainbow Dash</option> 
<div [hidden]="isHidden">Hidden or not</div> 
<p [style.color]="foreground">Friendship is Magic</p> 
 
attribute output  == binding d'évenement 		 les événements qui se propagent vers le haut depuis le fond des composants enfants 
<button (click)="onButtonClick()">Click me!</button> 
<div (click)="onButtonClick()">   <button>Click me!</button> </div> 					-> fonctionne car propagation vers le haut 
<div (click)="onButtonClick($event)">   <button>Click me!</button> </div>				-> récupérer l'evenement 
onButtonClick(event) {   event.preventDefault();   event.stopPropagation(); }			-> stopper la propagation 
 
variable locale 
<input type="text" #name> {{ name.value }} 
<input type="text" #name> <button (click)="name.focus()">Focus the input</button> 
<google-youtube #player></google-youtube><button (click)="player.play()">Play!</button> 
 
### CUSTOM DIRECTIVES
(une directive n’a pas de vue). 
selecteur: Ne nomme pas tes sélecteurs avec un préfixe bind-, on-, let- ou ref- : ils ont une autre signification pour le parseur, car ils font partie de la syntaxe canonique des templates. 
• un élément, comme c’est généralement le cas pour les composants : footer. 
• une classe, mais c’est plutôt rare : .alert.  
• un attribut, ce qui est le plus fréquent pour une directive : [color].  
• un attribut avec une valeur spécifique : [color=red].  
• une combinaison de ceux précédents : footer[color=red] désignera un élément footer avec un attribut color à la valeur red.  
 
@Directive({    
selector: '[loggable]',    
inputs: ['text: logText']  
})  
export class SimpleTextWithSetterDirective { 
  	set text(value) {     console.log(value);   }  
} 
	OU  
	 
@Directive({    
selector: '[loggable]'  
})  
export class InputDecoratorOnSetterDirective { 
  	@Input('logText')    
	set text(value) {     console.log(value);   }  
} 

## DECORATORS

- @HostListener() function decorator allows you to handle events of the host element in the directive class. For example, it can be used to change the color of the host element if you hover over the host element with the mouse.
- @HostBinding() function decorator allows you to set the properties of the host element from the directive class. In this directive class, we can change any style property like height, width, color, margin, border, etc.

## LIFECYCLE

• ngOnChanges sera la première appelée quand la valeur d’une propriété bindée est modifiée. Elle recevra une map changes, contenant les valeurs courante et précédente du binding, emballées dans un SimpleChange. Elle ne sera pas appelée s’il n’y a pas de changement.  
• ngOnInit sera appelée une seule fois après le premier changement (alors que ngOnChanges est appelée à chaque changement). Cela en fait la phase parfaite pour du travail d’initialisation, comme son nom le laisse à penser.  
• ngOnDestroy est appelée quand le composant est supprimé. Utile pour y faire du nettoyage.
• ngDoCheck est légèrement différente. Si elle est présente, elle sera appelée à chaque cycle de détection de changements, redéfinissant l’algorithme par défaut de détection, qui inspecte les différences pour chaque valeur de propriété bindée. Cela signifie que si une propriété au moins est modifiée, le composant est considéré modifié par défaut, et ses enfants seront inspectés et réaffichés. Mais tu peux redéfinir cela si tu sais que la modification de certaines entrées n’a pas de conséquence. Cela peut être utile si tu veux accélérer le cycle de détection de changements en n’inspectant que le minimum, mais en règle générale tu ne devrais pas avoir à le faire.  
• ngAfterContentInit est appelée quand tous les bindings du composant ont été vérifiés pour la première fois.  
• ngAfterContentChecked est appelée quand tous les bindings du composant ont été vérifiés, même s’ils n’ont pas changé.  
• ngAfterViewInit est appelée quand tous les bindings des directives enfants ont été vérifiés pour la première fois.  
• ngAfterViewChecked est appelée quand tous les bindings des directives enfants ont été vérifiés,
même s’ils n’ont pas changé. Cela peut être utile si ton composant attend quelque chose de ses composants enfants. Comme ngAfterViewInit, cela n’a de sens que pour un composant (une directive n’a pas de vue).

EXAMPLE

```
export class App implements OnInit, AfterViewInit, AfterContentInit {
  @Input() myInput: string;
  @ViewChild() myTemplate: TemplateRef<any>;
  @ContentChild(ChildComponent) myComponent: ChildComponent;

  constructor(private elementRef: ElementRef) {
     // this.elementRef.nativeElement is undefined here
     // this.myInput is undefined here
     // this.myTemplate is undefined here
     // this.myComponent is undefine here
  }

  ngOnInit() {
     // this.elementRef.nativeElement can be used from here on
     // value of this.myInput is passed from parent scope
     // this.myTemplate and this.myComponent are still undefined
  }
  ngAfterContentInit() {
     // this.myComponent now gets projected in and can be accessed
     // this.myTemplate is still undefined
  }

  ngAfterViewInit() {
     // this.myTemplate can be used now as well
  }
}
```

## API

ViewChild and ContentChild are two very important features of Angular. It is used to access Child Component in the Parent Component.

Any directive, component, and element which is part of component template is accessed as ViewChild. Whereas, any element or component which is projected inside is accessed as ContentChild for instance when using ng-content. In case if you project a list of components using ngFor you can still access the ContentChild using the type QueryList. You can then access it in the ngAfterContentInit hook.


## ANGULAR DOM

Angular Suggests to use its own Renderer2 API instead of Native DOM Manipulations because it will make your app compatible with different rendering method such as Server Side Rendering (Angular Universal). In addition to that it's for a security question.

- https://dzone.com/articles/4-common-bugs-in-angular-and-how-to-fix-them

private \_renderer2:Renderer2

avoidAngularBugs(){
this.\_renderer2.setElementProperty(this.\_elementRef,'add-property-here',true);
}

## FORM

- Template-driven (FormsModule) most of the logic is driven from the template
- Reactive-driven (ReactiveFormsModule)  the logic resides mainly in the component or typescript code. 

## ANGULAR TESTING

### E2E TESTS

Cypress is very efficient tools for e2e. At the beginning to see how it goes you can start testing the app using real backend request for the GET requests and using mock for the others method (POST,PATCH, DELETE)

### UNIT TESTS

- Jest is faster because it does not run on a real browser instead it uses jsdom. It's not testing the rendering (html/css) but just the dom tree. So there is a potential risk that jsdom differs from your targetted browser.
- Karma is slower because is testing using a real browser so the unit test are certainly working as expected in a real browser.

In the context of a large application with a lot of tests we need a quick tool so Jest seem adapted, the html rendering will then be tested with e2e tests.

In unit test there are different way of simulating a function or an object : Spy, Mock... The difference is that in mock, you are creating a complete mock or fake object while in spy, there is the real object and you just spying or stubbing specific methods of it. While in spy objects, of course, since it is a real method, when you are not stubbing the method, then it will call the real method behavior. When stubbing you can create a dynamic responsive and return a different response depending on the call.

A stub is also a dummy class providing some more specific, prepared or pre-recorded, replayed results to certain requests under test. ... A spy is kind of a hybrid between real object and stub, i.e. it is basically the real object with some (not all) methods shadowed by stub methods

### STRATEGY

- Separate business logic from UI
- Use more dumb components
- Test business logic and UI separately
- Test actions and impact on the store
- Create custom validators for forms

Services (NgRx effects, business logic, sandboxes/facades) - unit test, 100% coverage
Pure functions (Pipes and helpers) - unit test, 100% coverage
Container component - integration tests, happy paths

### EXAMPLE TYPE OF TESTS

my-comp.ui.spec.ts
my-comp.io.spec.ts
my-comp.bu.spec.ts



- https://angular.io/guide/testing
- http://blog.soat.fr/2018/02/tests-unitaires-avec-angular-partie-1/
- http://blog.soat.fr/2018/02/tests-unitaires-avec-angular-partie-2/
- https://codecraft.tv/courses/angular/unit-testing/angular-test-bed/
- https://stackoverflow.com/questions/40126729/angular-2-testing-async-function-call-when-to-use
- https://stackoverflow.com/questions/40432734/angular-2-jasmine-error-please-call-testbed-compilecomponents-before-your

### MOCKING

- Mock components with ng-mocks (MockComponent) and add them to the declarations in TestBed/spectator factory
- Mock directives using ng-mocks (MockDirective)
- Mock pipes with ng-mocks (MockPipe)
- Mock services/guards/resolvers with mocks property in Spectator factory/createSpyObject
- Mock ngrx/store with provideMockStore
- Mock ngrx/selectors with store.overrideSelector

### TESTING FACTORIZE/IMPORTS

- https://stackoverflow.com/questions/48789289/how-to-reuse-all-imports-in-angular-test-files

### TESTING TRANSLATE

- https://github.com/ngx-translate/core/issues/636
- https://github.com/ngx-translate/example/blob/master/src/app/app.component.spec.ts

test end to end (voir ninja angular page 157)

## MODULES

- App module: it's the root module used to bootstrap the application. There should not be a lot of content because we must encapsulate features into domain-specific modules.
- Core module: app-level components like header, footer, breadcrumb, navigation and singleton services. This module should be imported once in app module and the module should not export anything because only the core use those components.
- Shared module: shared components, directives, guards, & pipes used throughout the application must be inside this module and exported to be able to be used by others modules which are importing it. It's common to import and export Angular built modules, Common Module or Material module inside your Shared Module if you really need to access them in multiple locations like in many Feature modules.
- Feature module: Breaking things up into domain-specific lazy loaded modules will help run in the long term. Those modules must be isolated and export nothing except the module itself for doing the lazyloading.

### Benefits of lazy modules

- faster rebuilds in dev mode
- feature isolation/guarantees
- faster application boot time

### One shared module

- If we put all shared pipes, directives and common components in one big shared module and then import it everywhere (inside sync and async chunks) then that code will be in our initial main chunk. So if you want to get a bad initial load performance then it’s the way to go.

### Multiple shared modules

- On the other hand, if we split commonly used code across lazy loaded modules then a new shared chunk will be created and will be loaded only if any of those lazy modules are loaded. This should improve the application initial load. But do it wisely because sometimes it’s better to put small code in one chunk that having the extra request needed for a separate chunk load.

### Shared modules part

- Shared modules will be imported by many lazy loaded features so they must only contain declarables (components, directives and pipes) and modules (which only contain declarables) and must NEVER implement any services (providers: [ ]).

### Module configuration

#### Declarations

The declarations array only takes declarables. Declarables are components, directives and pipes. Declarables must belong to exactly one module else the compiler emits an error. Declarables are private by default so they can be used only in the template of any component that is part of this same NgModule, if you want to use it outside you must uses the export array. Pipes is a special case. must also be added to the providers array if you use transform function in a component template or if you want to use inject it via a constructor. You can also instead provide your pipe locally to the component or else use the providedIn 'root' if you want to share it globally.

#### Imports

Other modules whose exported classes are needed by component templates declared in this NgModule. Basically this is useful in order to use declarables that are exported in others modules. For instance if ModuleA imports ModuleB then ModuleA will be allowed to use any declarable exported by ModuleB.

#### Exports 

 The subset of declarations that should be visible and usable in the component templates of other NgModules. It means that a template external to this module can use exported declarables from any imported module. For instance if you want to use in your app template a modal component declared in a modal module then this modal component should be declared and exported in your modal module first and of course modal module should be imported in your app module. Also another more complex case is the indirect principles made possible by exporting a whole module instead of a single declarable. Indeed if ModuleA imports ModuleB, and also exports it, this makes the declarables from ModuleB available wherever ModuleA is imported.

#### 


### Dependency injection (DI)

Injectors are inherited, which means that if a given injector can't resolve a dependency, it asks the parent injector. A component/directives can get services from its own injector, from the injectors of its component ancestors, from the injector of its parent NgModule, or from the root injector (created from the app module).

### Types

- Tree-shaking services are possible by using the providedIn: 'root', 'platform', 'any', like that if the service is never injected it will be removed of the bundle at compilation.

- Core services (not lazy) must be in the core folder and can declared either in the providers: [ ] array of the core module or better by using the providedIn: 'root' syntax from their @Injectable() decorators and then can be used in all kind of modules (lazy or not) without putting them in providers: [ ] array of any other module.
- Shared services (shared by multiple lazy or core modules) if you put your services inside the provider array of the shared module and then use shared like its intented to use in multiple lazy modules then every lazy loaded module would get its own service instance and not the intented singleton. In this case (only for shared modules) you can also use forRoot/forChild with providers that are going to be imported into both eager and lazy module modules.
- Feature services (lazy module) can be scoped to that feature by removing the providedIn: 'root' from their @Injectable() decorators and adding them to the providers: [ ] array of the lazy feature module instead.
- Component services can be scoped to that component by removing the providedIn: 'root' from their @Injectable() decorators and adding them to the providers: [ ] array of the component. The service will be available in all child components, the view child and the content child. In addition to providers you can add viewProviders array if you want to scope the same token (with different class) only for the component view itself and consequently the content children (ng-content) will use the service from the providers array defined first.
- Shared services between multiple apps or Angular Elements. You can use the providedIn: 'platform' in order to make a service available between multiple apps or Angular Elements.
- Non singleton services. You can use the providedIn: 'any' in order to create isolated (contrary to a singleton) services for every child injector.

### Providing

- Then you must understand the different kind of injection you can do, in fact you can inject either a class, a value, a factory and even more:
- class: { provide: MyService, useClass: MyService } // It is a shortcut for MyService
- value: { provide: MY_CONST,  useValue: "https://my.text" } // MY_CONST must be declared as InjectionToken<string>
- factory: { provide: MyObs, deps: [DOCUMENT], useFactory: doThingFactory } // MyObs must be declared as InjectionToken<Observable<string>> and doThingFactory is a function which return the observable. You can also create your factory using the 2ng argument of InjectionToken. With useFactory you can easily switch between different implementation but with factory from InjectionToken the token is automatically provided in root so it's not modulable.
- existing: { provide: MyInterface, useExisting: forwardRef(() => MyDirective) } // MyDirective implements MyInterface and so forwardRef returns a directive after its instance is created

### Decorators

Those decorators below can be used to configure more precisely the injection behavior. They can be used in the constructor method or also in the deps array while providing a factory.

- default: inject without any decorator, looking up the injectors hierarchy...
- self: inject using only the provider from the component itself (@Self())
- skipSelf: inject by skipping the provider from the component itself (@SkipSelf())
- optional: inject if is provided else return null (@Optional())
- host: inject looking in the component itself first and if is not found there, it looks for the injector up to its host component. (@Host()). Special case with directives and content projection.




## CHANGE DETECTION

### Optimization

- onPush and immutability
- pipes instead of methods in template
- caching
- trackBy in ngFor
- detach change detection

### OnPush and immutability

Only rerender template if:

- One of its input properties has gotten a new ref
- An event from the component of one of is childrens (click...)
- Explicit trigger of CD (detectChanges/markForCheck)

Design for immutability :

- Presentational comp <-> Container com <-> Redux store
- Eventually use facade in your container comp

Trigger details:
- ChangeDetectorRef.markForCheck() to cause change detection to execute on the component itself and all ancestor components up to the root component.
- ChangeDetectorRef.detectChanges() if state changes are local to the component and its descendants

### Pipes instead of methods in template

- methods gets evaluated evaluated on every tick
- pure pipes only get evaluated on every input changes

1. extract to smaller components and use onPush
2. use async and custom pipes instead of template methods

### Cahing

- cache values from pure pipes using memoize (lodash or not)

### TrackBy in ngFor

- trackBy ensure that only the list element that has changed will be rerendered

### Detach change detection

- for heavy computation only and rerender manually
- cdr.detach() onInit
- cdr.detectChanges() after the computation

### Others optimization

- Cache static content using PWA (ng add @angular:pwa --project "project-name")
- Normalize the store in the effect and denormalize in the selector

## CODING RULES

### Reactive programming

- use reactive for ngrx store / effects / services
- use reactive for async processing (cancel/batch/debounce)
- use reactive to subscribe in container components (async / streams)
- don't use reactive for view / presentation components
- their interface is plain data (@input/@output)
- eventually use ngOnChanges to get derived data


## DEBUG

### DEVTOOLS

```
$0 # most recent selection from the elements tabng.getComponent($0)
ng.getDirectives($0) # get directives applied to this angular component
ng.getListeners($0) # get listeners applied to this angular component
ng.applyChanges($0) # trigger change detection for this specific component
ng.getContext($0); # get context ex: are you inside ngIf or ngFor
ng.getOwningComponent($0) # parent angular component of any element
ng.getRootComponents($0)  # get root component from any element
```

- ex: Modify value in live 

```
let c = ng.getComponent($0)
c.title = 'test';ng.applyChanges($0)
```

- More: https://medium.com/wizpanda/new-ways-to-debug-components-in-angular-9-e866e41ed23f

### PERFORMANCE

chrome dev tools > performance tab > record+stop
- check then summary if scripting take more than 60% of the time then you found the issue, maybe change detection is triggered in a loop or maybe a function with high level of computation is triggered many times.
- check bottom-up and call tree to understand more about the issue, you will see if there is any function from your codebase which is called many times or if the issue is due to the change detection then you will see zone.js.

### MEASURE

console.time('test1');
console.timeEnd('test2);


### CIRCULAR DEPENDENCIES

Can be caused by:
- wrong usage of barrel imports. IE: imports inside a module must be relative and outside module must use the barrel reference
- wrong usage of services. IE: usage inside the constructor of others services which are mutually linked.
- wrong usage of providedIn. IE: the service must not belong to the module you want to provide it to.

## BAD PRACTICES

- lack of clear design pattern such as smart/dumb components results in hard to read, debug, test and maintain codebase. The smart/dumb components pattern should be used everywhere.
- lack of application monitoring and error tracking at the beginning of the project such as sentry. It results in a tons of bugs the day you install it and you then have to work for months in order to clear the app of all the bugs.
- lack of pure functions, the developers are used to write impure functions which are changing the state of the component variable inside the function, this results in side effects and function are not testable. It's harder to write pure function but it results in easier to maintain code.
- lack of simple typings in objects, functions input and output, developers sometimes use any instead. if in addition you don't have unit tests then your code it's very vulnerable to errors.
- lack of readonly and deepreadonly typings it results in unsafe code and possible mutation of any attributes in the codebase, functions will have potentially side effects.
- lack of clear pattern for overriding the existing theme. A clear convention should be used, for instance if you want to override material, there are many different cases to know: (theming variables, overlay components, regular components...) you must check the articles written by razroo called customize angular material design.
- lack of splitting in modules, especially lazy modules, it will results in big main bundle but also it will makes the app more and more coupled and later it will be almost impossible to split the codebase in lazy modules.
- wrong usage of ngrx, indeed this library should be used only for a certains types of entities which are shared, hydrated, available, retrieved, impacted. That's also why in 2020 multiples new solutions emerged in order to give developers the ability to store data in a local state instead of the global ngrx state.
- usage of ::ng-deep without :host is going to affect the css of the others components, the style isolation principle is broken, the way to avoid that is by using :host ::ng-deep. Those errors are also due to the fact that angular material must render part of the components outside of the components, that means there is a overlay panel detached which pop on top of the view, for instance when mat-select is open.
- accumulation of circular dependencies warnings will make your app less and less maintenable. Each time you detect a circular dependencies it's recommended to take time and fix it.
- usage of scss imports in each components produces a lot of duplicated code.

## BEST PRACTICES

- usage of feature toggle in environment files in order to be able to enable or disable a new features in each environment, it can be very useful if a feature is buggy or not finished.
- usage of template to follow for the gitlab MRs + the jira tickets. Us a much as possible generic model for the processing like that the team will be used and will naturally start to follow those best practices.
- improve the testability by making a backdoor to test all the different conditional templates in the UI.
- test the screen with any kind of data, for instance a short text and a long text in order to check the layout responsiveness.
- extract the conditional templates logic in a component function, for instance if you have to display a text depending on many conditions then make a switch(true) function to handle this. In some case if the template is big enough then you can use a ngSwitch in order to render different components.

## JOIN AN EXISTING PROJECTS

- ask for an existing bookmark links list of create my own bookmark links (envs, gitlab, jira, api, tools, perso)
- ask which extensions are used by the team ex: vscode-gitlab + angular-essential
- review the redux store in order to understand the data/entities of the app
- review the routing modules in order to understand the architecture of the app
- check all the mixin and variables scss files in order to know what should be reused
- check all keywords such as InjectionToken, readonly, as const in order to know the current state
- use tools such as bundle-analyzer and ngrx-vis in order to understand the current archi

## MICROFRONTEND

In order to communicate between multiple microfrontend initialized in a same webpage you can create a messageBus using a BehaviorSubject and attach it to the window or use the dispatchEvent already in the window object: ex: window.dispatchEvent(new CustomEvent('myCustomEvent'));

- https://github.com/DanWahlin/angular-architecture/blob/master/demos/src/app/core/services/event-bus.service.ts

### IDEAS

- manage version compatibility to be sure cached shell version use the right compatible mf
- how to detect what need to be delivered? only one mf or multiple mf or the full app: shell+mfs

## JAMSTACK

JamStack is a new way to build static website using javascript, apis, markups. contrary to LAMPStack everything is generated at the build time. It helps for the SEO and for the performance, loading time...

There is two way to develop those websites:
- server side rendering: do the rendering on a server, behind a cache. it's more complex and recommended only if you have very dynamic content in your page.
- pre rendering: do the rendering at the build and then deploy static files online, it's the simpler and the easy to go solution.


 In angular there is 2 solutions to build those static websites: 
 - universal: official solution provided by angular 
 - scully: community driven project, it's using a headless browser (puppeteer) and it's more complete and also provides also a plugin adapter.

There is a new module called @angular/fire which helps to automatize the whole deployment process.

### SCULLY

- use isScullyRunning to know if the prerendering is running, like that you can adapt different logic depending on if this is the angular app or scully rendering or static website...
- use isScullyGenerated to know if the app has been prerendered and it's the final static angular webapp that is running. In this case you can get state from the transferState feature else the app will be in angular mode or in prerendering mode and in this case you can set the transferState by getting the data from the api...
- ignore route using type: 'ignored' instead of type: 'contentFolder' in the scully config of the project
- build only the route you are asking for using the command line route filter: ex: npm run scully -- --watch --routeFilter=/donuts/*
- use state transfer to cache api data in the same server and in plain json object.
- use the scully utility called herodevs/scully-plugin-the-vault in order to cache your api requests, for instance if two pages make the same call the api is called only once. Consequently it speed up the build time and also save resources and money.
- the routes config make puppeteer traverses the local source only, so eventually puppeteer will not traverses routes that are lazy loaded or remote routes such as external websites, microfrontends included. You must add the route in the extraRoutes config to make puppeteer traverses routes from external sources, you can even use a slug pattern (ex: "/product/detail/:productId") if you have a dynamic routes config configured.
- the critical css for each page must be inlined and the other part of the global css should be ideally in a regular css file. if all the page have a very similar css  it would make sense to use viewEncapsulation: 'none' on all your pages, and use a single global CSS file to be cached and reused by the browser across different pages. However, pages are very different. Each page can have its own file. The only cost is some extra disk space at your server.

## TIPS

- role system: use the data property in the routing to pass role restriction enum and then you can check if the user has this role (route.data.roles) in the canActivate of the guard. You can extend role feature with a dedicated ACL lib such as: CASL.
- starting: integrate the best utils libs at the beginning of the project: casl, match-rules
- circular dep: check the quality of you code using the various open-source tools such as: bundle-analyzer, madge... `madge --circular --extensions ts ./`
- normalize state: when there is business logic which will duplicate entities. In this case it's the right way to normalize else you can nest entities in the state because it's simpler particulary if you use an entity adapter

## ERROR

- you can override the default global error handler to add your custom behavior
- try { } catch {} is only catching synchronous errors
- asynchronous errors are catched via Zone.js error stream (setTimeout, promise.resolve...)
- asynchronous errors in RxJS needs to be catched differently (tap to get, then catchError to set a default value and you can also throwError to propagate downstream, you can/need to catchError at different place : service and/or component or else it will goes to the global handler)
- http errors in angular can be catched in a global interceptor where you can for instance retry 3 times before throwing the errors.

## INTERVIEW

### BREAKING ICE QUESTIONS:
- how many different versions of angular did you use?
- which third party libraries do you like to use?
- did you already develop unit-tests in angular? + (which toolkit)?

### OPEN QUESTIONS:
- what was the most challenging thing you have had to do in Angular?
- what was your biggest mistake in front-end development?
- what do you like and what do you dislike in Angular?

### TECHNICAL QUESTIONS:
- can you describe what is reactive programming (rxjs/observable)?
- can you describe what is redux (ngrx)?
- can you describe what is typescript?

### CLOSED QUESTIONS:
- what are the different values possible for the position property in css?
- what are the different values possible for the display property in css?
- whats is the immutability in javascript?
- what is the spread operator in javascript?
- what is the destructuring in javascript?

### TEST
- https://github.com/cloudnc/frontend-interview
- https://github.com/Yonet/Angular-Interview-Questions
- https://github.com/danieldelcore/mega-interview-guide
- https://github.com/sudheerj/angular-interview-questions
- https://github.com/yangshun/front-end-interview-handbook
- https://github.com/learning-zone/angular-interview-questions
- https://dev.to/mokkapps/my-top-angular-interview-questions-237h
