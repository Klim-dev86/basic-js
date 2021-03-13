const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {return false}

  const charArr = []

  members.forEach(element => {
    if (typeof(element) === 'string') {
    charArr.push(element.trim().slice(0,1).toUpperCase());
    }
  });

  return charArr.sort().join('')
};
