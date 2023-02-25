// Challenge: 30-totalTaskTime

// Difficulty:  Difficult

// Prompt:

// - Write a function called totalTaskTime that accepts two arguments.
// - The first argument is an array of integers referred to as a "queue".  Each integer in the queue represents a "task", more specifically, the amount of time to complete that task.
// - The second argument is an integer representing the number of CPU "threads" available to process all of the tasks in the queue.
// - The totalTaskTime function should return an integer representing the total time it is going to take to complete all of the tasks in the queue.
// - You may mutate the "queue" array (first argument) if you wish.



// - Solve it with paper and pencil first.  Look for patterns and generalize.  Pseudocode!



totalTaskTime( [], 1 ) // => 0
totalTaskTime( [4, 2, 5], 1 ) // => 11
totalTaskTime( [5, 8], 2 ) // => 8
totalTaskTime( [4, 2, 10], 2 ) // => 12
totalTaskTime( [2, 2, 3, 3, 4, 4], 2 ) //=> 9
totalTaskTime( [5, 2, 6, 8, 7, 2], 3 ) // => 12