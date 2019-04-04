var isSubsetOf = function (arr) {
  var hash = {}
  arr.reduce((accum, item) => {
    accum[item] = accum[item] ? ++accum[item] : 1
    return accum
  }, hash)
  for (let i = 0; i < this.length; i++) {
    if (!hash[this[i]]) {
      return false;
    }
  }
  return true
}

Object.assign(Array.prototype, { isSubsetOf: isSubsetOf })
console.log([1, 2, 2, 5].isSubsetOf([1, 2, 3, 4]))