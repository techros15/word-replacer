module.exports = (str, el, wordSub, repScope) => {
  var words = {};
  if (typeof el === 'object') {
    let w = str.split(' ');
    let e = el[0] === -1 ? Math.floor(Math.random() * w.length) : el[Math.floor(Math.random() * el.length)];
    words.word = w[e];
    w[e] = wordSub;
    words.text = w.join(' ');
  } else {
    let re = repScope === 'g' ?  new RegExp(`\\b${el}\\b`, 'g') : new RegExp(`\\b${el}\\b`);
    words.text = str.replace(re, wordSub);
  } 
  return words;
};
