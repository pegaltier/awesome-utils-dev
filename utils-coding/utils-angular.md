<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

  - [Welcome {{user?.name}}](#welcome-username)
  - [FETCH PROMISE OBSERAVABLE RXJS](#fetch-promise-obseravable-rxjs)
  - [TYPESCRIPT](#typescript)
  - [ANGULAR2 CLI](#angular2-cli)
  - [NATIVESCRIPT :](#nativescript-)
  - [IONIC2 https://apps.ionic.io/apps](#ionic2-httpsappsionicioapps)
  - [syntax](#syntax)
- [pour la déclaration de variable](#pour-la-d%c3%a9claration-de-variable)
  - [ANGULAR2 CLI](#angular2-cli)
  - [ADD LIB/CSS/JAVASCRIPT](#add-libcssjavascript)
  - [HTTP POST PARAMS](#http-post-params)
  - [FETCH PROMISE OBSERAVABLE RXJS](#fetch-promise-obseravable-rxjs)
  - [RXJS / OBSERVABLE / REACTIVE (DESIGN PATTERN OBSERVER)](#rxjs--observable--reactive-design-pattern-observer)
    - [HOT VS COLD](#hot-vs-cold)
    - [OBSERVABLE](#observable)
    - [OBSERVER](#observer)
    - [SUBSCRIPTION](#subscription)
    - [SUBJECT](#subject)
    - [OPERATORS METHODS (PURE FUNCTIONS) (FRENCH)](#operators-methods-pure-functions-french)
    - [OPERATORS METHODS (PURE FUNCTIONS) (ENGLISH)](#operators-methods-pure-functions-english)
      - [TRANSFORMATION](#transformation)
      - [COMBINATION](#combination)
      - [CREATION](#creation)
      - [UTILITY](#utility)
      - [ERROR HANDLING](#error-handling)
  - [ANGULAR OBSERVABLE](#angular-observable)
  - [ANGULAR NGRX](#angular-ngrx)
  - [ANGULAR PIPE](#angular-pipe)
  - [DIRECTIVE (une directive n’a pas de vue).](#directive-une-directive-na-pas-de-vue)
  - [LIFECYCLE (CYCLE DE VIE)](#lifecycle-cycle-de-vie)
  - [ANGULAR TESTING](#angular-testing)
    - [TESTING FACTORIZE/IMPORTS](#testing-factorizeimports)
    - [TESTING TRANSLATE](#testing-translate)
    - [TESTINT EXAMPLE](#testint-example)
    - [INTERVIEW](#interview)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

intellij racourci : https://github.com/MrZaYaC/ng2-webstorm-snippets 

chrome : https://hackernoon.com/twelve-fancy-chrome-devtools-tips-dc1e39d10d9d#.imf6priwg 
chrome : https://medium.freecodecamp.com/10-tips-to-maximize-your-javascript-debugging-experience-b69a75859329#.o1mbuv4hn 
CHROME CORS PLUGIN OU http://crossorigin.me/ : Allow-Control-Allow-Origin: * https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi 
CHROME POSTMAN PLUGIN 

## ANGULAR RESUME  
{{}} pour l’interpolation,  
[] pour le binding de propriété (entrée) 
() pour le binding d’événement (sortie) 
# pour la déclaration de variable 
* pour les directives structurelles (for/if...)

utility : http://stackoverflow.com/questions/32790311/how-to-structure-utility-class 

## ANGULAR2 CLI 

https://angularconsole.com/

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
 
 
more CLI : https://www.amadousall.com/my-favourite-angular-cli-commands-and-options/


PROXY BACKEND
https://github.com/angular/angular-cli#proxy-to-backend
 
UPGRADE COMMON
http://stackoverflow.com/questions/186737/whats-the-fastest-way-to-delete-a-large-folder-in-windows
 
UPGRADE CLI VERSION
https://yakovfain.com/2017/02/05/upgrading-to-the-latest-angular-cli
https://github.com/angular/angular-cli/wiki/Upgrading-from-Beta.10-to-Beta.14

npm uninstall -g angular-cli
npm cache clean
npm install -g @angular/cli


UPGRADE NG VERSION
https://update.angular.io
ng update

https://github.com/angular/angular-cli#updating-angular-cli <<< OFFICIAL
https://blog.angular.io/version-6-of-angular-now-available-cc56b0efa7a4 <<< OFFICIAL

https://www.techiediaries.com/updating-angular-cli-projects/
https://appdividend.com/2018/10/20/how-to-update-angular-cli-to-version-7/
https://blog.angularindepth.com/angular-5-or-angular-6-yes-please-d71b08b5e59b
https://stackoverflow.com/questions/43931986/how-to-upgrade-angular-cli-to-the-latest-version

https://medium.com/@timdeschryver/ng-update-the-setup-2d2c54d05a0e (update libs)

http://angularjs.blogspot.fr/2017/03/angular-400-now-available.html
http://stackoverflow.com/questions/36597780/how-do-i-correctly-upgrade-angular-2-npm-to-the-latest-version
http://stackoverflow.com/questions/41274341/upgrading-from-angular-2-2-3-to-2-4-0

Install
sudo npm install -g npm-check-updates

Usage
rmdir /s/q node_modules
ncu for display
ncu -u for re-writing your package.json
ncu -a for upgrade all

npm install

BUILD PROD
http://stackoverflow.com/questions/37631098/how-to-bundle-and-angular-2-app-for-production
ng build --prod	 
ng build --prod --aot
ng build --prod --aot --bh /enterprise/webapp/ --build-optimizer		OK
ng build --prod --aot --base-href '/enterprise/'
ng build --target=production --base-href '/enterprise/'

## ADD LIB/CSS/JAVASCRIPT

ajouter un fichier css ou lib js : 
- installer via npm --save 
- ajouter dans angular-cli.json > balises styles + scripts 


## HTTP POST PARAMS

https://forum.ionicframework.com/t/http-post-not-sending-data/47452/6 
http://michael.laffargue.fr/blog/2016/04/17/angularjs2-send-http-post-request-with-parameters-to-php/ 
https://auth0.com/blog/angular-2-series-part-3-using-http/ 
https://www.barbarianmeetscoding.com/blog/2016/04/02/getting-started-with-angular-2-step-by-step-6-consuming-real-data-with-http/ 
 
## FETCH PROMISE OBSERAVABLE RXJS 

http://output.jsbin.com/juwiva/29 
https://angular.io/docs/ts/latest/cookbook/component-communication.html#!#bidirectional-service 


## RXJS / OBSERVABLE / REACTIVE (DESIGN PATTERN OBSERVER)

http://rxmarbles.com/ 
https://xgrommx.github.io/rx-book/index.html
http://reactivex.io/rxjs/manual/overview.html
https://www.technologies-ebusiness.com/enjeux-et-tendances/rxjs-pour-les-humains

Observable: represents the idea of an invokable collection of future values or events.
Observer: is a collection of callbacks that knows how to listen to values delivered by the Observable.
Subscription: represents the execution of an Observable, is primarily useful for cancelling the execution.
Operators: are pure functions that enable a functional programming style of dealing with collections with operations like map, filter, concat, flatMap, etc.
Subject: is the equivalent to an EventEmitter, and the only way of multicasting a value or event to multiple Observers.
Schedulers: are centralized dispatchers to control concurrency, allowing us to coordinate when computation happens on e.g. setTimeout or requestAnimationFrame or others.

### HOT VS COLD

COLD (i.e http obserable)
Some observables will not produce any value if they are not listened to or observed via the subscribe function. They are called cold. 

HOT (event click)
Conversely, some are described as hot when values are produced even if the flow has no subscription. This is the case when you create a feed to listen to the user's clicks. Values are produced even if one does not subscribe to this observable (it seems logical).

### OBSERVABLE
http://reactivex.io/rxjs/manual/overview.html#observable

Observables are lazy Push collections of multiple values.
a flux = (i.e: collection asynchrone dont les événements arrivent au cours du temps) 


      | Single    | Multiple
Pull	| Function  | Iterator
Push	| Promise   | Observable

      | Producer	                              | Consumer
Pull	| Passive: produces data when requested.	| Active: decides when data is requested.
Push	| Active: produces data at its own pace.	| Passive: reacts to received data.

### OBSERVER 
http://reactivex.io/rxjs/manual/overview.html#observer

An Observer is a consumer of values delivered by an Observable. (i.e : a listener)

### SUBSCRIPTION
http://reactivex.io/rxjs/manual/overview.html#subscription

A Subscription is an object that represents a disposable resource,
var observable = Rx.Observable.interval(1000);
var subscription = observable.subscribe(x => console.log(x));
subscription.unsubscribe();

### SUBJECT
http://reactivex.io/rxjs/manual/overview.html#subject

Subject: Multicasted observable
BehaviorSubject: whenever a new Observer subscribe it will immediatly receive the current value
ReplaySubject: similar to a BehaviorSubject but also records multiple values from the Observable execution and replays them to new subscribers.
AsyncSubject: only the last value of the Observable execution is sent to its observers, and only when the execution completes.

### OPERATORS METHODS (PURE FUNCTIONS) (FRENCH)
http://reactivex.io/rxjs/manual/overview.html#operators

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
 

### OPERATORS METHODS (PURE FUNCTIONS) (ENGLISH)

#### TRANSFORMATION
mergeMap/flatMap when the inner Observable emits it merges the value(s) of the ‘inner’ Observable into the ‘outer’ Observable.
switchMap is like mergeMap but when the 'outer' emits it cancels the previous subscription of the 'inner' and subscribes to the new one.
concatMap is like mergeMap but it keep the order in which the Observables are emitting is maintained. 
exhaustMap is like mergeMap but it ignore new Observables until the current one is still not completed.

choose the appropriate operator based on the use case:
concatMap: for doing things in sequence while waiting for completion
mergeMap: for doing things in parallel
switchMap: in case we need cancellation logic
exhaustMap: for ignoring new Observables while the current one is still ongoing

#### COMBINATION
combineLatest: the Observable will emit an array of value when the list of observables he got all emitted at least a single value
forkJoin: don’t let me know until all the Observables are complete, then give me all the values at once
merge: combine multiple Observables into one. So if one of the observables emit a value the combined one will emit as well
concat: subscribe to Observables in order but only when the previous completes, let me know, then move to the next one. 
pairWise: let me know when the Observable emits, but also give me the previous value

#### CREATION
from: this operator will turn array, promise or iterable into an observable

#### UTILITY
tap: transparently perform action or side-effects when a stream emits value, or error or complete
finalize: will be called when observable terminates on complete or error

#### ERROR HANDLING
catchError: allows to catch and replace (with empty) or to re-throw (with throwError) to subscribers


## ANGULAR OBSERVABLE

EventEmitter is aimed to help communication between component using input and output. It extends RxJS Subject but it's directly provided by the @angular/core package. EventEmitter a une méthode subscribe() pour réagir aux événements, et cette méthode reçoit trois paramètres : 
• une méthode pour réagir aux événements. 
• une méthode pour réagir aux erreurs.  
• une méthode pour réagir à la terminaison. 
Un EventEmitter peut émettre un événement avec la méthode emit(). 
 
const emitter = new EventEmitter(); 
const subscription = emitter.subscribe(   value => console.log(value),   error => console.log(error),   () => console.log('done') ); 
emitter.emit('hello'); emitter.emit('there'); emitter.complete(); 
subscription.unsubscribe(); // unsubscribe  
// logs "hello", then "there", then "done" 

## ANGULAR NGRX

store.dispatch = trigger an action
store.select = get current state
dispatch action -> effect -> success/failure action -> reducer pattern.
The root of the problem is that once you fire an Action you’re completely disconnected from the lifecycle of that action (

1. Effects
Ngrx/effects is middleware for handling side effects in ngrx/store. It listens for dispatched actions in an observable stream, performs side effects, and returns new actions either immediately or asynchronously. The returned actions get passed along to the reducer.


## ANGULAR PIPE

{{ asyncGreeting | async } 
 
{{ birthday | date:'shortTime' }} 		<!-- will display '3:30 PM' -- 
{{ article.date() | date:'medium'}}		 
{{ birthday | date:'longDate' }}		<!-- will display 'July 16, 1986' --> 
{{ birthday | date:'dd/MM/yyyy' }}		 
 
{{ ponies | json }} 
{{ ponies | slice:0:2 | json } 
{{ 'Ninja Squad' | uppercase }} 
{{ 'Ninja Squad' | lowercase }}	 
{{ 12345 | number:'.2' }			<!-- will display '12,345.00' --> 
{{ 12345.13 | number:'.1-1' }}		<!-- will display '12,345.1' --> 
{{ 0.8 | percent }} 				<!-- will display '80%' --> 
{{ 0.8 | percent:'.3' }} 			<!-- will display '80.000%' --> 
{{ 10.6 | currency:'EUR' }			<!-- will display 'EUR10.60' -->	 
 
<div *ngFor="let pony of ponies | slice:0:2">{{pony.name}}</div> 
<div loggable [logText]="expression | uppercase">Hello</div> 

 ## DIRECTIVES

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
 
## DIRECTIVE  (une directive n’a pas de vue). 
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
 
 
## LIFECYCLE (CYCLE DE VIE)

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

https://dzone.com/articles/4-common-bugs-in-angular-and-how-to-fix-them

private _renderer2:Renderer2

avoidAngularBugs(){
     this._renderer2.setElementProperty(this._elementRef,'add-property-here',true);
   }
 
 
## ANGULAR TESTING 
 
https://angular.io/guide/testing
http://blog.soat.fr/2018/02/tests-unitaires-avec-angular-partie-1/
http://blog.soat.fr/2018/02/tests-unitaires-avec-angular-partie-2/
https://codecraft.tv/courses/angular/unit-testing/angular-test-bed/
https://stackoverflow.com/questions/40126729/angular-2-testing-async-function-call-when-to-use
https://stackoverflow.com/questions/40432734/angular-2-jasmine-error-please-call-testbed-compilecomponents-before-your

### TESTING FACTORIZE/IMPORTS

https://stackoverflow.com/questions/48789289/how-to-reuse-all-imports-in-angular-test-files


### TESTING TRANSLATE

https://github.com/ngx-translate/core/issues/636
https://github.com/ngx-translate/example/blob/master/src/app/app.component.spec.ts

### TESTINT EXAMPLE


cas sans asynchrone (promise/observable) 
 
import { TestBed } from '@angular/core/testing'; 
describe('RaceService', () => {    
	let service: RaceService; 
  	beforeEach(() => TestBed.configureTestingModule({     providers: [RaceService]   })); 
  	beforeEach(() => service = TestBed.get(RaceService)); 
  	it('should return races when list() is called', () => {       
		expect(service.list().length).toBe(2);    
	});  
}); 

 
cas avec asynchorne (promise/observable) 
 
import { async, TestBed } from '@angular/core/testing'; 
describe('RaceService', () => {   let service: RaceService; 
  beforeEach(() => TestBed.configureTestingModule({     providers: [RaceService]   })); 
  beforeEach(() => service = TestBed.get(RaceService)); 
  it('should return a promise of 2 races', async(() => { 
     service.list().then(races => { 
       expect(races.length).toBe(2);      
	 });    
 }));  
}); 
  
cas espionner appel et remplacer par factice 
 
import { TestBed } from '@angular/core/testing'; 
describe('RaceService', () => { 
  const localStorage = jasmine.createSpyObj('LocalStorageService', ['get']); 
  beforeEach(() => TestBed.configureTestingModule({     providers: [       { provide: LocalStorageService, useValue: localStorage },       RaceService     ]   })); 
  it('should return 2 races from localStorage', () => {      
	localStorage.get.and.returnValue([{ name: 'Lyon' }, { name: 'London' }]); 
    const service = TestBed.get(RaceService);      
	const races = service.list(); 
    expect(races.length).toBe(2);      
	expect(localStorage.get).toHaveBeenCalledWith('races');    
  });  
}); 
 
test end to end (voir ninja angular page 157) 

### INTERVIEW
- did you already develop a simple static website using html and javascript?
- how many different versions of angular did you use?
- can you describe in one simple sentence what is reactive programming (rxjs)?
- can you describe in one simple sentence what is redux (ngrx)?
- what did you like and what did you dislike on Angular?
- which third party library did you use and like?
