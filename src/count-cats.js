const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let number = 0;

  matrix.forEach(element => {
    for (let i = 0; i <= element.length; i++) {
      if (element[i] === '^^') {
        number++;
      }
    }
  });
  
  return number
};
