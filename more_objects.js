/*
In collection of data, find the criteria and return as expected. 
*/

const collection = [
{firstName: 'Bob', lastName:"Bobbert", age:31},
{firstName: 'John', lastName:"Smith", age:25},
{firstName: 'Bob', lastName:"Smith", age:25},
{firstName: 'Bob', lastName:"White", age:31}
]

const criteria = {
    firstName: 'Bob', 
    age: 31
}


/*
expected = [
    // {firstName: 'Bob', lastName:"Bobbert", age:31},
//       {firstName: 'Bob', lastName:"White", age:31}

]
*/

function findObjects (criteria, collection){
    let answer = []; //created empty array
    for (let i=0; i<collection.length; i++){ //loop thru every object in collec
        let matches = true;
        for(key in criteria){
            //compare all keys in search criteria to the object
            if(collection[i][key] === undefined || collection[i][key] !== criteria[key]){
                matches = false;
                break;
            }
        }
        if(matches) {
            answer.push(collection[i])  //if matches add to answer array
        }
    }
return answer;

}
console.log(findObjects (criteria, collection))