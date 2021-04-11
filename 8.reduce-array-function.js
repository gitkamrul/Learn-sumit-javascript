
let arr = [1,2,3,4,5,6,7,8,9];
let result = arr.reduce(function(curr,prev){
   return curr+prev;
},0)
console.log(result)
// result: 45