var obj = {
  alien: "/“Don/'t cry because it/'s over, smile because it happened./” ― Dr. Seuss",
  wolf: '"Be yourself; everyone else is already taken." ― Oscar Wilde',
  flamingo: '“You only live once, but if you do it right, once is enough.” ― Mae West',
  randomizer: function(){
    var propArr = [obj.alien, obj.wolf, obj.flamingo];
    return propArr[Math.floor(Math.random() * propArr.length)];
  }
};

module.exports = obj;
