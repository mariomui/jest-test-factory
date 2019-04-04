const { findAndReplacePattern2 } = require('./findAndReplacePattern')
let arr = ["abc", "deq", "mee", "aqq", "dkd", "ccc"]
let str = "abb"
Array.prototype.log = function () {
  console.log(this)
}
findAndReplacePattern2(arr, str).log()