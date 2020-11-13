/* 
Given an object....return an array of arrays object's key and value pairs. 

*/

let objectOne = {
    name: "John",
    email: "john2020@gmail.com"
}

var obj = {
    '1': 5,
    '2': 6,
    '3': 9,
    '4': 8,
    '5': 6,
    '6': 3, }

function entries(obj){
    var arr = [];
    for(key in objectOne){
        arr.push([key, objectOne[key]])
    }
    console.log(arr)
}
entries(obj);


/*Insert into tableName(col1, col2, col3) VALUES("val1", "val2", "val3") */

var obj2 = {
    'col1': 'val1',
    'col2': 'val2',
    'col3': 'val3',
}

function insert(tablename, obj){
    sql_rtrn =`INSERT INTO ${tablename}`;
    sql_rtrn_values = "VALUES ("
        for(var key in obj){
            sql_rtrn = sql_rtrn.concat(`${item}, `);
            sql_rtrn_values = sql_rtrn_values.concat(`"${obj[item]}", `);
        }
        
}