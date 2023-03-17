#!/usr/bin/node
const ans = parseInt(process.argv[2]);

if (Number.isNaN(ans)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < ans; i++) {
    console.log('C is fun');
  }
}
