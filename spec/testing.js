// Challenge: 24-isWinningTicket

// Difficulty:  Intermediate

// Prompt:

// - Write a function called isWinningTicket that accepts a single array an as argument.
// - The input array represents a 'lottery ticket' consisting of one or more nested 2-value arrays.  The first value of a nested array will be a string, the second an integer.
// - The isWinningTicket function should return true if all of the nested arrays have a character in the string whose numeric character code equals the integer (2nd value).
// - If any of the nested arrays have a string where all of the character's character code does not match the integer, then return false.

// Hints:

// - A character/string can be created from a character code using the String.fromCharCode() class method.
// - A character within a string's character code can be obtained using the charCodeAt() string method.

// Examples:


// isWinningTicket( [ ['ABC', 65] ] ) // => true
// isWinningTicket( [ ['ABC', 999], ['XY', 89] ] ) // => false
// isWinningTicket( [ ['ABC', 66], ['dddd', 100], ['Hello', 108] ] ) // => true
// isWinningTicket( [ ['ABC', 66], ['dddd', 15], ['Hello', 108] ] ) // => false