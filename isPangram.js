//isPangram in javascript

let alpha = "abcdefghijklmnopqrstuvwxyz";
let test = "How quickly daft jumping zebras vex!";
let newArray = ""

for(let i=0; i<alpha.length; i++){
  //console.log(alpha[i]);

  for(let j=0; j<test.length; j++){
      if(test[j].toLowerCase() === alpha[i]){
        newArray+=test[j].toLowerCase();
        console.log(newArray)
        break;
      }
  }

}
if(newArray === alpha){
    console.log("true")
    return true;
}else{
    console.log("false")
}