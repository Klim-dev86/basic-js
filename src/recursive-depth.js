const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {


  calculateDepth(arr) {
    console.log(arr)
    return Array.isArray(arr) ? 
    1 + Math.max(...arr.map(this.calculateDepth.bind(this))) :
    0;
  }
};