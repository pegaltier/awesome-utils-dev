## CLASS OR INTERFACE

classe si besoin de creer des function sur le pojo ou bien interface suffit 
si classe alors utiliser mecanisme fromJSON (ng-book2 screencast final-app voir code source) 

## CLASSES INHERIT
https://www.typescriptlang.org/docs/handbook/classes.html

## GENERIC SERVICE

https://stackoverflow.com/questions/44129817/typescript-generic-service

https://stackoverflow.com/questions/28273714/typescript-generics-extending-class-and-interface
https://codereview.stackexchange.com/questions/164995/best-solution-for-returning-results-from-a-generic-typescript-service

## SYNTAX

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


 

 