const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {


  constructor(directMachine = true) {
    this.directMachine = directMachine;
    this.abcArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                   't', 'u', 'v', 'w', 'x', 'y', 'z'];
    this.abc = {a:1,
                b: 2,
                c: 3,
                d: 4,
                e: 5,
                f: 6,
                g: 7,
                h: 8,
                i: 9,
                j: 10,
                k: 11,
                l: 12,
                m: 13,
                n: 14,
                o: 15,
                p: 16,
                q: 17,
                r: 18,
                s: 19,
                t: 20,
                u: 21,
                v: 22,
                w: 23,
                x: 24,
                y: 25,
                z: 26,}
  }


  encrypt(message, key) {

    if (typeof (message) !== 'string' || typeof (key) !== 'string') {
      throw new Error('Lack of arguments');
    };

    message = message.toLowerCase();
    key = key.toLowerCase();
    let result = [];

    while (key.length <= message.length) {
      key = key + key;
    };

    for (let i = 0, j = 0; i < message.length; i++) {
      if (this.abcArr.includes(message[i])) {
        result.push(this.abcArr[(this.abc[message[i]] + this.abc[key[j]] - 2) % 26]);
        j++;
      } else {
        result.push(message[i]);
      }
    }

    if (this.directMachine === true) {
      return result.join('').toUpperCase();
    } else {
      return result.reverse().join('').toUpperCase();
    };
  }


  decrypt(message, key) {

    if (typeof (message) !== 'string' || typeof (key) !== 'string') {
      throw new Error('Lack of arguments');
    };

    message = message.toLowerCase();
    key = key.toLowerCase();
    let result = [];

    while (key.length <= message.length) {
      key = key + key;
    };

    for (let i = 0, j = 0; i < message.length; i++) {
      if (this.abcArr.includes(message[i])) {
        result.push(this.abcArr[(this.abc[message[i]] + 26 - this.abc[key[j]]) % 26]);
        j++;
      } else {
        result.push(message[i]);
      }
    }
    
    if (this.directMachine === true) {
      return result.join('').toUpperCase();
    } else {
      return result.reverse().join('').toUpperCase();
    };
  };
};

module.exports = VigenereCipheringMachine;
