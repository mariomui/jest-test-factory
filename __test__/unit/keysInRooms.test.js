const { cantVisitAllRooms, canVisitAllRooms } = require('../../canVisitAllRooms/')
let arr = [[1], [2], [3], []];
test('testing cantvisitallrooms', () => {
  var jack = cantVisitAllRooms(arr);
  expect(cantVisitAllRooms(jack)).toBe(false);
})
test('testing keys and rooms', () => {
  var jack = canVisitAllRooms(arr)
  expect(jack).toBe(true);
})