

// Normal function for javascript 

function  add(a,b){
  return a+b;
}


// First for our function It must be written 
let print = () => console.log("arrow function");


// Fat arrow function example 
let add2 = (a,b) => {
    return  a+b
}

// In a more small size
let add3 = (a,b)=> a+b;


// Es6 fat arrow function 

// old javascript version code  this solve method 
let javascript = {
   name:"javascript",
   libraries:['React', 'Angular', 'vue'],
   printlibries:function(){
      let self = this
      this.libraries.forEach(function(a){
         
         console.log( ` ${self.name} loves  ${a}`);
      })
   }
}
javascript.printlibries();


// this problem solve simple es6 code 

// otherwise solver problem es6 writting code 
let javascript1 = {
   name:"javascript",
   libraries:['React', 'Angular', 'vue'],
   printlibries:function(){
      this.libraries.forEach((a)=>{
         
         console.log( ` ${this.name} loves  ${a}`);
      })
   }
}
javascript1.printlibries();





