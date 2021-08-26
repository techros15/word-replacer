module.exports = function randomWordReplace(string) {
  if (typeof string !== "string") throw new TypeError("I want a string!");
  return string.split(' ');
};

