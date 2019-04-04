/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  // loop through
  var leftPointer = 0;
  var rightPointer = 1;
  var midPoint = Math.floor(s.length / 2)
  for (; rightPointer < s.length;) {

    //split 1 (i)
    var window = s.slice(leftPointer, rightPointer);
    var sections = s.split(window);
    // check if the array is length of n/i
    if (!sections.join('')) {
      return window
    }
    //yes, then that's the one.
    //no then keep looping.
    rightPointer++
    if (rightPointer === midPoint + 1) {
      return false
    }
    // split 2 i+1
    // check if array is length of n/i+1 (2)

  }
  return false
};
// 7/2 3.5
// 1 2 3 4 5 6 7 8 9
// a b x a b x a b x. 
//         x 9/2 = 4.5
//             8/2 = 4
let stringo = "ababab"
console.log(repeatedSubstringPattern(stringo))