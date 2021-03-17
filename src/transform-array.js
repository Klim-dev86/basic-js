const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  const _arr = arr.slice();

  const result = [];
  
  for (let i = 0; i < _arr.length; i++) {

    switch (_arr[i]) {

      case '--discard-next':
        if (_arr[i+1] !== undefined) {
          _arr[i+1] = 'discarded'
          i++;
        } else {
          return result
        }    
      break;

      case '--discard-prev':
        if (_arr[i-1] === 'discarded') {
          break
        } else if (_arr[i-1] !== undefined) {
          result.pop();
        }
      break;

      case '--double-next':
        if (_arr[i+1] !== undefined) {
          result.push(_arr[i+1]);
        } else {
          return result
        }
      
      break;

      case '--double-prev':
        if (_arr[i-1] === 'discarded') {
          break
        } else if (_arr[i-1] !== undefined) {
          result.push(_arr[i-1]);
        }
      break;

      default:
        result.push(_arr[i])
    };
  };

  return result
};

