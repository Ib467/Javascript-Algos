function parensValid(str) {  
    var count = 0;  
    for (var i = 0; i < str.length; i++){    
      if (str.charAt(i) == '(') {
        count++;
        } else if (str.charAt(i) == ')'){      
          count--;
          }
          if (count <= -1) {
            return false;    
  }
  }
  if (count == 0) {
    return true;   
    }
  }
  console.log(parensValid('(()))')); // should log false
  console.log(parensValid('((some)a)')); // should log true
  console.log(parensValid(')(')); // should log false
  console.log(parensValid('()()')); // should log true