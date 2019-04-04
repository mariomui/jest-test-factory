var cantVisitAllRooms = function (rooms) {
  var keyRing = []

  var recurse = (roomNo) => {
    if (keyRing.includes(roomNo)) return
    if (!rooms[roomNo]) return
    if (!rooms[roomNo].length) return
    if (!rooms[roomNo]) return

    var keyPocket = rooms[roomNo];
    for (let i = 0; i < keyPocket.length; i++) {
      keyRing.push(keyPocket[i])
      recurse(keyPocket[i])
    }
  }
  recurse(0);
  console.log(keyRing)
  if (keyRing.length === rooms.length) return true
  return false;
}

module.exports = {
  cantVisitAllRooms
}