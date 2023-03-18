#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    if ((w > 0) && (h > 0)) {
      this.height = h;
      this.width = w;
    }
  }

  print () {
    let i = 0;
    let p = 0;
    for (i = 0; i < this.height; i++) {
      let ph = '';
      for (p = 0; p < this.width; p++) {
        ph += 'X';
      }
      console.log(ph);
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
}
module.exports = Rectangle;
