const a = 10
// console.log(a);

const balance = new Number(1000)
// console.log(balance);
// console.log(balance.toString())

const transaction = new Number(2000.5432)
// console.log(transaction.toFixed(2))  //gives 2 decimal 
// console.log(transaction.toPrecision(4)); // rounding off using decimal

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))

// ===================Math===================================

/*console.log(Math);
console.log(Math.abs(-3));
console.log(Math.round(4.43));  //wil round off,prints 4
console.log(Math.ceil(4.43));  // will prints 5, if it is floor prints 4
*/

console.log(Math.random());  // prints b/w 0-1
console.log(Math.floor((Math.random() * 10) + 1));

const min = 1
const max = 6
console.log(Math.floor(Math.random() * (max - min + 1) + min));  //can be used for ludo ;)