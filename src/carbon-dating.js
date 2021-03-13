const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  if (typeof(sampleActivity) !== 'string' ||
  sampleActivity === undefined ||
  isNaN(Number(sampleActivity)) ||
  Number(sampleActivity) <= 0 ||
  Number(sampleActivity) > 15) {
    return false
  }
  

  let result = Math.log(MODERN_ACTIVITY/sampleActivity) / (0.693 / 5730)
  return Math.ceil(result)
};
