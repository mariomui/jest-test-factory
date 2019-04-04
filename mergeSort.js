function merge(a, b) {
  let arr = [];
  var pt1 = 0;
  var pt2 = 0;
  while (pt1 < a.length && pt2 < b.length) {
    if (a[pt1] < b[pt2]) {
      arr.push(a[pt1])
      pt1++
    } else if (a[pt1] > b[pt2]) {
      arr.push(b[pt2])
      pt2++
    } else if (a[pt1] === b[pt2]) {
      arr.push(a[pt1])
      arr.push(b[pt2])
      pt1++
      pt2++
    }
  }

  if (pt1 >= a.length && pt2 < b.length) {
    for (let i = pt2; i < b.length; i++) {
      arr.push(b[i])
    }
  } else if (pt1 < a.length && pt2 >= b.length) {
    for (let i = pt1; i < a.length; i++) {
      arr.push(a[i])
    }
  }
  return arr
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  let midpoint = Math.floor(arr.length / 2);
  let left = arr.slice(0, midpoint)
  let right = arr.slice(midpoint, arr.length)

  let combinedLeft = mergeSort(left)
  let combinedRight = mergeSort(right)

  return merge(combinedLeft, combinedRight)
}

module.exports = {
  mergeSort,
  merge
}