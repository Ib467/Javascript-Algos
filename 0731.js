 /**
 * @param {string} str the input string
 * @return {number} the length of the longest substring with distinct characters
 */

function lengthOfLongestSubstring(str) {
    // your code here
    let window = str.length;
    while(window > 1){
        for(let i = 0; i<= str.length-window; i++){
            let freq = {};
            let finished = true;
            for(let j = i; j < window+i; j++){
                if(freq.hasOwnProperty(str[j])){
                    finished = false;
                    break;
                }else{
                    freq[str[j]] = 1;
                }
            }
            if(finished) return window;
        }
        window--;
    }
    return 1;
  }
  
  console.log(lengthOfLongestSubstring('abcabcbb'));
  // should log 3: 'abc'
  
  console.log(lengthOfLongestSubstring('bbbbb'));
  // should log 1: 'b'
  
  console.log(lengthOfLongestSubstring('pwwkew'));
  // should log 3: 'wke'
  
  
  /**
   * @param {string} str1
   * @param {string} str2
   * @return {boolean}
   * Ignoring case, can the characters from string 2 build string 1?
   */
  
  function canBuildString1FromString2(str1, str2) {
    // your code here
    let obj = {};
    let string1 = str1.toLowerCase()
    let string2 = str2.toLowerCase()
    for (let i = 0; i < string2.length; i++) {
      if (obj.hasOwnProperty(string2[i])) {
        obj[string2[i]]++
      } else {
        obj[string2[i]] = 1
      }
    }
    for (let j = 0; j < string1.length; j++) {
      if (obj.hasOwnProperty(string1[j]) && obj[string1[j]] > 0) {
        obj[string1[j]]--
      } else {
        return false
      }
    }
    return true
  }
  
  'HELLO'.toLowerCase(); // returns 'hello'
  
  console.log(canBuildString1FromString2('Hello World', 'lloeh wordl')); // should log true
  console.log(canBuildString1FromString2('Hey', 'hello')); // should log false
  console.log(canBuildString1FromString2('hello', 'helo')); // should log false
  console.log(canBuildString1FromString2('hello', 'lllheo')); // should log true
  
  
  /**
   * @param {number} hours
   * @param {number} minutes
   * @return {string}
   */
  
  function timeInWords(hours, minutes) {
    // your code here
    if(minutes <= 30){
        if(minutes == 15){
            return "quarter past " + hours;
        }
        else if (minutes == 0){
            return hours + " o'clock";
        }
        else if(minutes == 30){
            return "half past " + hours;
        }
        else{
            return minutes + " minutes past " + hours;
        }
    }else{
        let tempHours = hours;
        if(tempHours == 23) tempHours = 0;
        else tempHours++;
        
        if(minutes == 45){
          return "quarter to " + tempHours;
        }
        else {
          return (60-minutes) + " minutes to " + tempHours;
        }
    }
  }
  
  console.log(timeInWords(5, 15)); // should log 'quarter past 5'
  console.log(timeInWords(5, 30)); // should log 'half past 5'
  console.log(timeInWords(5, 40)); // should log '20 minutes to 6'
  console.log(timeInWords(5, 45)); // should log 'quarter to 6'
  console.log(timeInWords(12, 0)); // should log `12 o'clock`
  console.log(timeInWords(23, 28)); // should log '28 minutes past 23'
  console.log(timeInWords(23, 45)); // should log 'quarter to 0'