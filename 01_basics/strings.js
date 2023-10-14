const string = "Sooraj"
console.log(string)

console.log(string + ' Shetty')

console.log(`My name is ${string} Shetty`) // string interpolation
//Another type of declaring strings in js

const newName = new String("Sooraj Shetty")  //it has string len and many method.
//console.log(newName[0], newName.__proto__)
console.log('Length of string is ' , newName.length, newName.toUpperCase());
console.log(newName.charAt(2));

const firstString = newName.substring(0,6)
const SecondString = "  Vinu  "
console.log(firstString);
console.log(newName.slice(-5,4))
console.log(SecondString.trim());


const url = 'https://sooraj.com/sooraj%20shetty'
console.log(url.replace('%20' , '-'))
console.log(url.includes('sundar'));
console.log(url.split('/'));  //shows the strings in list which are seperated by '/'