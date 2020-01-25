
## START 
 
npm install -g typescript 
tsc --init --target es5 --sourceMap --experimentalDecorators --emitDecoratorMetadata 
tsc --watch 
npm init 
 
 ## UTILS
- https://github.com/palmerhq/tsdx
- https://github.com/runem/ts-simple-type

## LIB
- https://github.com/typestack/class-validator

## TYPESCRIPT GUIDES
- https://github.com/intocare/style-guide
- https://github.com/microsoft/TypeScript-Handbook

## TYPESCRIPT TIPS
- https://twitter.com/mgechev/status/1219884973328621570/photo/1
- https://twitter.com/sulco/status/1219982511180263424/photo/1
- https://twitter.com/mgechev/status/1220246042807078912/photo/1

## ES2015/ES6 + TYPESCRIPT COURSES 
- https://hughfdjackson.com/javascript/arrow-function-semantics/  
- http://babeljs.io/docs/learn-es2015/  
- http://ponyfoo.com/  
- http://www.typescriptlang.org/Playground  
- http://tarh.developpez.com/articles/typescript/pourquoi-utiliser-typescript/  
- http://kangax.github.io/compat-table/es6/  
- http://code.tutsplus.com/articles/33-developers-you-must-subscribe-to-as-a-javascript-junkie--net-18151  
- https://github.com/lukehoban/es6features  
- http://www.2ality.com/2016/05/six-nifty-es6-tricks.html
- https://www.sitepen.com/blog/2016/09/01/typescript-2-0-awesomeness/
- https://www.bennadel.com/blog/3217-defining-function-and-callback-interfaces-in-typescript.htm

## CLASS OR INTERFACE
classe si besoin de creer des function sur le pojo ou bien interface suffit 
si classe alors utiliser mecanisme fromJSON (ng-book2 screencast final-app voir code source) 

## CLASSES INHERIT
- https://www.typescriptlang.org/docs/handbook/classes.html
- https://css-tricks.com/creating-reusable-base-classes-in-typescript-with-a-real-life-example

## GENERIC SERVICE
- https://stackoverflow.com/questions/44129817/typescript-generic-service
- https://stackoverflow.com/questions/28273714/typescript-generics-extending-class-and-interface
- https://codereview.stackexchange.com/questions/164995/best-solution-for-returning-results-from-a-generic-typescript-service

## DECORATORS
- https://medium.com/@rossbulat/get-started-with-typescript-decorators-cf3924c37f04

## SYNTAX
typescript types		- https://www.typescriptlang.org/docs/handbook/basic-types.html 
typescript tuto 		- http://www.typescriptlang.org/docs/tutorial.html interface vs classe 
typescript interface 	- https://www.typescriptlang.org/docs/handbook/interfaces.html 
typescript classe 		- http://www.typescriptlang.org/docs/handbook/classes.html 
typescript .d.t			- https://github.com/DefinitelyTyped/DefinitelyTyped 		/// <reference path="angular.d.ts" /> 
typescript arrays		- http://www.codecompiled.com/arrays-in-typescript/ 
 
typescript interface 	interface HasScore {   score: number; }     function addPointsToScore(player: HasScore, points: number): void {       player.score += points;     } 
typescript interface	interface CanRun {   run(meters: number): void; }     function startRunning(pony: CanRun): void {       pony.run(10);     } 
typescript classe		class NamedPony {   constructor(public name: string, private speed: number) {   } 
 
typescript optionnal 	public votes?: number; 		+ this.votes = votes || 0; 
typescript types 		const poneyNumber: number = 0; 	const poneyName: string = 'Rainbow Dash';  
						const pony: Pony = new Pony(); const ponies: Array<Pony> = [new Pony()]; 
typescript type retour  function startRace(race: Race): Race {  
typescript enum			enum RaceStatus {Ready, Started, Done}     const race = new Race();     race.status = RaceStatus.Ready; 
		 
es6 features			- http://es6-features.org/#Constants		 
es6 collections 		const users = new Map(); OU const users = new Set(); 
es6 iterer				for (let user of users) {   console.log(user.name); } 
es6 template 		 	const fullname = `Miss ${firstname} ${lastname}`; 


 

 