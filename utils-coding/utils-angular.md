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
- [pour la déclaration de variable](#pour-la-d%C3%A9claration-de-variable)

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

## HTTP POST PARAMS : 
https://forum.ionicframework.com/t/http-post-not-sending-data/47452/6 
http://michael.laffargue.fr/blog/2016/04/17/angularjs2-send-http-post-request-with-parameters-to-php/ 
https://auth0.com/blog/angular-2-series-part-3-using-http/ 
https://www.barbarianmeetscoding.com/blog/2016/04/02/getting-started-with-angular-2-step-by-step-6-consuming-real-data-with-http/ 
 
## FETCH PROMISE OBSERAVABLE RXJS 
http://output.jsbin.com/juwiva/29 
https://angular.io/docs/ts/latest/cookbook/component-communication.html#!#bidirectional-service 
 

## TYPESCRIPT 
 
npm install -g typescript 
tsc --init --target es5 --sourceMap --experimentalDecorators --emitDecoratorMetadata 
tsc --watch 
npm init 
 

########################################################################################################################
########################################################################################################################
 
## ANGULAR2 CLI 
ng g component pony test-list
ng g class article 
ng g service article 
ng g pipe my-new-pipe
ng g directive my-directive

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


## RXJS / OBSERVABLE / REACTIVE (design pattern Observer)

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

HOT AND COLD
Some observables will not produce any value if they are not listened to or observed via the subscribe function. They are called cold.

Conversely, some are described as hot when values are produced even if the flow has no subscription. This is the case when you create a feed to listen to the user's clicks. Values are produced even if one does not subscribe to this observable (it seems logical).

le listener = un observer 
le flux = un observable (collection asynchrone dont les événements arrivent au cours du temps) 

### OBSERVABLE
http://reactivex.io/rxjs/manual/overview.html#observable

Observables are lazy Push collections of multiple values.

      | Single    | Multiple
Pull	| Function  | Iterator
Push	| Promise   | Observable

      | Producer	                              | Consumer
Pull	| Passive: produces data when requested.	| Active: decides when data is requested.
Push	| Active: produces data at its own pace.	| Passive: reacts to received data.


### OBSERVER 
http://reactivex.io/rxjs/manual/overview.html#observer

An Observer is a consumer of values delivered by an Observable.

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


### OPERATORS METHODS (PURE FUNCTIONS)
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
 
 ## ANGULAR OBSERVABLE

EventEmitter (Angular2 : adapter Observable)  EventEmitter a une méthode subscribe() pour réagir aux événements, et cette méthode reçoit trois paramètres : 
• une méthode pour réagir aux événements. 
• une méthode pour réagir aux erreurs.  
• une méthode pour réagir à la terminaison. 
Un EventEmitter peut émettre un événement avec la méthode emit(). 
 
const emitter = new EventEmitter(); 
const subscription = emitter.subscribe(   value => console.log(value),   error => console.log(error),   () => console.log('done') ); 
emitter.emit('hello'); emitter.emit('there'); emitter.complete(); 
subscription.unsubscribe(); // unsubscribe  
// logs "hello", then "there", then "done" 

 
## PIPE

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


 ## ANGULAR DOM

https://dzone.com/articles/4-common-bugs-in-angular-and-how-to-fix-them

private _renderer2:Renderer2

avoidAngularBugs(){
     this._renderer2.setElementProperty(this._elementRef,'add-property-here',true);
   }
 
## ANGULAR TESTING 
 
 https://angular.io/guide/testing

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