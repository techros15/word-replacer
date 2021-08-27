
module.exports = (str, el, wordSub, repScope) => {
  var words = '';
  if (typeof el === 'number') {
    words = str.split(' ');
    let e = el === -1 ? Math.floor(Math.random() * words.length) : el -1;
    //console.log(e)
    words[e] = wordSub;
    words = words.join(' ');
  } else {
    let re = repScope === 'g' ?  new RegExp(el, 'g') : new RegExp(el);
    words = str.replace(re, wordSub);
    //return s;
  } 
  return words;
};
