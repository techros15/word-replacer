
module.exports = (str, el, wordSub, repScope) => {
  if (typeof el === 'number') {
    const words = str.split(' '); // array
    let e = el === -1 ? Math.floor(Math.random() * words.length) : el;
    //console.log(e)
    words[e] = wordSub;
    return words;
  } else {
    let re = repScope === 'g' ?  new RegExp(el, 'g') : new RegExp(el);
    let s = str.replace(re, wordSub);
    return s;
  }  
};
