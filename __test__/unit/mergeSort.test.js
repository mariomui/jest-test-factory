
const { mergeSort } = require('../../mergeSort')


describe("test all my helper functions", () => {
  let randomNum, generateRandomNum, makeXArraysOfYElements, mocks
  let js = JSON.stringify

  beforeEach(() => {
    randomNum = (a, b) => {
      if (b >= a) {
        return Math.floor(Math.random() * (b - a)) + a;
      } else {
        return
      }
    }
    generateRandomNum = () => -1 * -Math.random().toFixed(randomNum(1, 3)).split('.')[1]
    makeXArraysOfYElements = (x, y) => {
      var arr = [];
      for (var i = 0; i < x; i++) {
        var innerArr = [];
        for (var j = 0; j < y; j++) {
          innerArr.push(generateRandomNum())
        }
        arr.push({
          regularNums: innerArr,
          sortedNums: innerArr.slice().sort((a, b) => a - b)
        })

      }
      return arr
    }
    mocks = makeXArraysOfYElements(10, 10)

  })

  it("randomNum should return a randomNum", () => {
    let num = randomNum(1, 5)
    let num1 = randomNum(5, 10)
    let num2 = randomNum(12, 20)
    let num3 = randomNum(30, 10)
    let num4 = randomNum(10, 10)

    expect(num).toBeLessThanOrEqual(5);
    expect(num).toBeGreaterThanOrEqual(1);

    expect(num1).toBeLessThanOrEqual(10);
    expect(num1).toBeGreaterThanOrEqual(5);

    expect(num2).toBeLessThanOrEqual(20);
    expect(num2).toBeGreaterThanOrEqual(12);

    expect(num3).toBe(undefined);

    expect(num4).toBe(10)

  })
  it("generateRandom should return 0 to 999", () => {
    let num = generateRandomNum()
    let num1 = generateRandomNum()
    let num2 = generateRandomNum()
    let num3 = generateRandomNum()
    expect(typeof num).toBe('number')
    expect(num).toBeGreaterThanOrEqual(0)
    expect(num).toBeLessThan(1000)

    expect(typeof num1).toBe('number')
    expect(num1).toBeGreaterThanOrEqual(0)
    expect(num1).toBeLessThan(1000)

    expect(typeof num2).toBe('number')
    expect(num2).toBeGreaterThanOrEqual(0)
    expect(num2).toBeLessThan(1000)

    expect(typeof num3).toBe('number')
    expect(num3).toBeGreaterThanOrEqual(0)
    expect(num3).toBeLessThan(1000)
  })
  it("should makeXArrysOfYElements", () => {
    let mocks = makeXArraysOfYElements(5, 10)
    expect(mocks.length).toBe(5)
    expect(mocks[3].regularNums.length).toBe(10)
    expect(typeof mocks[0]).toBe('object')
    expect(typeof mocks[3].sortedNums[3]).toBe('number')
  })
  it("should test out merge sort with a sample of 10 arrays", () => {
    for (var i = 0; i < 10; i++) {
      let expected = JSON.stringify(mergeSort(mocks[i].regularNums))
      let actual = JSON.stringify(mocks[i].sortedNums)
      expect(expected)
        .toBe(actual)
      expect(expected)
        .toBe(actual)
    }
  })
})
