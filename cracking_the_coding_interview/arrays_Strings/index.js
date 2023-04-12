// Question 1.1: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

// approach - use a data structure

const uniqueCharacters = (str) => {
    if (str.length > 128) {
        return false;
    }
    let arr = new Array(128).fill(false);
    for(let i=0; i<str.length; i++){
        let val = str.charCodeAt(i)
        if(arr[val]){
            return false
        }
        arr[val] = true
    }
    return true
}

// without DS - Examplify

function isUnique(str) {
    for (let i = 0; i < str.length - 1; i++) {
      for (let j = i + 1; j < str.length; j++) {
        if (str[i] === str[j]) {
          return false; // found a repeated character
        }
      }
    }
    return true; // no repeated characters found
  }
  