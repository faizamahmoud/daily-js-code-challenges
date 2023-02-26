const util = require('util-inspect');

/* 
Brute force approach: You can use two nested loops to compare each element of the array with 
every other element. If any two elements are equal, return true; otherwise, return false. 
This approach has a time complexity of O(n^2), where n is the length of the array.
*/


const bruteForce = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+ 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true
            }
        }
    }
return false
}

/*
Sorting approach: You can sort the array and then check for adjacent elements that are equal. 
If any two adjacent elements are equal, return true; otherwise, return false. This approach 
has a time complexity of O(n log n), where n is the length of the array, because sorting takes 
O(n log n) time.
*/
const sortSolution = (nums) => {
    // O(nLogn)
    nums.sort();

    // O(n)
    // start i=1 to compare that and the element previous
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] === nums[i - 1]) {
        return true;
      }
    }
    return false;
  }


// a value in set may only occur once(set of unique values)
// O(n)
function hashSolution(nums) {
    const seen = new Set();
    for (let num of nums) {
        //verify if the new set contains num
        if (seen.has(num)) {
        return true;
      }
      seen.add(num);
    }
    return false;
  }
  

  function frequencySolution(nums) {
    // assuming the range of values is known e.g. 0<nums<900 --> new Array(900)
    // in this case, its unknown
    const freq = new Array(100000).fill(0); 
    
    for (let num of nums) {
    //counts the number of times a value exists    
        freq[num]++;
      
      if (freq[num] > 1) {
        return true;
      }
    }
    return false;
  }
   
  function frequencyWithNegativeSolution(nums) {
    // static method to find the min value in the array
    const minValue = Math.min(...nums);

    // initialize a new array    
    const freq = new Array(Math.max(...nums) - minValue + 1).fill(0);
  
    for (let num of nums) {
      freq[num - minValue]++;
      if (freq[num - minValue] > 1) {
        return true;
      }
    }
  
    return false;
  }
  
//   splice(starting index, # of elements to delete, addItem)
// reassignment preserves array length and overwrites whats there
// splice(in an array) and push return the item in question
// inefficient: time limit exceeded with bigger arrays, O(n^2)
// const moveZeroesIneffienct = (nums) => {
// // O(1)
// if(nums.length < 1) return nums;

// // special case outside of loop        
// if(nums[0] === 0) {
//     nums.push(nums.shift())
// };
//     // O(n)
//     for(let i=1; i<nums.length;i++){
//         // O(n)
//         // time complexity is dependent on the position of the 0's
//         if(nums[i] === 0){
//             // console.log('i: ', i, 'nums: ', nums[i])
//             // remove then add to the end
//             let moveToEnd = nums.splice(i,1)
//             nums.push(moveToEnd[0])
//             i--;
//         }
//     }
// return nums;
// }

// two - pointers
// O(n) 
const moveZeroes = (nums) => {
    let lastNonZero = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        // destructure assignment to swap the values 
        // console.log(`nums[lastNonZero] ${nums[i]} nums[i]  ${nums[lastNonZero]}`)
        // [nums[lastNonZero], nums[i]] = [nums[i], nums[lastNonZero]];
        let temp = nums[lastNonZero];
        nums[lastNonZero] = nums[i];
        nums[i] = temp;

        lastNonZero++;
      }
    }
    return nums;
  }

//   [1,2,0,3,0,1]
// nums[lastNonZero] = nums[0]   nums[i=0] = nums[1]
// 

// filter and concatenate
const moveZeroes = (nums) => {
    const nonZeroes = nums.filter(num => num !== 0);
    const zeroes = nums.filter(num => num === 0);
    return nonZeroes.concat(zeroes);
  }
  
// count and swap
  const moveZeroes = (nums) => {
    let numZeros = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
        numZeros++;
      } else if (numZeros > 0) {
        nums[i - numZeros] = nums[i];
        nums[i] = 0;
      }
    }
    return nums;
  }
  

module.exports = {
    bruteForce: bruteForce,
    moveZeroes: moveZeroes,
};