let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString()) //only date in readable
// console.log(myDate.toLocaleString())  //date and time in readable

let myCreatedDate = new Date(2023, 0, 26)
console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log((myTimeStamp-myCreatedDate.getTime()).toLocaleString());
