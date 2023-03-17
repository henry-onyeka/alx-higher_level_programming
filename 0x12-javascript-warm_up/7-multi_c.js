#!/usr/bin/node
let ans = parseInt(process.argv[2]);
if(Number.isNaN(ans))
{
    console.log("Missing number of occurrences");
}
else
{
    for(i = 0; i < ans; i++)
    {
    console.log("C is fun");
    }
}