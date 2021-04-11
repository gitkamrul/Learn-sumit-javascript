

let age = 18;
// LongHand operator 
if(age>18){
   console.log("Adult");
}else{
   console.log("child")
}
// result: child 

// shorthand Opeartor or Ternery Operator 
console.log(
   (age>18)? "adult":"child"
)

// result: child 

// TErnery opwerator example 

console.log(
   (age>18) ? "adult": (age<10) ? "child":"young"
   )

   // result: young 

