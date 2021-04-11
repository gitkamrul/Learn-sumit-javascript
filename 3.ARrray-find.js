var number = [1,2,3,4,5,6,87,9,8];

let result = number.find(function(currentvalue, currentINdex, arr){
   return currentvalue>4
});
console.log(result);
// result : 5
