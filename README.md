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
randomWordReplace(str, 'blank', 3);
//=> "Whoever is happy blank make others happy too"

randomWordReplace(str, 'blank');
//=> "Whoever is happy will make blank happy too" # others selected as random word

randomWordReplace(str, 'blank', 'g');
//=> "Whoever is blank will make others blank too" # happy selected as random word

```

