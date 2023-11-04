# Javascript

## SHORTHANDS
- https://morioh.com/p/05414714e685?f=5c21fb01c16e2556b555ab32

## CONTEXT / HOISTING
- https://tylermcginnis.com/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript/
- https://www.w3schools.com/js/js_hoisting.asp

Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function). Indeed all declarations, both functions and variables, are hoisted to the top of the containing scope, before any part of your code is executed.
- Functions are hoisted first, and then variables.
- Function declarations have priority over variable declarations, but not over variable assignments.

### SCOPE

Scope determines the accessibility (visibility) of variables.
- Local scope: Variables declared within a JavaScript function, become LOCAL to the function. They can only be accessed from within the function. They are deleted when the function is completed. Variables declared with var and let are quite similar when declared inside a function. They will both have Function Scope.
- Global scope: A variable declared outside a function, becomes GLOBAL. A global variable has global scope: All scripts and functions on a web page can access it.  Variables declared with var and let are quite similar when declared outside a block. They will both have Global Scope. In a web browser, global variables are deleted when you close the browser window (or tab).
- Block scope: Variables declared with let inside a block {} cannot be accessed from outside the block.

With JavaScript, the global scope is the complete JavaScript environment.
In HTML, the global scope is the window object. All global variables belong to the window object. 


## THIS / FUNCTIONS BORROWING METHODS

- In other object-oriented programming languages, the this keyword always refers to the current instance of the class. 
- Whereas in JavaScript, the value of this depends on how a function is invoked (used or called). In JavaScript, the this keyword refers to different objects depending on how it is used... https://www.w3schools.com/js/js_this.asp

In JavaScript, you can use call(), apply(), and bind() methods to couple a function with an object. This way you can call the function on the object as if it belonged to it

- The call() allows for a function/method belonging to one object to be assigned and called for a different object.
- The apply() is very similar to call() but the apply method takes arguments as an array instead of separately.
- The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called. it is not necessary to pass the arguments at the time of `bind`. we can pass it later at the time of invocation.

- https://blog.bitsrc.io/understanding-call-bind-and-apply-methods-in-javascript-33dbf3217be

### FUNCTION

- https://dev.to/sumusiriwardana/javascript-functions-explain-like-i-m-five-5009

A function can be created in 4 ways:

-  function as a declaration
-  function as an expression
-  arrow function

### PURE FUNCTIONS

- https://blog.bitsrc.io/understanding-javascript-mutation-and-pure-functions-7231cc2180d3
- https://hackernoon.com/javascript-and-functional-programming-pt-3-pure-functions-d572bb52e21c

### IMMUTABILITY

- https://web.dev/structured-clone/
- https://developer.mozilla.org/en-US/docs/Web/API/structuredClone
- https://ultimatecourses.com/blog/all-about-immutable-arrays-and-objects-in-javascript
- https://dev.to/glebec/four-ways-to-immutability-in-javascript-3b3l
- https://www.samanthaming.com/tidbits/50-how-to-deep-clone-an-array/

### DESTRUCTURING

- https://codeburst.io/es6-destructuring-the-complete-guide-7f842d08b98f

### ALGORITHM

- https://www.oreilly.com/library/view/high-performance-javascript/9781449382308/ch04.html

### EVENT LOOP

Being single-threaded, JS uses the concept of Event Loop to create the idea of running multiple tasks asynchronously. JS code only runs in one thread while JS uses Event Loop to run code asynchronously. The JS Engine is composed of a Call Stack, Heap and a Task Queue.
- There is a microtask and a macrotask queue. A promise gets added to the microtask queue and a setTimeout to the macrotask queue.
- When a microtask is finished, the rest of the microtasks queue gets executed until the microtask queue is empty. Then same for macrotasks.
- See also SCHEDULING in rxjs that uses this concept to execute the differents functions and operators.
- https://blog.bitsrc.io/microtask-and-macrotask-a-hands-on-approach-5d77050e2168
- https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

### ARRAYS

- use forEach/map/filter/reduce FIRST, only when there's an EXCEPTION do use a for loop. Exceptions include break (can't even remember the last time I used one) or async/await.
- the best way to turn one Array into another is by using map. Array.map walks through each element in an Array, does something to that element, and gives you a new Array back containing the resulting elements.
On the contrary forEach return void so if you modify the current element is doing a mutation on the array, it mutate the original array directly and thus is only the good approach for doing side effect such as writing the dom or doing an api call. You should not use it when you want to generate or build a value to keep using in your JavaScript code.

