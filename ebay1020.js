var arr = ["Daisy", "Rose", "Hyacinth", "Poppy"];
//simple interview question by ebay 
//combine the First letter of each word, then second letter, so forth...
// output => DRHPaoypisa

var arr = ["Daisy", "Rose", "Hyacinth", "Poppy"];
//the output should be readingVertically(arr) = "DRHPaoyoisapsecpyiynth".

function compact(arr) {
    let maxLength = 0;
    let strArr = [];
    let finalWord = '-';
    for (let index = 0; index < arr.length; index++) {
        str = arr[index]
        strArr.push(str.split(''))
        let strLength = str.length;
        if(maxLength < strLength){
            maxLength = strLength;
        }
        console.log(str.split(''))
    }
        
    for (let j = 0; j < maxLength; j++) {
        for (let i = 0; i < arr.length; i++) {
            let letter = strArr[i][j];
            if(letter != undefined){
                finalWord = finalWord + letter
            }
        }
    }
    return finalWord;
}

console.log(compact(arr));




