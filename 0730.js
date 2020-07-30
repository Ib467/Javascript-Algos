/**
 * @param {string} honorific
 * @param {string[]} fullNames
 * @return {string[]} names with honorific applied
 * BONUS: use functional programming
 */

function addHonorificToFormattedNames(honorific, fullNames) {
    const newArr=[];
    fullNames.map((name)=>{
        let nameArr=name.split(', ')
        newArr.push(honorific+' '+nameArr[1]+' '+nameArr[0])
    })
    return newArr;
  }
  


  console.log(addHonorificToFormattedNames('Mr.', ['Smith, Bob', 'Jones, Mike']));
  // should log ['Mr. Bob Smith', 'Mr. Mike Jones']
  
  console.log(addHonorificToFormattedNames('Mrs.', ['HorseDoctor, Beth']));
  // should log ['Mrs. Beth HorseDoctor']
  
ction addHonorificToFormattedNames(honorific, fullNames) {


  /**
   * @param {string} v1
   * @param {string} v2
   * @return {number} 1 if v1 > v2; 0 if they're equal; -1 if v1 < v2
   */
  
 
  function compareVersions(v1, v2) {
    const v1Arr=v1.split('.');
    const v2Arr=v2.split('.');
    while(v2Arr.length!==v1Arr.length){
        if(v2Arr.length>v1Arr.length){v1Arr.push('0')}
        else{v2Arr.push('0')}
    }
    for(let i=0;i<v1Arr.length;i++){
        if(v1Arr[i]>v2Arr[i]){return 1}
        else if(v1Arr[i]<v2Arr[i]){return -1}
    }
    return 0;
  }
  
  console.log(compareVersions('0.1', '1.0')); // should log -1
  console.log(compareVersions('1.0.1', '1.0')); // should log 1
  console.log(compareVersions('2.0', '2.0.0')); // should log 0