const { minWindow } = require('./newSliding.js')
const minWindowO = require('./test.slidewindow.js').minWindow
const minWindowB = require('./tutorsolution').minWindow

const og = function () {
  let args = Array.from(arguments).slice(0);
  console.log(...args);
};
// var b = minWindow('bbaa', 'aba')
// let c = minWindow('abba', 'aba');
// let b = minWindow('bbaa', 'aba');
let d = minWindowB('maribbaoa', 'mario');

// og(c, '|', 'new');
// og(b, '|', 'new');
og(d, '|', 'tut');
