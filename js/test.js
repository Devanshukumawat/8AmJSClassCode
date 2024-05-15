// // ()=>{

// // }


// // const myArray = [12,18,45,23,98,76,56,90,84,68]

// // let myValue = myArray.filter((value,index)=>{
// //     return value>50
// // })

// // console.log(myValue)

// // setInterval(()=>{
// //     console.log("You can repet any time")
// // },2000)

// // setTimeout(()=>{
// //     console.log("ha ha ha i am a function")
// // },5000)


// let prompt = require ("prompt-sync")()
// let promocode = {
//     "MERN" : 20,
//     "FIRST" : 50,
//     "DEVANSHUSIR" : 80,
//     "GRRAS" : 15
//     }


// let price = 18000
// let promo = prompt("Enter Promocode Here :- ").toUpperCase()

// let keys = promocode[promo]
// let discount = price*keys/100

// let finalPrice = price-discount

// console.log(`You have to pay ${finalPrice} \u20B9`)


 
// const myArray = [10,20,30,40 ,50]


// for(i=0; i<myArray.length; i++){
//     console.log(myArray[i])
// }


// var  a = 10

// function add(){
//     console.log(a)
//     var a = 5
// }

// add()


// console.log(Hello())
// function Hello(){
//     return "Hello world"
// }


// function test(){
//     console.log(a)

//     if(true){
//         var a = 10
//     }

//     console.log(a)
// }

// test()


// function add(){
//     if(true){
//         var a = 5
//         let b = 10
//         const c = 15
//         console.log(a,b,c)
//     }

   
// }

// add()


// let prompt = require ("prompt-sync")()

// let num = prompt("Enter Number :- ")

// if(num>0){
//     console.log("Positive")
// }
// else if(num==0){
//     console.log("Zero")
// }
// else if(num<0){
//     console.log("Negative")
// }

//iife 

// function add(){
//     setTimeout(()=>{
//         console.log(a)
//         console.log(b)
//     },3000)

//     var a = 2
//     var b =12
// }

// add()


// (
//     ()=>{
//         setTimeout(()=>{console.log(1)},2000)
//         console.log(2)
//         setTimeout(()=>{console.log(3)},0)
//         console.log(4)
//     }
// )()

// let age = 10

// age > 10 ? console.log("Age is grater then 10")
// : age == 10 ? console.log("Age is equal to 10")
// : console.log("Invalid age")


let obj = {
    name:"Devanshu",
    class:"67",
    age:"78"
}


// let convertedData = JSON.stringify(obj)
// console.log(convertedData)

const converted = JSON.parse(JSON.stringify(obj))

console.log(converted)


// let objexample = {
//     "name":"Devanshu",
//     "class":"67",
//     "age":"78"
// }

// let convertform = JSON.parse(objexample)

// console.log(convertform)


// let alldata = []
   
// fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// .then(json => {
//     let data = JSON.stringify(json)
//      let all = alldata.push(data)
//      console.log(all)
// }
 
// )


// console.log(alldata)


            