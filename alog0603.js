function isPalindrome(str) {
    // your code here
    var bool = true;
    
    for(var i=0; i<str.length; i++){
        var char = str[i]
        if (str[i] === str[str.length-1-i]){
          
        }
        else{
          return false;
        }
        return bool;
        
        }
  }
  
  
  function longestPalindrome(str) {
    // your code here
    var max = "";
    var temp = "";
    
    for(var j=0; j<str.length; j++){
    for (var i=0; i<str.length-j; i++){
      temp = str.slice(0,str.length-1-j)
      if(isPalindrome(temp)){
       max = temp 
      }
      
    }
      if(max.length>1){
        return max;
      }
      else{
       str[0]; 
      }
    }   
  
    
  }
  
  console.log(longestPalindrome('this')); // should log 't'
  console.log(longestPalindrome('bobe')); // should log 'bob'
  console.log(longestPalindrome('what up, daddy-o?')); // should log 'dad'
  console.log(longestPalindrome('Yikes! my favorite racecar erupted!'));
  // should log 'e racecar e'