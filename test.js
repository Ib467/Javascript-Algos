//implete a function computerClosestToZero which takesn an array of 
//tempertures ts and returns the the temperture closets to 0.


function computeClosestToZero(ts) {
    // Write your code here
    // To debug: console.error('Debug messages...');
    if(ts.length === 0 ){return 0;}
  
    let min = 0;

    var closest = ts.reduce(function(prev, curr) {
      return (Math.abs(curr - min) < Math.abs(prev - min) ? curr : prev);
    });
    return closest;
}

/* Ignore and do not change the code below */
// #region main
const n = parseInt(readline());
const ts = readline().split(' ').map(j => parseInt(j)).slice(0, n);
const oldWrite = process.stdout.write;
process.stdout.write = chunk => console.error(chunk);
var solution = computeClosestToZero(ts);
process.stdout.write = oldWrite;
console.log(solution);
// #endregion
