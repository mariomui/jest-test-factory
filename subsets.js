/* given a list of unique numbers (set) return all possible subsets

[], [1,], [1,3],[1,4]

*/

function subset(arr) {
  //i want to loop through my array
  //take out each loop and make that actual loop = depth.
  // first thing i do is the last thing i do.
  var subsets = [[]]
  for (var i = 0; i < arr.length; i++) {
    var num = arr[i]
    subsets = subsets.concat(subsets.map(subset => {
      return subset.concat(num)
    }))
    console.log(subsets);
  }
  return subsets;
}

console.log(subset([1, 2, 3]))
