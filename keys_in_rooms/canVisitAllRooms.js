
const canVisitAllRooms = function (rooms) {

    function recurse(room) {

        if (!room.keys.length) return;
        if (room.hasVisited) return;

        room.hasVisited = true;

        for (let i = 0; i < room.keys.length; i++) {
            let currKey = room.keys[i];
            helperRooms[currKey].isLocked = false;
            debugger;
            recurse(helperRooms[currKey]);
        }
    }

    // make a mental map of the rooms to include whether they are locked
    // include whether or not they have been visited.
    debugger;
    let helperRooms = {};
    for (let i = 0; i < rooms.length; i++) {
        helperRooms[i] = {};
        helperRooms[i].keys = rooms[i];
        helperRooms[i].isLocked = true;
        helperRooms[i].hasVisited = false;
    }


    helperRooms['0'].isLocked = false;
    recurse(helperRooms[0]);

    for (let key in helperRooms) {
        if (helperRooms[key].isLocked) {
            return false;
        }
    }
    return true;
};

let arr = [[1], [2], [3]];

var jack = [[1], [2], [3], []];
function l(a) {
    console.log(a)
}
l(canVisitAllRooms(jack));

module.exports = {
    canVisitAllRooms
}