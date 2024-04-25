// ()=>{

// }


// const myArray = [12,18,45,23,98,76,56,90,84,68]

// let myValue = myArray.filter((value,index)=>{
//     return value>50
// })

// console.log(myValue)

// setInterval(()=>{
//     console.log("You can repet any time")
// },2000)

// setTimeout(()=>{
//     console.log("ha ha ha i am a function")
// },5000)


let prompt = require ("prompt-sync")()
let promocode = {
    "MERN" : 20,
    "FIRST" : 50,
    "DEVANSHUSIR" : 80,
    "GRRAS" : 15
    }


let price = 18000
let promo = prompt("Enter Promocode Here :- ").toUpperCase()

let keys = promocode[promo]
let discount = price*keys/100

let finalPrice = price-discount

console.log(`You have to pay ${finalPrice} \u20B9`)


 


   