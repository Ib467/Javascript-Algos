function bubbleSort(arr) {
    // your code here
  for(var i=0; i<arr.length; i++){
    var check = false;
    for(var j=0; j<arr.length-i-1; j++){
      if(arr[j]> arr[j+1]){
      var temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
      check = true;
        }
      }
    } 
    if (check = false){
      return arr;
    }
  return arr;
  }
  
  console.log(bubbleSort([1, 5, 2, 8, 3, 4]));
  // should log [1, 2, 3, 4, 5, 8]