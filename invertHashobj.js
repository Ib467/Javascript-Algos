// invert hash map in an object/dictionary
function invertObj(obj) {
    let newObj ={};
    for(var key in obj){
        newObj[obj[key]] = key;
    }
    return newObj;
}

const obj1 = { name: "Zaphod", charm: "high", morals: "dicey" };
console.log(invertObj(obj1));

//expected = { Zaphod: "name", high: "charm", dicey: "morals" };