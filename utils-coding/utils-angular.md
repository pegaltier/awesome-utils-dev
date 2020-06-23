- [TEMPLATES](#templates)
- [CLI](#cli)
- [UPGRADE](#upgrade)
  - [CLEAN NODE_MODULES](#clean-nodemodules)
  - [UPGRADE CLI VERSION](#upgrade-cli-version)
  - [UPGRADE NG VERSION](#upgrade-ng-version)
  - [AUTO UPDATE](#auto-update)
  - [BUILD PROD](#build-prod)
  - [EXTENDS](#extends)
- [HTTP POST PARAMS](#http-post-params)
- [REACTIVE / RXJS](#reactive--rxjs)
  - [HOT VS COLD](#hot-vs-cold)
  - [OBSERVABLE](#observable)
  - [OBSERVER](#observer)
  - [SUBSCRIPTION](#subscription)
  - [SUBJECT](#subject)
  - [EVENT EMITTER](#event-emitter)
  - [OPERATORS (FRENCH)](#operators-french)
  - [OPERATORS (ENGLISH)](#operators-english)
    - [TRANSFORMATION](#transformation)
    - [COMBINATION](#combination)
    - [CREATION](#creation)
    - [UTILITY](#utility)
    - [ERROR HANDLING](#error-handling)
  - [MORE OPERATORS](#more-operators)
- [REDUX / NGRX](#redux--ngrx)
- [PIPES](#pipes)
- [DIRECTIVES](#directives)
  - [ANGULAR DIRECTIVES](#angular-directives)
  - [CUSTOM DIRECTIVES](#custom-directives)
- [LIFECYCLE](#lifecycle)
- [ANGULAR TESTING](#angular-testing)
  - [TESTING FACTORIZE/IMPORTS](#testing-factorizeimports)
  - [TESTING TRANSLATE](#testing-translate)
  - [TESTINT EXAMPLE](#testint-example)
- [MONOREPO](#monorepo)
- [LAZY MODULES](#lazy-modules)
- [CHANGE DETECTION](#change-detection)
- [CODING RULES](#coding-rules)
- [INTERVIEW](#interview)

## TEMPLATES

- {{}} pour l’interpolation,
- [] pour le binding de propriété (entrée)
- () pour le binding d’événement (sortie)
- '#' pour la déclaration de variable
- '\*' pour les directives structurelles (for/if...)

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
ng update
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

## HTTP POST PARAMS

- https://forum.ionicframework.com/t/http-post-not-sending-data/47452/6
- http://michael.laffargue.fr/blog/2016/04/17/angularjs2-send-http-post-request-with-parameters-to-php/
- https://auth0.com/blog/angular-2-series-part-3-using-http/
- https://www.barbarianmeetscoding.com/blog/2016/04/02/getting-started-with-angular-2-step-by-step-6-consuming-real-data-with-http/

## REACTIVE / RXJS

### What is RxJS?

- Reactive programming is an asynchronous programming paradigm concerned with data streams and the propagation of change - Wikipedia
- RxJS is a library for reactive programming using observables that makes it easier to compose asynchronous or callback-based code - RxJS docs

### 

- Observable: is the stream of data. It represents the idea of an invokable collection of future values or events.
- Observer: is a collection of up to 3 callbacks (next, error, complete) that knows how to listen to values delivered by the Observable.
- Subscription: represents the execution of an Observable, is primarily useful for starting the execution in case of a cold observable and for cancelling the execution in case of hot observable.
- Operators: are pure functions that enable a functional programming style of dealing with collections with operations like map, filter, concat, flatMap, etc.
- Subject: is the equivalent to an EventEmitter, and the only way of multicasting a value or event to multiple Observers.
- Schedulers: are centralized dispatchers to control concurrency, allowing us to coordinate when computation happens on e.g. setTimeout or requestAnimationFrame or others.

- http://rxmarbles.com/
- https://xgrommx.github.io/rx-book/index.html
- http://reactivex.io/rxjs/manual/overview.html
- https://www.technologies-ebusiness.com/enjeux-et-tendances/rxjs-pour-les-humains

### HOT VS COLD

- COLD (i.e http obserable) ==> when your observable creates the producer
Some observables will not produce any value if they are not listened to or observed via the subscribe function. They are called cold. Well another definition: An Observable is cold when data is produced inside the Observable.

- HOT (event click) ==> when your observable closes over the producer
Conversely, some are described as hot when values are produced even if the flow has no subscription. This is the case when you create a feed to listen to the user's clicks. Values are produced even if one does not subscribe to this observable (it seems logical). Well another definition: Observable is hot when the data is produced outside the Observable.

### OBSERVABLE

Observables are lazy Push collections of multiple values.
a flux = (i.e: collection asynchrone dont les événements arrivent au cours du temps)


      | Single    | Multiple
Pull	| Function  | Iterator
Push	| Promise   | Observable

Pull | Function | Iterator
Push | Promise | Observable

      | Producer	                              | Consumer
Pull	| Passive: produces data when requested.	| Active: decides when data is requested.
Push	| Active: produces data at its own pace.	| Passive: reacts to received data.

Pull | Passive: produces data when requested. | Active: decides when data is requested.
Push | Active: produces data at its own pace. | Passive: reacts to received data.

- http://reactivex.io/rxjs/manual/overview.html#observable

### OBSERVER

An Observer is a consumer of values delivered by an Observable. (i.e : a listener)

- http://reactivex.io/rxjs/manual/overview.html#observer

### SUBSCRIPTION

- http://reactivex.io/rxjs/manual/overview.html#subscription

A Subscription is an object that represents a disposable resource,
var observable = Rx.Observable.interval(1000);
var subscription = observable.subscribe(x => console.log(x));
subscription.unsubscribe();

### SUBJECT

- http://reactivex.io/rxjs/manual/overview.html#subject

- Subject: Multicasted observable: Subject data can be pushed into a subject and the subject’s subscribers will in turn receive that pushed data. Subjects are useful for multicasting or for when a source of data is not easily transformed into an observable. It’s easy to overuse subjects and oftentimes, as illustrated in this excellent post, subjects can be avoided when an observable source can be created otherwise.
- BehaviorSubject: whenever a new Observer subscribe it will immediatly receive the current value
- ReplaySubject: similar to a BehaviorSubject but also records multiple values from the Observable execution and replays them to new subscribers.
- AsyncSubject: only the last value of the Observable execution is sent to its observers, and only when the execution completes.

### EVENT EMITTER

- EventEmitter is aimed to help communication between component using input and output. It extends RxJS Subject but it's directly provided by the @angular/core package. EventEmitter should not be used for anything else then @Output()s in components and directives. Also EventEmitter gets cleaned up automatically unlike custom Subjects that you need to unsubscribe to in the onDestroy lifecycle hook.


EventEmitter a une méthode subscribe() pour réagir aux événements, et cette méthode reçoit trois paramètres :
• une méthode pour réagir aux événements.
• une méthode pour réagir aux erreurs.  
• une méthode pour réagir à la terminaison.

- Un EventEmitter peut émettre un événement avec la méthode emit().
```
const emitter = new EventEmitter();
const subscription = emitter.subscribe(   value => console.log(value),   error => console.log(error),   () => console.log('done') );
emitter.emit('hello'); emitter.emit('there'); emitter.complete();
subscription.unsubscribe(); // unsubscribe  
// logs "hello", then "there", then "done"
```
### OPERATORS (FRENCH)

• take(n) va piocher les n premiers éléments.  
• map(fn) va appliquer la fonction fn sur chaque événement et retourner le résultat.  
• filter(predicate) laissera passer les seuls événements qui répondent positivement au prédicat.  
• reduce(fn) appliquera la fonction fn à chaque événement pour réduire le flux à une seule valeur unique.  
• merge(s1, s2) fusionnera les deux flux.  
• subscribe(fn) appliquera la fonction fn à chaque événement qu’elle reçoit.
• forEach(fn)

• transformation (delaying, debouncing…)
• combinaison (merge, zip, combineLatest…)  
• filtrage (distinct, filter, last…)  
• mathématique (min, max, average, reduce…)  
• conditions (amb, includes…)

### OPERATORS (ENGLISH)

They are pure functions. The function always returns the same result if the same arguments are passed in. It does not depend on any state, or data, change during a program's execution.

#### TRANSFORMATION

- mapTop: map emissions to constant value.
- map: apply projection with each value from source.
- mergeScan: allow to accumulate value over time via merged observables.
- pluck: map each emitted value from the source Observable to its specified nested property.
- reduce: reduces the values from source observable to a single value that's emitted when the source completes.
- scan: reduce over time. It applies an accumulator function to each of the emitted values. scan emits the result for each value, whilst reduce only emits the final result.
- buffer: collect output values until provided observable emits, emit as array.
- toArray: collects all of the emitted values, and when the source Observable completes, emits them inside an array.
- bufferCount: stores emitted values into an array, until the array reaches the provided length.


- windowWhen: collects values into an Observable (window), which is emitted (and a new one is created) whenever the Observable returned by the provided function emits.
- windowCount: collects values into an Observable (window) that can contain a maximum of n values.
- window: collects emitted values into Observables (called windows).

All *Map operators below consist of two parts — producing a stream of observables through mapping and applying combination logic on the inner streams produced by this higher order observable.

- mergeMap/flatMap: when the inner Observable emits it merges the value(s) of the ‘inner’ Observable into the ‘outer’ Observable.
- switchMap: is like mergeMap but when the 'outer' emits it cancels the previous subscription of the 'inner' and subscribes to the new one.
- concatMap: is like mergeMap but it keep the order in which the Observables are emitting is maintained.
- exhaustMap: is like mergeMap but it ignore new Observables until the current one is still not completed.

All *All operators below corresponds to the combination logic (the second part of the *Map) operators above. Ex: Map operator produces a stream of observables and mergeAll combines values from these observables and so we can easily replace map and mergeAll with the simpler mergeMap.
- concatAll/mergeAll/switchAll

choose the appropriate operator based on the use case:
- mergeMap: for doing things in parallel
- switchMap: for doing cancellation of the previous
- concatMap: for doing things in sequence while waiting for completion
- exhaustMap: for ignoring new Observables while the current one is still ongoing

more infos: - https://ncjamieson.com/avoiding-switchmap-related-bugs/

#### COMBINATION

They enable us to join information from multiple observables. Order, time, and structure of emitted values are the primary differences among them.

- combineLatest: it emits an array of value when the list of observables he got all emitted at least a single value. Then when any inner observable emits a value, it emit the last emitted value from each.
- zip: emits values as an array like combineLatest but it doesn’t start to emit until each inner observable emits at least one value and emits as long as emitted values can be collected from all inner observables.
- forkJoin: emits the last emitted value from each inner observables after they all complete. So it doesn't emit until all the observables are complete, it means it give the values at the end only. If one of the inner observables throws an error, all values are lost except if you catch errors from every single inner observable.
- withLatestFrom: Combines the source Observable with other Observables to create an Observable whose values are calculated from the latest values of each, only when the source emits.
- merge: combine multiple Observables into one. So if one of the observables emit a value the combined one will emit as well.
- concat: subscribe to Observables in order but only when the previous completes, let me know, then move to the next one.
- pairWise: let me know when the Observable emits, but also give me the previous value.
- partition: splits the source Observable into 2, where one has the values that satisfy a predicate and the other with values that doesn't.

#### CREATION

- from: this operator will turn array, promise or iterable into an observable

#### UTILITY

- tap: transparently perform action or side-effects when a stream emits value, or error or complete
- finalize: will be called when observable terminates on complete or error

#### ERROR HANDLING

- catchError: allows to catch and replace (with empty) or to re-throw (with throwError) to subscribers

### MORE OPERATORS

- http://reactivex.io/rxjs/manual/overview.html#operators
- https://www.freecodecamp.org/news/understand-rxjs-operators-by-eating-a-pizza/
- https://stackoverflow.com/questions/41797439/rxjs-observable-combinelatest-vs-observable-forkjoin

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

- observable$ | ngrxPush is a drop-in replacement for the async pipe. Unlike the async pipe the ngrxPush pipe will run change detection for you when the provided observable emits. It also handles errors a little more gracefully than the async pipe.
- *ngrxLet="observable$ as value" is an alternative for *ngIf="observable$ | async as value" that handles falsey values correctly, lets you handle errors, and also runs change detection when the provided observable emits.

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

<h2>Welcome {{user?.name}}</h2> 
 
ngIf 
<div *ngIf="races.length > 0"><h2>Races</h2></div> 
 
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

## ANGULAR DOM

- https://dzone.com/articles/4-common-bugs-in-angular-and-how-to-fix-them

private \_renderer2:Renderer2

avoidAngularBugs(){
this.\_renderer2.setElementProperty(this.\_elementRef,'add-property-here',true);
}

## ANGULAR TESTING

### E2E TESTS

Cypress is very efficient tools for e2e. At the beginning to see how it goes you can start testing the app using real backend request for the GET requests and using mock for the others method (POST,PATCH, DELETE)

### UNIT TESTS

- Jest is faster because it does not run on a real browser instead it uses jsdom. It's not testing the rendering (html/css) but just the dom tree. So there is a potential risk that jsdom differs from your targetted browser.
- Karma is slower because is testing using a real browser so the unit test are certainly working as expected in a real browser.

In the context of a large application with a lot of tests we need a quick tool so Jest seem adapted, the html rendering will then be tested with e2e tests.

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
```

### ADD SCULLY

```
nx add @scullyio/init # todo run inside the project path
ng generate @scullyio/init:blog # create a blog module with scully
```

### START
```
nvm use v12.16.1 # select the good version of node
nx serve my-project-my-app # start the new project
```

```
npm run build # Angular build
npm run scully -- --scanRoutes  # generate static build and force checking new routes
npm run scully serve # serve the scully results
```

### Resources

- https://nx.dev/angular/getting-started/getting-started
- https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console
- https://medium.com/mean-fire/nx-nrwl-ionic-1baf3a43db74
- https://github.com/Bielik20/nx-mean-starter/commit/aacbfa66dbd6465a0e0087fe6dcccd1b805619c3
- https://medium.com/@gregor.woiwode/how-to-setup-jest-in-an-ionic-4-project-ff1e5b72dd79

## MODULES

- App module: it's the root module used to bootstrap the application. There should not be a lot of content because we must encapsulate features into domain-specific modules.
- Core module: app-level components like header, footer, breadcrumb, navigation and singleton services.
- Shared module: shared components, directives, guards, & pipes used throughout the application. It's common to import and export Angular built modules, Common Module or Material module inside your Shared Module if you really need to access them in multiple locations like in Feature modules.
- Feature module: Breaking things up into domain-specific lazy loaded modules will help run in the long term.

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

### Services

- Core services (not lazy) must be in the core folder and can use the providedIn: 'root' syntax from their @Injectable() decorators and then can be used in all kind of modules (lazy or not) without putting them in providers: [ ] of any module...
- Shared services (shared by multiple lazy or core modules) if you put your services inside the provider array of the shared module and then use shared like its intented to use in multiple lazy modules then every lazy loaded module would get its own service instance and not the intented singleton. In this case (only for shared modules) you can also use forRoot/forChild with providers that are going to be imported into both eager and lazy module modules.
- Tree-shaking services are now possible by using the providedIn: 'root', 'platform', 'any', ExampleModule, like that if the service is never injected it will be removed of the bundle at compilation.
- Feature services (lazy module) can be scoped to that feature by removing the providedIn: 'root' from their @Injectable() decorators and adding them to the providers: [ ] array of the lazy feature module instead.
- Shared services between multiple apps or Angular Elements. You can use the providedIn: 'platform' in order to make a service available between multiple apps or Angular Elements.
- Non singleton services. You can use the providedIn: 'any' in order to create isolated (not singleton) services for every child injector.

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