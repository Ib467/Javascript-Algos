//Reverse Array using JS

function reverseArr(arr){

    for(let i=0; i<arr.length/2; i++){
        let swapEl = arr[i], swapIdx = arr.length -1 -i;

        arr[i] = arr[swapIdx];
        arr[swapIdx] = swapEl;

    }
    return arr;




}
console.log(reverseArr([1,2,3,4,5]));