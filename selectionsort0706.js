function selectionSort(arr) {
    for(var i = 0; i < arr.length-1; i++){
      var min = arr[i];
      var index = i;
      for(var j = i+1; j < arr.length; j++){
        if(arr[j] < min){
          min = arr[j];
          index = j;
        }
      }
      var temp = arr[i];
      arr[i] = arr[index];
      arr[index] = temp;
    }
    return arr;
  }
  
console.log(selectionSort([1, 5, 2, 8, 3, 4]));

// should log [1, 2, 3, 4, 5, 8]