
function isFilled(mapped) {
  for (let key in mapped) {
    if (mapped[key] <= 0) {
      return false
    }
  }
  return true;
}

const minWindow = function (s, t) {
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
  var targTally = t.split('').reduce((accum, item) => {
    accum[item] = 0;
    return accum;
  }, {})

  // loop through s and tally the targ // end when both pointers are at the end.
  while (leftPointer < s.length && rightPointer < s.length) {
    let rightChar = s[rightPointer];

    if (targTally[rightChar] >= 0) {
      targTally[rightChar] += 1;
    }
    rightPointer++;
    let targ = t.slice(leftPointer, rightPointer)
    if (isFilled(targTally)) {
      if (targ.length < bigTargetLen) {
        bigTarget = targ;
        bigTargetLen = targ.length
      }
    }

    let flag = isFilled(targTally)

    if (flag) {
      while (flag) {
        let leftChar = s[leftPointer];
        if (targTally[leftChar] > 0) {
          targTally[leftChar] -= 1;
        }
        flag = isFilled(targTally)
        leftPointer++;
        console.log('here');

      }
    }

  }
  return bigTarget;
};

const log = (a) => { console.log(a) };
var b = minWindow('bbaa', 'aba')
var c = minWindow('ba', 'aba')

log(b);
log(c);