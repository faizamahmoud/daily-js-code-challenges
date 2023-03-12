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
      // add num to the set
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
    // this creates an array where the counter for the minValue is the first position
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

//* two - pointers
// O(n) 
const moveZeroesTwoPointers = (nums) => {
    let lastNonZero = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        
        // destructure assignment to swap the values - // [nums[lastNonZero], nums[i]] = [nums[i], nums[lastNonZero]];
        
        let temp = nums[lastNonZero];
        nums[lastNonZero] = nums[i];
        nums[i] = temp;

        lastNonZero++;
      }
    }
    return nums;
  }


//* filter and concatenate
// this doesnt work though because the filter function returns a new array for 
// zeros and non-zeros and then combines the two new arrays but nums remains unmodified
// this function does not meet the requirement of the problem which is to modify the input
// array in place
const moveZeroesFilterAndConcat = (nums) => nums = nums.filter(num => num !==  0).concat(nums.filter(num => num === 0))
  






//  two - pointer: count and swap
  const moveZeroesCountAndSwap = (nums) => {
    
    let numZeros = 0;
    
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
        numZeros++;
      } else if (numZeros > 0) {
          // Move the current element to the position i-numZeros, which is the first 
          // available slot to the left of the zeros
          // nums[2-2] = 1
        nums[i - numZeros] = nums[i];
        // set the current element to zero
        // nums[2] = 0
        nums[i] = 0;
      }
    }
    return nums;
  }


/*
To modify the array in place, we need to update the elements of the array directly without creating
a new array

apparently, not efficient for large input sizes
*/

const moveZeroes = nums => {
  // keeps track of current non-zero index
  let j = 0;
  
  for (let i = 0; i < nums.length; i++) {
    console.log(nums)

  // if the num is not zero
    if (nums[i] !== 0) {
      // assign num[j] to num[i]
      // nums[i] is currently still the same
      nums[j] = nums[i];
      console.log(`i: ${i}, nums[${j}]: ${nums[j]}`)
      
      j++;
    }
  }
  // after all non-zeros are moved to the left,the remaining elements are assigned to zeros
  while (j < nums.length) {
    nums[j] = 0;
    j++;
  }
}

// to optimize the code above, reduce the number of operations
const moveZeros = nums => {
  // used to traverse the array
  let left = 0; 
  let right = 0; 

  while(right < nums.length){
    if(nums[right] != 0){
      // swap non-zero element with the left pointer
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
    }
    right++
  }
}

const moveItemsToTheLeft = nums => {
  // current locker we;re examinging starting from the left
  let currentLocker = 0; 
  // an available locker but still has a students name on it
  let openLocker = 0; 

  let BeforeLastLocker = nums.length;
  
  while(currentLocker < BeforeLastLocker){
  
    // if the current locker contains items
    if(nums[currentLocker] != 0){
      
      // store the empty locker's students label on the table
      let table = nums[openLocker];
      
      // store the items from the currentLocker in the locker to the left
      nums[openLocker] = nums[currentLocker];
      
      // and now the currentLocker will be empty and have studentLabel on it
      nums[currentLocker] = table;

      // check the next locker to the right
      currentLocker++;
    }

    openLocker++
  }
}




let nums = [0, 0, 1, 0, 3, 0, 0, 12, 0];
console.log(moveZeroesCountAndSwap(nums))

// max subarray
// two sum
// longest word

module.exports = {
    bruteForce: bruteForce,
    moveZeroesCountAndSwap: moveZeroesCountAndSwap,
    moveZeroesTwoPointers: moveZeroesTwoPointers,
};