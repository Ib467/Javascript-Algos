/**
 * takes in a nested (potentially) object
 * and an array of keys
 * returns either a corresponding value (if it exists)
 * or null if it doesn't
 */

function simpleLens(obj, keysPath) {
    let newObj=obj;
    for(i=0;i<keysPath.length;i++){
      if(newObj.hasOwnProperty(keysPath[i])){
        newObj=newObj[keysPath[i]]
      }
      else{return null}
    }
    return newObj
  }
  
  console.log(simpleLens({ hello: 'world' }, ['hello']));
  // should log 'world'
  
  console.log(simpleLens({ hello: 'world' }, ['hello', 'world']));
  // should log null
  
  const nested = {
    address: {
      street: '1234 First Street',
      city: 'Burbank',
      // country: {
      //   code: 'US'
      // }
    }
  }

console.log(simpleLens(nested, ['address', 'street']));
// should log '1234 First Street'

console.log(simpleLens(nested, ['address', 'country', 'code']));
// should log null



/**
 * model a chair
 * things the chair has: color, weight, name, wheels (each one has a color and may or may not be broken)
 * things the chair can do: be raised/lowered, be reclined/not reclined, be occupied/not occupied
 */

class Chair{
  constructor(color,weight,raised=false,swivel=true,recline=false,massage=false,occupied=true){
    this.color=color;
    this.weight=weight;
    this.raised=raised;
    this.swivel=swivel;
    this.recline=recline;
    this.massage=massage;
    this.occupied=occupied;
    this.created_at=Date();
  }
}

const chair1=new Chair('black',70,true)

console.log(chair1)