// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);



// Reference ( Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "doga"]
let myObj = {
    name : "Anshul",
    age : 21
}

const myFunction = function(){
    console.log("Hello")  
}