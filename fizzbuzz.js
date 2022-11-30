
function fizzBuzz(n) {
    // notes: input n must be an integer and i starts at 1
    let arr = [];
    for(let i=1; i<=n; i++){
        if(i % 15 === 0){
            console.log('FizzBuzz')
        }else if(i % 3 === 0){
            console.log('Fizz')
        }else if(i % 5 === 0){
            // arr.push('Buzz')
            console.log('Buzz')
        }else{
            console.log(i)
        }
    }
return arr;
}

// 1 - 15: 1 mod 15
// 2 - 
// 3 - 15 & 3
// 4
// 5- 15 & 5 : 
// 9 - 3
// 15 - 15 & 3 & 5 --- i=15
console.log(fizzBuzz(15))