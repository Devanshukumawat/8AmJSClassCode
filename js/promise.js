// fetch("http://dummy/product/1").then().catch().finally()



// const MyPromise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Async Task complete")
//             reject()
//         },2000)
// })

// MyPromise.then((data)=>{
//     console.log("Response Promise...!")
// })

// MyPromise.catch((error)=>{
//     console.log("Error...!")
// })

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async Task ");
//     let value = false;
//     if (value) {
//       resolve({
//         name: "Devanshu",
//         age: "18",
//       });
//     } else {
//       reject("Error 404 Data Not found");
//     }
//   }, 2000);
// }).then((data) => {
//   return data.name
// }).then((userName)=>{
//     console.log("UserName :- "+userName)
// }).catch((error)=>{
//     console.log(error)
// })


// let myPromise = new Promise((resolve,reject)=>{

//   setTimeout(()=>{
//     console.log("Async task...!")
//   },2000)

//   let value = true

//   if(value){
//     resolve({
//       product:"Iphone"
//     })
//   }

//   else{
//     reject("Error...! 404 Not found")
//   }

// })

// async function mydata(){
//     let data =  await myPromise
//     // let result = await data.json()
//     console.log(data)
// }

// mydata()



// async function myData(){
//     let data = await fetch("https://dummyjson.com/products/1")
//     let result = await data.json()
//     console.log(result)
// }

// myData()



// fetch("https://dummyjson.com/products/154567").then((data)=>{
//   return data.json()
// }).then((result)=>{
//   console.log(result)
// }).catch((error)=>{
//   console.log(error)
// })



// fetch("https://jsonplaceholder.typicode.com/todos/").then((data)=>{
//   return data.json()
// }).then((result)=>{
//   console.log(result)
// }).catch((error)=>{
//   console.log (error)
// })



// async function myData(){
//     let data = await fetch("https://dummyjson.com/products/134567")
//     let result = await data.json()
//     console.log(result)
// }

// myData()





let myPromise = new Promise((resolve,reject)=>{

  setTimeout(()=>{
    console.log("Async task...!")
  },2000)

  let value = true

  if(value){
    resolve({
      product:"Iphone"
    })
  }

  else{
    reject("Error...! 404 Not found")
  }

})



async function add(){
    


    try {
        let data = await myPromise
    console.log(data)
    } catch (error) {
        console.log(error)
    }
}

add()











































