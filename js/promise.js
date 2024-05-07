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

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async Task ");
    let value = false;
    if (value) {
      resolve({
        name: "Devanshu",
        age: "18",
      });
    } else {
      reject("Error 404 Data Not found");
    }
  }, 2000);
}).then((data) => {
  return data.name
}).then((userName)=>{
    console.log("UserName :- "+userName)
}).catch((error)=>{
    console.log(error)
})
