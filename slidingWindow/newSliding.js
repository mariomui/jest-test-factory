/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function isFilled(mapped, originalmap) {
  for (let key in mapped) {
    if (mapped[key] < originalmap[key]) {
      return false
    }
  }
  return true;
}

var minWindow = function (s, t) {
  if (t.length > s.length) {
    return '';
  }
  if (t === s) {
    return s
  }

  //create a window
  // A F E C D E F A
  // 0 1 2 3 4 5 6 7
  //               r      
  //   l             
  //A:1 F:2 E:1 D:1

  // bigtarget
  let bigTarget = '';
  let bigTargetLen = Infinity;
  // create 2 pointers
  let leftPointer = 0;
  let rightPointer = 0;
  var originalTargTally = t.split('').reduce((accum, item) => {
    if (accum[item]) {
      accum[item]++;
    } else {
      accum[item] = 1;
    }
    return accum;
  }, {})

  let targTally = t.split('').reduce((accum, item) => {
    accum[item] = 0;
    return accum;
  }, {})

  let rightChar = '';
  let targ = '';

  while (leftPointer < s.length && rightPointer < s.length) {
    rightChar = s[rightPointer];
    if (targTally[rightChar] >= 0) {
      targTally[rightChar] += 1;
    }
    rightPointer++;


    if (isFilled(targTally, originalTargTally)) {
      while (isFilled(targTally, originalTargTally)) {
        let leftChar = s[leftPointer];
        if (targTally[leftChar] > 0) {
          targTally[leftChar] -= 1;
        }
        targ = s.slice(leftPointer, rightPointer);
        if (targ.length < bigTargetLen) {
          bigTargetLen = targ.length;
          bigTarget = targ;
        }
        leftPointer++;
      }
    }

  }
  return bigTarget;
};

module.exports = {
  minWindow
}