function lonelyinteger(a) {
    // contraints and edge cases
  // length of array must be between 1 and 100 exclusive 
  if(a.length < 1 || a.length >= 100) return '';
  if(a.length % 2 !== 1) return '';

  let counter = {};
  let key;

  for(let i=0; i<a.length; i++){
    let currentNum = a[i]; // current num
    // console.log(a[i])
    

    if(counter[currentNum] === undefined){
      counter[currentNum] = 1;
      
    }else{
      counter[currentNum] += 1;
      
    }
  }
  key = Object.keys(counter).find(key => counter[key] === 1);
return Number(key)
}

let b = [1,2,3,4,1,2,3]

// let c = [1,2,3,4] // even
// let d = [1,2,101,4] // elements 

// lonelyinteger(b)
console.log(lonelyinteger(b))

// console.log(lonelyinteger(c))