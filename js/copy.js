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



let student1 = {
    name:"Dev",
    class:"12",
    age:"18",
    section:"A",
    address:{
        pincode:"61761",
        city:"jaipur"
    }
}

// let student2 = {...student1}

// student1.address.city = "Ajmer"
// student1.name = "Manny"
// console.log(student1)
// console.log(student2)


let student2 = JSON.parse(JSON.stringify(student1))

student1.address.city = "Sambhar"

console.log(student1)
console.log(student2)