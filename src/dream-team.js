const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false; // Возвращаем false для неправильного типа входных данных
  }

  let dreamTeamName = "";

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      let firstChar = members[i].trim()[0];
      if (firstChar !== undefined && isNaN(parseInt(firstChar))) {
        dreamTeamName += firstChar.toUpperCase();
      }
    }
  }

  dreamTeamName = dreamTeamName.split("").sort().join("");

  console.log(dreamTeamName);
  return dreamTeamName;
}

module.exports = {
  createDreamTeam,
};
