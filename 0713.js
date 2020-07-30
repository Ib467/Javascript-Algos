function intersectSortedArraysDedupe2(arr1, arr2) {
    // your code here
    let newArray = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            i++;
        } else if (arr2[j] < arr1[i]) {
            j++;
        } else if (arr1[i] == arr2[j] && newArr[newArr.length - 1] != arr1[i]) {
            newArray.push(arr2[j]);
            i++;
            j++;
        }
    }
    return newArray;
}

console.log(intersectSortedArraysDedupe2([1, 2, 2, 3], [2, 2, 4]));
// should log [2]