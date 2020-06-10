# JAVASCRIPT

## GUIDE / TOOLS
- https://1loc.dev/
- https://devhints.io/lodash
- https://airbnb.io/javascript/
- https://sulco.stackblitz.io/
- https://vanillajstoolkit.com/
- https://github.com/busypeoples/functional-programming-javascript
- https://github.com/leonardomso/33-js-concepts#5--vs--vs-typeof
- https://github.com/lydiahallie/javascript-questions
- https://learnvanillajs.com/roadmap/ 
- https://learnjavascript.online/
- https://github.com/leonardomso/33-js-concepts
- https://learn.co/courses/introduction-to-javascript
- https://watchandcode.com/p/practical-javascript
- https://javascript.info/ 
- https://learnjavascript.online/ 

## ARTICLES BEST PRACTICES
- https://dev.to/carlillo/clean-code-applied-to-javascript-part-vii-practical-refactoring-example-ceaser-cipher-2397
- https://medium.com/better-programming/clean-code-applied-to-javascript-part-5-exceptions-d46e07691c19  
- https://brianflove.com/2014/09/02/whats-the-double-exclamation-mark-for-in-javascript/
- https://medium.com/better-programming/a-list-of-interesting-operators-in-javascript-22fdacfbbce9
- https://blog.bitsrc.io/11-javascript-utility-libraries-you-should-know-in-2018-3646fb31ade
- https://medium.com/trabe/using-switch-true-in-javascript-986e8ad8ae4f
- https://kriss.io/30-helpful-javascript-snippet-that-you-should-know/
- https://thewebdev.info/2020/06/09/more-javascript-habits-we-can-follow/
- https://typeofnan.dev/10-javascript-quiz-questions-and-answers/
- https://codesource.io/javascript-design-patterns/

## CONTEXT / SCOPES
- https://tylermcginnis.com/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript/

## PROMISE THEN VS AWAIT VS CHAINABLE
- https://github.com/kozhevnikov/proxymise

## TOOLS

- https://github.com/webhintio/hint
- https://github.com/miragejs/miragejs

## LIB UTILS

- https://gist.github.com/jsonberry/c1f43140304a7aea529427568bcf1cb2
- https://gist.github.com/pomber/24b8286282ec10cc015a591d9f237b26
- https://github.com/vvo/javascript-library-template
- https://github.com/JSMonk/hegel
- https://github.com/stoeffel/awesome-fp-js
- https://github.com/sorrycc/awesome-javascript
- https://github.com/date-fns/date-fns
- https://github.com/fengyuanchen/cropperjs
- https://github.com/ianstormtaylor/superstruct
- https://github.com/stryker-mutator/stryker
- https://github.com/pshihn/rough
- https://github.com/ded/script.js
- https://github.com/ramda/ramda
- https://github.com/lodash/lodash
- https://github.com/getcrft/jsonizer
- https://github.com/stalniy/casl

## LIB FRONTEND

- https://github.com/alvarotrigo/fullpage.js
- https://github.com/matthewp/robot
- https://github.com/ansman/validate.js
- https://github.com/koorchik/js-validator-livr
- https://www.npmjs.com/package/livr
- https://github.com/immerjs/immer
- https://github.com/angus-c/just
- https://github.com/Leaflet/Leaflet
- https://github.com/pshihn/rough-notation

## LIB AI
- https://github.com/BrainJS/brain.js

## FRAMEWORK FRONTEND
- https://github.com/sindresorhus/awesome-electron
- https://github.com/Tencent/omi
- https://electronjs.org/
- https://nwjs.io/  

## FRAMEWORK BACKEND
- https://nestjs.com/
- https://github.com/strapi/strapi
- https://github.com/typeorm/typeorm
- https://github.com/strapi/strapi
- https://github.com/amark/gun
- https://github.com/pubkey/rxdb
- https://github.com/pouchdb/pouchdb

## LIB
- https://github.com/GoogleChrome/puppeteer
- https://github.com/NectarJS/nectarjs

## ALLIN FRAMEWORK
- https://github.com/vendure-ecommerce/vendure

## BOOKS
- https://exploringjs.com/impatient-js/

## IMPORTANT

### PURE FUNCTIONS
- https://blog.bitsrc.io/understanding-javascript-mutation-and-pure-functions-7231cc2180d3
- https://hackernoon.com/javascript-and-functional-programming-pt-3-pure-functions-d572bb52e21c

### IMMUTABILITY
- https://ultimatecourses.com/blog/all-about-immutable-arrays-and-objects-in-javascript
- https://dev.to/glebec/four-ways-to-immutability-in-javascript-3b3l

### DESTRUCTURING
- https://codeburst.io/es6-destructuring-the-complete-guide-7f842d08b98f

### ALGORITHM
- https://www.oreilly.com/library/view/high-performance-javascript/9781449382308/ch04.html

### OBJECT LITERALS
- https://ultimatecourses.com/blog/deprecating-the-switch-statement-for-object-literals

### ARRAYS
- https://dev.to/ibrahima92/15-must-know-javascript-array-methods-in-2020-1kd8
- https://medium.com/hackernoon/3-javascript-performance-mistakes-you-should-stop-doing-ebf84b9de951

### SREAD
- https://medium.com/dailyjs/passing-arrays-as-function-arguments-c1f3644ecb9c

### MORE

- Type coercion
- Hoisting 
- Callstack
- IIFE
- Scope
- Callbacks
- Async await
- Promises
- Closures
- Iterators
- Generators
- apply(), .call() and .bind()

## EXAMPLES

Useful object methods: keys, values, and entries.

```
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