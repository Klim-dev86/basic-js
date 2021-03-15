const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  
  str = String(str);
  let addition = ''

  if (options.addition || String(options.addition) === 'false' || String(options.addition) === 'null') {
    addition = String(options.addition);
  }
  
  let separator = options.separator || '+';
  let additionSeparator = options.additionSeparator || '|';
  let addRepits = options.additionRepeatTimes || 1;
  let repits = options.repeatTimes || 1;

  let fullAddition = '';

  if (addRepits > 1) {
    for (let i = 0; i < addRepits; i++) {
      if (i === (addRepits - 1)) {
        fullAddition = fullAddition + addition;
      } else {
        fullAddition = fullAddition + addition + additionSeparator;
      };
    };
  } else {
    fullAddition = addition;
  }
  
  let result = '';

  for (let i = 0; i < repits; i++) {
    if (i === (repits - 1)) {
      result = result + str + fullAddition;
    } else {
      result = result + str + fullAddition + separator;
    };
  }

  return result
};
  