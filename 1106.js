/*
 Given an array of Integers, return indices of two numbers such that they add up to a specific target.
 You may assume that each input would have exactly one solution, and you may not use same element twice.Integers
*/


function betterTwoSums(array, target){

    let someDict = {}

    for(let i=0; i<array.length; i++){
        let num = array[i];
        someDict[num] = i;
    }
    for(let i=0; i<array.length; i++){
        let diff = target - array[i];
        if(someDict.hasOwnProperty(diff) && someDict[diff] !== i){
            console.log(someDict);
            return[i, someDict[diff]];
        }
    }

}
//test case
console.log(betterTwoSums([1,3,5,4,6], 5));