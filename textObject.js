var obj = {
  seuss: "/“Don/'t cry because it/'s over, smile because it happened./” ― Dr. Seuss",
  wilde: '"Be yourself; everyone else is already taken." ― Oscar Wilde',
  west: '“You only live once, but if you do it right, once is enough.” ― Mae West',
  randomizer: function(){
    var propArr = [obj.seuss, obj.wilde, obj.west];
    return propArr[Math.floor(Math.random() * propArr.length)];
  }
};

module.exports = obj;
