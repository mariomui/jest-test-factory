const { findAndReplacePattern2 } = require('../../findAndReplacePattern')


// findAndReplacePattern2(arr, str).log()
describe("", () => {
  test.each`
  input | input2 | expectedRes
  ${["abc", "deq", "mee", "aqq", "dkd", "ccc"]} | ${"abb"} | ${["mee", "aqq"]}
  ${["tbt", "ddd", "mee", "ini", "rfr"]} | ${"aba"} | ${["tbt", "ini", "rfr"]}
  `(`should return the right array`, ({ input, input2, expectedRes }) => {
    let js = JSON.stringify
    expect(js(findAndReplacePattern2(input, input2))).toBe(js(expectedRes))
  })
})