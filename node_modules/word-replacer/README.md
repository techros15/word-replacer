# word-replacer

> Replaces a word in a string with the provided word or a random word

## Install

```
$ npm install word-replacer
```

## Usage examples

```js
var wordrep = require('word-replacer');

var str = "Whoever is happy will make others happy too"; 

// Substitute the 4th word with the word 'blank'
wordrep(str, 4, 'blank');
//=> "Whoever is happy blank make others happy too"

// Substitute a word chosen randomly with the word 'blank'
wordrep(str, -1, 'blank');
//=> "Whoever is happy will make blank happy too" 

// Substitute the first occurrence of a word
wordrep(str, 'happy', 'blank');
//=> "Whoever is blank will make others happy too"

// Substitute a word globally
wordrep(str, 'happy', 'blank', 'g');
//=> "Whoever is blank will make others blank too"

```
## License

MIT
