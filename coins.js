// /*
// given an inf number of dimes, nickels and pennies, create a program that will use the least amount of coins 
// string input
// output = key, value => Q, counter
// */

// // 1, 5, 10, 25

// // let obj = {}
// // let counter = [...].fill(4); = [0,0,0,0]
// // 1- 4*25
// // 1.89 - 7 Q + 1 D + 1 P
// // edge - 0 returns 0
// // .01 = .01
// // negative = undefined
// // different type = undefined

// // input = 1.89
// // 1.89 > .25
// // amount - .25
// // counting 25
// // 1.89 - .25 -....-.25 = .39-.25 = .14
// // counting 10
// // .14> .1, .14-.1 = .04 > .1
// // count
// // .04 !> .05
// // .01

// /*
// * look at dollar 
// * is .89 > .25 -> continue to subtract
// * is .12 > .1 -> continue to subtract
// // loops ends at 0

// */


// // 1.89 = .25 
// // dollar 1 == .25*4
// // 5 = 5*.24
// // 89 - .25 - .25 
// // .14

// const justinsCoins = str => {
//   // edge
//   if(typeof str !== "string") return undefined;
//   if(str.length === 0) return 0;


// 	let coins = {'Q':0,'D':0,'N':0,'P':0};
// 	let coinValues = {'Q':.25,'D':.1,'N':.05,'P':.01};

// 	// let counter = Array(4).fill(0);

// 	let coinsArr = [.25,.10,.5,.01];
// 	let num = Number(str);

// 	let i=0;

//   while(num >0) {

// // checking for max q - .89
// 		if(num > coinsArr[i]){
// 			while(num > coinsArr[i]){	
// 		    num = num - coinsArr[i];
// 		    counter[i]++
// 			}
// 		}
// 		i++

// 			// increment 1 penny

//   return coins;

// }

// console.log(justinsCoins('5'))

// // think about physical world




// input = amount, allowed coins to use
// 
// permutations = 10 cents,(5, 1) = 2N, 10P, 5N & 5P
// 2, (3,1,5) = 
// 7, (3,5) 
// edge: return 0 if input2 > input1
const solution = str => {

    if (typeof str !== "string") return undefined;
    console.log('hi')
    if (str.length === 0) return 0;

    let coinCounter = { 'Q': 0, 'D': 0, 'N': 0, 'P': 0 };
    let coinValues = { 'Q': 25, 'D': 10, 'N': 5, 'P': 1 };
    
    //num[0] = str[0]
    //coinCounter[Q] = num*.25
    
    let num = parseInt(parseFloat(str) * 100);

    Object.keys(coinValues).forEach((key) => {
        // console.log(key, coinValues[key])
        while (coinValues[key] <= num) {
            num -= coinValues[key]
            console.log(num)

            coinCounter[key] += 1;
            if (num === 0) {
                break;
            }
        }
    }
    )

    return coinCounter;
}
let answer = solution('5.21')
// solution('45.2')
console.log(answer)










