const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (date === undefined) {
    return 'Unable to determine the time of year!'
  };

  if (!Date.prototype.isPrototypeOf(date)) {
    throw new Error('Not implemented');
  };

  let month = date.getMonth();

  console.log(date.getUTCMonth())

  if (month === 11 || month === 0 || month === 1) {return 'winter'};
  if (month === 2 || month === 3 || month === 4) {return 'spring'};
  if (month === 5 || month === 6 || month === 7) {return 'summer'};
  if (month === 8 || month === 9 || month === 10) {return 'fall'};


};
