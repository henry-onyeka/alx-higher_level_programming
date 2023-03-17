#!/usr/bin/node
const ans = parseInt(process.argv[2]);
if (Number.isNaN(ans)) {
  console.log('Missing size');
} else {
  for (let p = 0; p < ans; p++) {
    let r = '';
    for (let w = 0; w < ans; w++) {
      r += 'X';
    }
    console.log(r);
  }
}
