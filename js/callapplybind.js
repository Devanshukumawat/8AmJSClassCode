// let obj1 = {
//     product:"I-Phone",
//     Price:"$568",

//     Details: function(){
//         console.log("Product :- "+this.product + " Price :- " + this.Price)
//     }
// }


// // obj.Details()

// let obj2 = {
//     product:"Samsung",
//     Price:"$567"
// }


// obj1.Details()
// obj1.Details.call(obj2)



let Deatils = function(City,pincode){
    console.log("Product :- "+this.product + " Price :- " + this.Price + " City:- "+City+pincode)
}

let obj1 = {
    product:"I-Phone",
    Price:"$568",  
}

let obj2 = {
    product:"Samsung",
    Price:"$6778"
}

// Deatils.call(obj1,"JAipur")
// Deatils.call(obj2,"Ajmer")


// Deatils.apply(obj1,["jaipur","56789"])

let obj1Fun = Deatils.bind(obj1,"Jaipur","6789")

// console.log(obj1Fun)
// obj1Fun()

let obj2Fun = Deatils.bind(obj2,"Ajmer","567890")

obj2Fun()




let product = [
    {
        productName : "Iphone",
        productPrice:"$567",
        productRating:"4.5"
    },
    {
        productName : "Samsung",
        productPrice:"$517",
        productRating:"4.1"
    },
    {
        productName : "Mi",
        productPrice:"$512",
        productRating:"3.6"
    },
    {
        productName : "Vivo",
        productPrice:"$89",
        productRating:"4.2"
    }
]


// let productN = product[0].productName

// console.log(productN)


product.map((value,index)=>{
   const {productName,productPrice,productRating} = value

   console.log(productPrice)


}
)


