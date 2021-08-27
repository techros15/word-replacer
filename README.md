# random-word-replace

> Randomly replaces a word in a string with the provided word

## Install

```
$ npm install random-word-replace
```

## Usage examples

```js
var randomWordReplace = require('random-word-replace');

var str = "Whoever is happy will make others happy too"; 

// Substitute the word at element 3 with the word 'blank'
randomWordReplace(str, 3, 'blank');
//=> "Whoever is happy blank make others happy too"

// Substitute the word at a random element with the word 'blank'
randomWordReplace(str, -1, 'blank');
//=> "Whoever is happy will make blank happy too" # given random element is 5

// Substitute the first occurrence of a word
randomWordReplace(str, 'happy', 'blank');
//=> "Whoever is blank will make others happy too"

// Substitute a word globally
randomWordReplace(str, 'happy', 'blank', 'g');
//=> "Whoever is blank will make others blank too"

```
