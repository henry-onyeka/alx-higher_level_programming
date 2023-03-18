#!/usr/bin/node
module.exports = class Rectangle {
  constructor (w, h) {
    if ((w > 0) && (h > 0)) {
      this.width = w;
      this.height = h;
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
    [this.width, this.height] = [this.width, this.height]
      .map(prop => prop * 2);
  }
};
