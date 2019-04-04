function LL(value = null) {

  this.val = value
  this.next = null
}



function buildLL(s) {
  let ending = new LL();
  for (let i = s.length - 1; i >= 0; i--) {

    let last = new LL(s[i]);
    last.next = ending

    ending = last
  }
  return ending
}

function shout(node) {
  let shout = ''
  while (node.next) {
    shout += node.val
    node = node.next
  }
  return shout;
}

let potpal = [
  'aaaa',
  'babab',
  'wrocker',
  'rotor',
  'rototo',
  'heliileh'
]

for (var i = 0; i < potpal.length; i++) {
  //i want to go through this, make them into a linked list and then see if it's a palindrome
  let node = buildLL(potpal[i])
  console.log(shout(node), '!', isPalindrome(node));
}

function isPalindrome(node) {
  return (function isPalindrome(node) {
    var counter = 0;
    let begin = node;
    let lastyNode = new LL()
    let rev = new LL()
    while (node.next) {
      counter++;

      // make tail and last value
      let revLast = new LL()
      Object.assign(revLast, node)
      //always be careful of ##.next assignments as they will overwite the memory of the thing and not just relabel
      // append tail to current node

      revLast.next = rev

      rev = revLast

      lastyNode = node
      node = node.next
    }

    if (begin.val !== lastyNode.val) {
      return false;
    }
    node = begin;
    let midpoint = Math.ceil((counter - 1) / 2)

    var trip = 0;
    while (node.next && rev.next) {
      if (trip <= midpoint) {
        if (rev.val !== node.val) {
          return false
        }
        rev = rev.next
      }
      node = node.next
      trip++;
    }
    return true
  })(node)
}