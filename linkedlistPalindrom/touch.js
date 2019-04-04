function solution(A) {
  var hash = {};

  for (var k = 0; k < A.length; k++) {
    var curr = A[k];
    if (!hash[curr]) {
      hash[curr] = 1
    }
  }

  for (var j = 1; j <= 100000; j++) {
    if (!hash[j]) {
      return j
    }
  }
}

console.log(solution([1, 2, 3]))