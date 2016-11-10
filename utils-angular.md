intellij racourci : https://github.com/MrZaYaC/ng2-webstorm-snippets

chrome : https://hackernoon.com/twelve-fancy-chrome-devtools-tips-dc1e39d10d9d#.imf6priwg
chrome : https://medium.freecodecamp.com/10-tips-to-maximize-your-javascript-debugging-experience-b69a75859329#.o1mbuv4hn
CHROME CORS PLUGIN : Allow-Control-Allow-Origin: * https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi
CHROME POSTMAN PLUGIN


HTTP POST PARAMS :
https://forum.ionicframework.com/t/http-post-not-sending-data/47452/6
http://michael.laffargue.fr/blog/2016/04/17/angularjs2-send-http-post-request-with-parameters-to-php/
https://auth0.com/blog/angular-2-series-part-3-using-http/
https://www.barbarianmeetscoding.com/blog/2016/04/02/getting-started-with-angular-2-step-by-step-6-consuming-real-data-with-http/


## ANGULAR2 CLI
ng generate component pony
ng serve
ng github-pages:deploy


## NATIVESCRIPT :
set ANDROID_HOME=C:\Android\sdk
set PATH=%PATH%;%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools

http://docs.nativescript.org/angular/start/quick-setup
https://docs.nativescript.org/start/ns-setup-win
http://docs.nativescript.org/angular/tutorial/ng-chapter-1
http://docs.nativescript.org/angular/tutorial/ng-chapter-2
https://docs.nativescript.org/angular/code-samples/overview.html (component)
tns run android
tns livesync android --watch

native + webapp :
https://github.com/Appverse/PANG-Polymorphic-ANGular-seed
http://developer.telerik.com/featured/building-angular-2-web-native-apps-single-codebase/



## IONIC2 https://apps.ionic.io/apps

http://ionicframework.com/docs/v2/getting-started/installation/

push : https://docs.ionic.io/services/push/
push : https://medium.com/@ankushaggarwal/push-notifications-in-ionic-2-658461108c59#.l7dh5evsv
push : http://nishanthkabra.com/ionic2push.html
theme : http://ionicframework.com/docs/v2/theming/overriding-ionic-variables/
component : http://ionicframework.com/docs/v2/components/#overview

init project : 

ionic start cutePuppyPics --v2					> start new project
cd cutePuppyPics											
ionic serve										> test web project
cordova platform add android --save				> add android platform to project
ionic platform android							> add android platform to project
ionic run android  								> run project on android device



## typescript

npm install -g typescript
tsc --init --target es5 --sourceMap --experimentalDecorators --emitDecoratorMetadata
tsc --watch
npm init

## syntax
typescript types		https://www.typescriptlang.org/docs/handbook/basic-types.html
typescript tuto 		http://www.typescriptlang.org/docs/tutorial.html interface vs classe
typescript interface 	https://www.typescriptlang.org/docs/handbook/interfaces.html
typescript classe 		http://www.typescriptlang.org/docs/handbook/classes.html
typescript .d.t			https://github.com/DefinitelyTyped/DefinitelyTyped 		/// <reference path="angular.d.ts" />
typescript arrays		http://www.codecompiled.com/arrays-in-typescript/

typescript interface 	interface HasScore {   score: number; }     function addPointsToScore(player: HasScore, points: number): void {       player.score += points;     }
typescript interface	interface CanRun {   run(meters: number): void; }     function startRunning(pony: CanRun): void {       pony.run(10);     }
typescript classe		class NamedPony {   constructor(public name: string, private speed: number) {   }

typescript optionnal 	public votes?: number; 		+ this.votes = votes || 0;
typescript types 		const poneyNumber: number = 0; 	const poneyName: string = 'Rainbow Dash'; 
						const pony: Pony = new Pony(); const ponies: Array<Pony> = [new Pony()];
typescript type retour  function startRace(race: Race): Race { 
typescript enum			enum RaceStatus {Ready, Started, Done}     const race = new Race();     race.status = RaceStatus.Ready;
		
es6 features			http://es6-features.org/#Constants		
es6 collections 		const users = new Map(); OU const users = new Set();
es6 iterer				for (let user of users) {   console.log(user.name); }
es6 template 		 	const fullname = `Miss ${firstname} ${lastname}`;



classe ou interface -> classe si besoin de function sur le pojo ou bien interface suffit

pipe
{{ article.date() | date:'medium'}}

ngTemplate 
<h2>Welcome {{user?.name}}</h2>

ngIf
<div *ngIf="races.length > 0"><h2>Races</h2></div>

ngFor
<ul> <li *ngFor="let race of races; let i=index">{{i}} - {{race.name}}</li> </ul>

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


résumé 
{{}} pour l’interpolation, 
[] pour le binding de propriété
() pour le binding d’événement
# pour la déclaration de variable
* pour les directives structurelles



## ajouter un fichier css ou lib js :
- installer via npm --save
- ajouter dans angular-cli.json > balises styles + scripts

