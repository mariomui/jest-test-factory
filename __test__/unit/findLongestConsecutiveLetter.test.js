const { findLongestConsecutiveLetter } = require('../../findLongestConsecutiveLetter')

describe("findLongest Longest Consecutive letter", () => {
  test.each`
  input | expectedOutput
  ${"kkkkkkkkkkkddee"} | ${"k"}
  ${"kkeeeeeeerrreeeeffff"} | ${"e"}
  ${"kkddeeedddddddee"} | ${"d"}
  ${"kkkkkkkkkkeeeeeeeeeeeeeeeeeeeeee"} | ${"e"}
  ${"kkeekkdeekkeedddrrrrrreee"} | ${"r"}
  ${"ke"} | ${"e"}
  ${"ek"} | ${"e"}
  `('it should return the desired', ({ input, expectedOutput }) => {
    expect(findLongestConsecutiveLetter(input)).toBe(expectedOutput)
  })
})