// function add(a,b,callback){
//     let c = a+b
//     console.log(c)
//     callback()
// }

// function multi(){
//     let x = 8*9
//     console.log(x)
// }

// function divide(){
//     let y = 8/2
//     console.log(y)
// }



// add(8,8,multi)

// add(9,8,divide)


function multi(){
    let x = 8*8
    console.log(x)
}

function divide(){
    let y = 9/3
    console.log(y)
}

// function add(a,b){
//     let c = a+b
//     console.log(c)
//    multi()
//    divide()

// }

// add(8,8)
// add(6,6)


function add(a,b,callback){
    let x = a*b
    console.log(x)
    callback()
}

add(9,9,multi)

