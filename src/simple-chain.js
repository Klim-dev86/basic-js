const CustomError = require("../extensions/custom-error");

const chainMaker = {

  length: 0,
  links: [],

  getLength() {
    return this.length
  },

  addLink(value) {
    if (value === undefined) {
      this.links.push(`( )`);
    } else {
      this.links.push(`( ${value} )`);
    }
    this.length++;
    return this
  },

  removeLink(position) {

    if (position < 0 || position > this.links.length) {
      this.links = [];
      throw new Error('Wrong position');
    };

    if (position === 1) {
      this.links.shift()
    } else if ((position === (this.links.length))) {
      this.links.pop()
    } else {
      let result = this.links.slice(0, position-1).concat(this.links.slice(position, this.links.length));
      this.links = result;
    }
    this.length--;
    return this
  },
  
  reverseChain() {
    if (this.links.length > 1) {
      this.links = this.links.reverse()
    }
    return this
  },

  finishChain() {
    let result = this.links.join('~~');
    this.links = [];
    return result
  }
};

module.exports = chainMaker;
