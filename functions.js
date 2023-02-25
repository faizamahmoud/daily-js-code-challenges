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
  
module.exports = {
    bruteForce: bruteForce,
};