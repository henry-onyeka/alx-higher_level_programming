#!/usr/bin/node
module.exports = class Rectangle {
  constructor (w, h) {
    if ((w > 0) && (h > 0)) {
      this.width = w;
      this.height = h;
    }
  }
  print () {
    let sizeY = this.height;
    while (sizeY > 0) {
      console.log('X'.repeat(this.width));
      sizeY -= 1;
    }
  }

  rotate () {
    const temp = this.width;
    this.width = this.height;
    this.height = temp;
  }

  double () {
    this.width *= 2;
    this.height * 2;
  }
};
