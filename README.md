# word-replacer

> Replaces a word in a string with the provided word or a random word

## Install

```
$ npm install word-replacer
```

## Usage examples

```js
var wordReplacer = require('word-replacer');

var str = "Whoever is happy will make others happy too"; 

// Substitute the 4th word with the word 'blank'
wordReplacer(str, 4, 'blank');
//=> "Whoever is happy blank make others happy too"

// Substitute a word chosen randomly with the word 'blank'
wordReplacer(str, -1, 'blank');
//=> "Whoever is happy will make blank happy too" 

// Substitute the first occurrence of a word
wordReplacer(str, 'happy', 'blank');
//=> "Whoever is blank will make others happy too"

// Substitute a word globally
wordReplacer(str, 'happy', 'blank', 'g');
//=> "Whoever is blank will make others blank too"

```
## License

MIT

