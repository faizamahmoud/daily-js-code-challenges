
// object
const googleArrays = nums => {
    // console.log(nums)
    // loop over the array and count freq
    let obj = {};
    // [0,0,0,0,0]
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        // console.log(num)
        if(obj[num] === undefined){
            obj[num] = 1;
            // console.log(num)
        }else{
            return num;
            // obj[num]++
        }
    
    }

}


let numss = [2, 1, 1, 2, 12];
// console.log(googleArrays(numss))
console.log(googleArrays([2, 5, 1, 2, 12]))


module.exports = {
    googleArrays: googleArrays
}