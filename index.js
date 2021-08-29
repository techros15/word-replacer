module.exports = (str, el, wordSub, repScope) => {
  var words = {};
  if (typeof el === 'number') {
    let w = str.split(' ');
    let e = el === -1 ? Math.floor(Math.random() * w.length) : el -1;
    w[e] = wordSub;
    words.text = w.join(' ');
  } else {
    let re = repScope === 'g' ?  new RegExp(`\\b${el}\\b`, 'g') : new RegExp(`\\b${el}\\b`);
    words.text = str.replace(re, wordSub);
  } 
  return words;
};
