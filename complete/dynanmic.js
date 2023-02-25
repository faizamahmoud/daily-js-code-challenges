
// Prompt:

// - Write a function called addChecker that accepts two arguments.
// - The first argument is an array containing at least two integers.  The integers in the array are sorted in ascending order.
// - The second argument is an integer.
// - The addChecker function should return true if there are two integers in the array of integers (first argument) that when added together, equals the integer passed in as the second argument.
// - If there are no two integers in the array that sum up to equal the second argument, addChecker should return false.

// Hint:

// - An efficient solution can leverage the the fact that the integers in the array are sorted.

// Examples:

const addChecker = (arr,target) => {
    //base cases
    if(target === 0) return true
    if(target < 0) return false
    //iterate through array
    for(let num in arr){
        const remainder = target - num; 
        //r = 3-1 = 2, 2-1 = 0
        //r = 3-2 = 1, 2-2 = 0
        if(addChecker(arr,remainder) = true){
            return true;
        }
    }
   return false;
}


addChecker( [1, 2], 3 ) // => true
// addChecker( [-3, 2], 9 ) // => false
// addChecker( [10, 15, 16, 22], 32 ) // => true
// addChecker( [10, 15, 16, 22], 19 ) // => false





