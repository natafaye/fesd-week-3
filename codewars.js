
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

const reverseSeq = n => {
    let result = []
    
  //   for(let i = n; i > 0; i--) {
  //     result.push(i)
  //   }
    
  //   for(let i = 1; i <= n; i++) {
  //     result.unshift(i)
  //   }
    
    // cool and tricky map
    result = Array(n).fill("hello").map( (item, index) => n - index )
    
    return result;
  };
