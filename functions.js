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


module.exports = {
    bruteForce: bruteForce,
};