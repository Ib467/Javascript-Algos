/**
   * takes in an UNSORTED array
   * returns the SAME array sorted
   * working in place, use yesterday's arrayPartition internally
   * and call the function recursively as needed
   */
  
  function quickSort(arr, startIdx = 0, endIdx = arr.length - 1) {
    if (endIdx - startIdx < 1) {
      return arr;
    }
    let pivotIdx = arrayPartition(arr, startIdx, endIdx);
    quickSort(arr, startIdx, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, endIdx);
    return arr;
  }
  
  console.log(quickSort([1, 5, 2, 8, 3, 4]));
  
  // should log [1, 2, 3, 4, 5, 8]
  