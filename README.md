# word-replacer

> Replaces a word in a string with the provided word or a random word

## Install

```
$ npm install word-replacer
```

## Usage examples

```js
var wordrep = require('word-replacer');

var str = "Whoever is happy will make others happy too"; // Strings are zero offset

// Substitute the 4th word with the word 'blank'
console.log(wordrep(str, [3], 'blank'));
//=> { word: 'will', text: 'Whoever is happy blank make others happy too' }

// Substitute a word chosen randomly with the word 'blank'
console.log(wordrep(str, [-1], 'blank'));
//=> { word: 'make', text: 'Whoever is happy will blank others happy too' } 

// Substitute the 3rd, 5th or 8th word with the word 'blank'
console.log(wordrep(str, [2, 4, 7], 'blank'));
//=> { word: 'too', text: 'Whoever is happy will make others happy blank' } 

// Substitute the first occurrence of a word
console.log(wordrep(str, 'happy', 'blank'));
//=> { text: 'Whoever is blank will make others happy too' }

// Substitute a word globally
console.log(wordrep(str, 'happy', 'blank', 'g'));
//=> { text: 'Whoever is blank will make others blank too' }

```
## License

MIT
