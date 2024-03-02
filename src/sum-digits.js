const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let result = String(n).split("").map(Number);
  console.log(result);
  let sum = 0;
  for (let i = 0; i < result.length; i++) {
    sum = sum + result[i];
  }
  if (sum >= 10) {
    return getSumOfDigits(sum);
  } else {
    console.log("Final sum: " + sum);
    return sum;
  }
}

getSumOfDigits(12345);

module.exports = {
  getSumOfDigits,
};
