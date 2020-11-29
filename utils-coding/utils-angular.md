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

### UPGRADE NG VERSION

```
npm outdated # Check for out of date modules
ng update @angular/core @angular/cli # Update Angular
ng update --all --force # Update all Angular and force
npm update # Update non-Angular dependencies
nx migrate @nrwl/workspace@x.x.x # Update with NX Workspace
```

- https://update.angular.io
- https://github.com/angular/angular-cli#updating-angular-cli <<< OFFICIAL
- https://blog.angular.io/version-6-of-angular-now-available-cc56b0efa7a4 <<< OFFICIAL
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
nx g @nrwl/angular:app my-project/my-app # or just ng g myapp
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

### STRUCTURE

- The libs must be split in two part: data-access-namefeature and feature-shell-namefeature. The data-access-namefeature will probably export via the barrel file the models, services, ngrx selectors... On the contrary the feature-shell-namefeature should not export that much except the module itself.

### REUSABLE LIB

- In the specific app: develop components that will be injected with this.router.resetConfig
- In the same generic lib: use the ng-content to integrate visual components
- In the same generic lib: create a specific module + routing (in app or lib) 
- In a new specific lib: import the generic lib and add the specific behavior

To try:
- Create a factory for routing and switching components
- Create an injection token and pass specific components/routing through it
- Use a third parties lib to dynamically instantiate components


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
- Feature module: Breaking things up into domain-specific lazy loaded modules will help run in the long term. Those modules must be isolated and export nothing except the module itself for the lazyloading

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
- factory: { provide: MyObs, deps: [DOCUMENT], useFactory: doThingFactory } // MyObs must be declared as InjectionToken<Observable<string>> and doThingFactory is a function which return the observable. You can also create your factory using the 2ng argument of InjectionToken.
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
- ignore route using type: 'ignored' instead of type: 'contentFolder' in the scully config of the project
- build only the route you are asking for using the command line route filter: ex: npm run scully -- --watch --routeFilter=/donuts/*
- use state transfer to cache api data in the same server and in plain json object.

## TIPS

- role system: use the data property in the routing to pass role restriction enum and then you can check if the user has this role (route.data.roles) in the canActivate of the guard. You can extend role feature with a dedicated ACL lib such as: CASL.
- starting: integrate the best utils libs at the beginning of the project: casl, match-rules
- circular dep: check the quality of you code using the various open-source tools such as: bundle-analyzer, madge... `madge --circular --extensions ts ./`
- normalize state: when there is business logic which will duplicate entities. In this case it's the right way to normalize else you can nest entities in the state because it's simpler particulary if you use an entity adapter

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
- what is the spread operator in javascript?
- what is the destructuring in javascript?

### TEST
- https://github.com/cloudnc/frontend-interview
- https://github.com/Yonet/Angular-Interview-Questions
- https://github.com/sudheerj/angular-interview-questions
- https://dev.to/mokkapps/my-top-angular-interview-questions-237h