- https://dev.to/ibrahima92/15-must-know-javascript-array-methods-in-2020-1kd8
- https://medium.com/hackernoon/3-javascript-performance-mistakes-you-should-stop-doing-ebf84b9de951
- https://medium.com/dailyjs/passing-arrays-as-function-arguments-c1f3644ecb9c
- https://vgpena.github.io/js-arrays/#


### IMPURE (avoid)

```
fill
pop
push
reverse
shift
sort
splice
unshift
reverse
```

### OBJECTS

An object can be created in 4 ways

- using object literals => let newObject = {};
- using new or constructor => let newObject = new Object();
- using Object.create() => let newObject = Object.create( Object.prototype );
- using a class => let newObject = new User();

#### OBJECT LITERALS

In plain English, an object literal is a comma-separated list of name-value pairs inside of curly braces.
Those values can be properties and functions. Here’s a snippet of an object literal with one property and one function.

- https://medium.com/better-programming/object-literal-in-javascript-d3e0e7d58f3b
- https://ultimatecourses.com/blog/deprecating-the-switch-statement-for-object-literals

```javascript
let greeting = {
    fullname: "Michael Jackson",
    greet: (message, name) => {
        console.log(message + " " + name + "!!");
    }
};
```

### ADVANCED

- IIFE
- Scope
- Hoisting 
- Callstack
- Currying
- Callbacks
- Promises
- Closures
- Iterators
- Generators
- Async await
- Type coercion
- DOM Manipulation
- Prototype inheritance 
- Understanding "this" keyword
- apply(), .call() and .bind()


### PROMISE: CREATION

```
let promise = new Promise(function(resolve, reject) { 
    resolve(123); // immediately give the result: 123
});
```

## PROMISE: ASYNC/AWAIT

- https://advancedweb.hu/how-to-use-async-functions-with-array-map-in-javascript/

```javascript
const arr = [1, 2, 3];
// SYNC MAP
const syncRes = arr.map((i) => {
	return i + 1;
});
console.log(syncRes);
// 2,3,4

// VS ASYNC MAP
const asyncRes = await Promise.all(arr.map(async (i) => {
	await sleep(10);
	return i + 1;
}));
console.log(asyncRes);
// 2,3,4

```

## OBSERVER API

- https://indepth.dev/observer-apis-in-javascript-part-i/
- https://indepth.dev/observer-apis-in-javascript-part-ii

## PROXY
Proxies provide a unique way to modify or improve the behavior of existing objects at the lowest level. However, it is not perfect. There are limits. For example, it is not possible to do a comparison (===)with the original object. The proxy is a wrapper around an object, which forwards operations on it to the object, possibly trapping some of them. It can wrap any type of object, including classes and functions. Proxies can catch many operators, such as new (with construct), in (with has), delete (with deleteProperty), etc. One of the most obvious use case is when you can't modify the existing object because it's an external library or a generated code then you can use the proxy to modify or extend this part of the code.
- https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Proxy
- https://www.javascripttutorial.net/javascript-proxy/
- https://www.slideshare.net/BrendanEich/metaprog-5303821
- https://fr.javascript.info/proxy


## EXAMPLES

### OBJECTS

Useful object methods: keys, values, and entries.

```javascript
const data = {
    name: 'Pierre',
    age: 32
}

// Give me the keys in an array
Object.keys(data);
// ['name', 'age']

// Give me the values in an array
Object.values(data);
// ['Pierre', 32]

// Give me the keys and the values in an array (converts an object → array)
Object.entries(data)
// [['name', 'Pierre'], ['age', 32]]

// Give me the key-value pairs in an object. (converts an array → object)
const a = Object.entries(data);
// [['name', 'Pierre'], ['age', 32]]
const b = Object.fromEntries(data);
// { name: 'Pierre', age: 32 }
```

### DEFINITION

- nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. Best practices to use it instead of (||) to provide default value because of the fasly potential issue (eg. '' or 0).
- logical nullish assignment (x ??= y) operator only assigns if x is nullish (null or undefined).
- logical OR assignment (x ||= y) operator only assigns if x is falsy.
- optional chaining operator (?.) permits reading the value of a property located deep within a chain of connected objects without having to expressly validate that each reference in the chain. Instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined.
- typeof operator returns a string indicating the type of the unevaluated operand; there is only 3 combination possible: "number", "string", "boolean", "object", "function" and "undefined".
- non-null assertion operator (myExpr!;) tell the Typescript compiler explicitly that an expression has value other than null or undefined

### MEASURE

console.time('test1');
console.timeEnd('test2);

### EVOLUTION

#### 2023
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with