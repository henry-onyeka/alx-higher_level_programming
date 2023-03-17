#!/usr/bin/node
let ans = parseInt(process.argv[2]);
if(Number.isNaN(ans))
{
    console.log("Missing size");
}
else{
    for(p = 0; p < ans; p++){
        r = '';
        for(w = 0; w < ans; w++)
        {
            r += 'X';
        }
        console.log(r);
    }
}