// let student1 = {
//     name:"Dev",
//     class:"12",
//     age:"18",
//     section:"A",
//     address:{
//         pincode:"61761",
//         city:"jaipur"
//     }
// }

// // let student2 = student1
// // student1.name = "Manny"

// let student2 = {...student1}
// // let student2 = Object.assign({},student1)

// student1.name = "Manny"
// student2.name = "Kizie"


// console.log(student1)

// console.log(student2)



// let student1 = {
//     name:"Dev",
//     class:"12",
//     age:"18",
//     section:"A",
//     address:{
//         pincode:"61761",
//         city:"jaipur"
//     }
// }

// let student2 = {...student1}

// student1.address.city = "Ajmer"
// student1.name = "Manny"
// console.log(student1)
// console.log(student2)


// let student2 = JSON.parse(JSON.stringify(student1))

// student1.address.city = "Sambhar"

// console.log(student1)
// console.log(student2)


// let product1 = {
//     productName : "Iphone",
//     productPrice:"$567",
//     productRating:"4.6",
//     address:{
//         city:"Jaipur",
//         pincode:"5678"
//     }
// }


// let product2 = product1

// product1.productName = "Samsung"

// let product2 = {...product1}

// product1.productName = "Samsung"
// product2.productName = "Mi"
// product1.address.city = "Ajmer"

// console.log(product1)
// console.log(product2)

// let product2 = JSON.parse(JSON.stringify(product1))

// product1.address.city = "Ajmer"

// console.log(product1)
// console.log(product2)

// let _ = require ("lodash")

// let product1 = {
//     productName : "Iphone",
//     productPrice:"$567",
//     productRating:"4.6",
//     address:{
//         city:"Jaipur",
//         pincode:"5678"
//     },

//     allDetails: function (){
//         console.log( "ProductName :- " +this.productName + " ProductPrice :- " + this.productPrice)
//     }

// }

// // let product2 = JSON.parse(JSON.stringify(product1))

// let product2 = _.cloneDeep(product1)

// console.log(product1)
// console.log(product2)
// product1.allDetails()






