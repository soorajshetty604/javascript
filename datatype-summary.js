// primitive and refference( Non primitive)
//primitive ==> Number, bigInt,String,Symbol,null => object ,undefined
//non primitive ==> Array,object

let a = 1
let b = 1.1 //float is also considered as number
let c = null
let d; //undefined

let Id = Symbol('123')
let anotherId = Symbol('123')
console.log(Id === anotherId)  /* === means it wont consider another datatype,
        == means it will consider different datatypes and wont give expected result*/

let bigNumber = 4783247927n
console.log(typeof bigNumber)

let arr = ["Sooraj", "Vinu", "Vidya"]
let arr2 = ["Sooraj", "Vinu", 3]     
console.log(arr, arr2)

let myObj = {
    name:"Sooraj",
    age : 22
}                        //Object datatype

console.log(myObj)

const myFunc = function(){
    console.log("Hello World, Happy coding!!")
}
console.log(typeof myFunc)   // myFunc datatype is function only.
