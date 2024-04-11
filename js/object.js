let Product1 = {
    ProductName:"Samsung_Tv",
    ProductPrice:"$567",
    ProductRating:"4.9",
    Address:{
        city:"Jaipur",
        pincode:303930
    },

    allDeatils:function (){
       console.log(`ProductName :- ${this.ProductName} ProductPrice:- ${this.ProductPrice} ProductRating :- ${this.ProductRating} Address :- ${this.Address.city}`) 
    }
}

// console.log(Product1.Address.city)

// const {ProductName,ProductRating} = Product1
// const { city } = Product1.Address

// console.log(ProductName)
// console.log(ProductRating)
// console.log(city)

Product1.allDeatils()