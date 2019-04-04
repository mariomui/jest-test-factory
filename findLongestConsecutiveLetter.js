
//find the longest cons pattern

//              ^
//               ^
// loop throughgh have a sliding window
// when the value is different from pt1
//minus the difference 5 -0 = 5 -1 length 4 and put 
//temp char = A, temp length = 4
// if next set is > 4 then switch tempchar and temp length
// if next set = 4 and less than tempchar switch tempchar

function findLongestConsecutiveLetter(word) {

  let pt1 = 0;
  let pt2 = 1;
  let r = {};
  r.candidateChar = "";
  r.candidateLength = 0;
  while (pt2 < word.length) {
    if (word[pt1] === word[pt2]) {
      pt2++;
    } else if (word[pt1] !== word[pt2]) {
      helper(pt2, pt1, r, word)
      pt1 = pt2
      pt2++
    }
  }
  helper(pt2, pt1, r, word)

  return r.candidateChar
}

function helper(pt2, pt1, r, word) {
  if (r.candidateLength < (pt2 - pt1)) {
    r.candidateLength = pt2 - pt1
    r.candidateChar = word[pt1]
  } else if (r.candidateLength === (pt2 - pt1)) {
    if (word[pt1] < r.candidateChar) {
      r.candidateChar = word[pt1]
    }
  }
}


module.exports = {
  findLongestConsecutiveLetter
}