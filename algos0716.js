/**
 * takes in an array of integers
 * returns an ARRAY of OBJECTS
 * with each one having two key/value pairs: the index and the number
 * the array should have ONLY non-consecutive values
 * the first element of the array is NEVER considered non-consecutive
 */

function allNonConsecutive(arr) {
    // your code here
    let newArr=[];
    for(let idx=0;idx<arr.length-1;idx++){
        if(arr[idx]+1!==arr[idx+1]){
            newArr.push({
              i: idx+1, n: arr[idx+1]
            })
        }
    }
    return newArr;


  }
  
  console.log(allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 10]));
  // should log [{i: 4, n: 6}, {i: 7, n: 10}] 6 and 10 are the only non-consecutives
  
  console.log(allNonConsecutive([2, 3, 4, 7, 8, 12]));
  // should log [{i: 3, n: 7}, {i: 5, n: 12}] 7 and 12 are the only non-consecutives
  
  
  /**
   * takes in an array of integers
   * and a given sum
   * returns an array of ALL the consecutive integers
   * that make the sum
   * BONUS: what if there are zeros in the input array?
   */
  
  function findConsecutiveSums(arr, sum) {
    // your code here
  }
  
  console.log(findConsecutiveSums([2, 5, 3, 6, 7, 23, 12], 16));
  // should log [
  //   [2, 5, 3, 6],
  //   [3, 6, 7]
  // ]