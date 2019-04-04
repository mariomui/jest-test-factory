function canVisitAllRooms(arr, k) {
  function factorial(n) {
    if (n <= 1) {
      return 1;
    }
    return n * (factorial(n - 1))
  }

  let supero = []
  let length = arr.length; //3
  let allPossible = factorial(length) //6
  let section = allPossible / length;
  // 1## section 1 includes k = 1,2
  // 1##
  // 2## section 2 includes k = 3, 4
  // 2##
  // 3## section 3 includes k = 5, 6
  // 3##
  function recurse(arr, answer) {
    if (!arr.length) {
      supero.push(answer)
    }
    for (var i = 0; i < arr.length; i++) {
      var curr = arr[i]
      recurse(arr.filter((item) => (item !== curr)), answer.concat(curr))
    }
  }
  recurse(arr, [])
  return supero.sort((a, b) => a - b)[k];
}

console.log(canVisitAllRooms([1, 2, 3], 4));