
function findMedian(arr) {
    // Write your code here
    // odd length
     // odd length
    // even length : average of the two in the middle
    let middle = Math.ceil((arr.length-1)/2) // for odd lengths
    let left = middle - 1
    arr.sort((a,b) => a-b)
    
    if(arr.length%2 ===0){
    return (arr[middle] + arr[left])/2
    }
    return arr[middle]

}

findMedian([2,3,6,1,2])
console.log(findMedian([0 ,1, 2 ,4 ,6 ,5 ,3])) 
// console.log(findMedian([0 ,1, 2  ,3])) 
