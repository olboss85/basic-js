const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
let getDomain = email.substring(email.indexOf('@') + 1);
console.log(getDomain);
}

getEmailDomain('prettyandsimple@example.com')

module.exports = {
  getEmailDomain
};
