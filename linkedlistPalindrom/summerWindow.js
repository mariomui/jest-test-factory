function solution(T) {
  function validateSummer(summer, winter) {
    for (var i = 0; i < summer.length; i++) {
      for (var j = 0; j < winter.length; j++) {
        if (summer[i] < winter[j]) {
          return false
        }
      }
    }
    return true;
  }
  var leftPointer = T.length - 1;
  var rightPointer = T.length - 1;
  while (leftPointer >= 0) {
    let summer = T.slice(leftPointer, rightPointer + 1)
    let winter = T.slice(0, leftPointer)
    let isSummerGood = validateSummer(summer, winter);
    if (isSummerGood) {
      return winter.length
    }
    leftPointer--;

  }

}

console.log(solution([-5 - 5, 3, 6, 10]))