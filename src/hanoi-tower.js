const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

  const ansver = {
    turns: 0,
    seconds: 0,
  };

  let time = 3600 / turnsSpeed

  ansver.turns = 2 ** disksNumber - 1;
  ansver.seconds = Math.floor(ansver.turns * time);

  return ansver

};
