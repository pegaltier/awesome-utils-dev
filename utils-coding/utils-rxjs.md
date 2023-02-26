# REACTIVE / RXJS

## INTRO

- Reactive programming is an asynchronous programming paradigm concerned with data streams and the propagation of change - Wikipedia
- RxJS is a library for reactive programming using observables that makes it easier to compose asynchronous or callback-based code - RxJS docs

## DEFINITIONS

- Observable: is the stream of data. It represents the idea of an invokable collection of future values or events.
- Observer: is a collection of up to 3 callbacks (next, error, complete) that knows how to listen to values delivered by the Observable.
- Subscription: represents the execution of an Observable, is primarily useful for starting the execution in case of a cold observable and for cancelling the execution in case of hot observable.
- Operators: are pure functions that enable a functional programming style of dealing with collections with operations like map, filter, concat, flatMap, etc.
- Subject: is the equivalent to an EventEmitter, and the only way of multicasting a value or event to multiple Observers.
- Schedulers: are centralized dispatchers to control concurrency, allowing us to coordinate when computation happens on e.g. setTimeout or requestAnimationFrame or others.

- http://rxmarbles.com/
- https://xgrommx.github.io/rx-book/index.html
- http://reactivex.io/rxjs/manual/overview.html
- https://github.com/sindresorhus/awesome-observables
- https://github.com/this-is-learning/rxjs-fundamentals-course
- https://github.com/PacktPublishing/Reactive-Patterns-with-RxJS-for-Angular
- https://www.technologies-ebusiness.com/enjeux-et-tendances/rxjs-pour-les-humains

## HOT VS COLD

- COLD (i.e interval, http requests) ==> are unicast as each subscriber gets data from different producer. It's cold when your observable creates the producer (data is produced inside the Observable.) Some observables will not produce any value if they are not listened to or observed via the subscribe function. They are called cold. Well another definition: An Observable is cold when 

- HOT (fromEvent click, ngrx selectors) ==> are multicast as all subscribers get data from the same producer. It's hot when your observable closes over the producer (data is produced outside the Observable.) Conversely, some are described as hot when values are produced even if the flow has no subscription. This is the case when you create a feed to listen to the user's clicks. Values are produced even if one does not subscribe to this observable (it seems logical).

## OBSERVABLE

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

• take(n) va piocher les n premiers éléments. take(1) est presque similaire a first() L'opérateur first() prend une fonction de prédicat facultative et émet une notification d'erreur lorsqu'aucune valeur ne correspond lors du complete.
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

- first order mapping transforms each emitted value and emits the result (ex: map, pluck...)
- higher-order mapping transforms each emitted value to an observable (ex: mergeMap, switchMap...)

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

All *All operators below corresponds to the combination logic (the second part of the *Map) operators above. Ex: Map operator produces a stream of observables and mergeAll combines values from these observables and so we can easily replace map and mergeAll with the simpler mergeMap. Indeed concatMap uses concatAll under the hood.
- concatAll/mergeAll/switchAll

- PROCESS:
- map each value from the source/outter obs to a new inner obs
- automatically subscribe and unsubscribe from the inner obs
- emits the resulting values to the output observable

choose the appropriate operator based on the use case:
- concatMap is ideal to process items in sequence while waiting for completion and when the order is important
- mergeMap is ideal to process items in parallel and when the order is not important
- switchMap is ideal to cancel the previous task and process only the most recent
- exhaustMap is ideal for ignoring new observables while the current one is still ongoing

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

#### MULTICASTING

helpful to cache cold observables (transform to hot) such as http requests.

- share: share source among multiple subscribers.
- shareReplay: Share source and replay specified number of emissions on subscription.

Both shareReplay and publishReplay (+ calling connect on it) will make the observable behind it hot.
- shareReplay: won't stop emitting until it's completed, no matter if there are no subscriptions anymore or not.
- publishReplay: will stop after the last subscriber unsubscribes if used together with refCount

#### CREATION

- from: this operator will turn array, promise or iterable into an observable

#### UTILITY

- tap: transparently perform action or side-effects when a stream emits value, or error or complete
- finalize: will be called when observable terminates on complete or error

#### ERROR HANDLING

- catchError: allows to catch and replace (with empty) or to re-throw (with throwError) to subscribers

### MORE OPERATORS

- http://reactivex.io/rxjs/manual/overview.html#operators
- https://ncjamieson.com/avoiding-switchmap-related-bugs/
- https://medium.com/javascript-everyday/behaviorsubject-vs-replaysubject-1-beware-of-edge-cases-b361153d9ccf
- https://www.freecodecamp.org/news/understand-rxjs-operators-by-eating-a-pizza/
- https://itnext.io/the-magic-of-rxjs-sharing-operators-and-their-differences-3a03d699d255
- https://scotch.io/tutorials/rxjs-operators-for-dummies-forkjoin-zip-combinelatest-withlatestfrom
- https://stackoverflow.com/questions/41797439/rxjs-observable-combinelatest-vs-observable-forkjoin

## TEST

- https://twitter.com/bartosz_wasilew/status/1625762614986022914


```javascript
// Done function
it('done func', (done: DoneCallback) ⇒ {
      userListComponent.users.subscribe((expectedUsers: User[]) ==> {
            expect(expectedUsers).toStrictEqual(usersMock);
            done();
      });
});

// Fake Async & Tick
it('Fake async & tick', fakeAsync(() ⇒ {
      let expectedUsers;
      userListComponent.users.subscribe((users: User[]) ⇒
            setTimeout(() = {
            expectedUsers = users;
            }, 2000);
      );
      tick (2100);
      expect (expectedUsers).toStrictEqual(usersMock);
}));

// First Value From
it('first value from', async () ⇒ {
      const expectedUsers: User[] = await firstValueFrom(userListComponent.users);
      expect(expectedUsers).toStrictEqual(usersMock);
});

// Test Scheduler (marbles)
it('marbles', () ⇒ {
      const testScheduler = new TestScheduler((actual, expected) ⇒ {
            expect(actual).toStrictEqual(expected);
      });
      testScheduler.run(({ expectObservable }) ⇒ { 
            expectObservable(userListComponent.users).toBe('(a|)', {
                  a: usersMock,
            });
      });
})
```