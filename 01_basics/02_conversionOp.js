let score = null

console.log(typeof(score))
score = (Number(score))
console.log(typeof(score))
console.log(score)

// "33" ==> 33, "33abc" ==> NaN, undefined ==> NaN, null ==> 0

let a = 0
a = Boolean(a)
console.log(a)
// 0 ==> false , 1 ==> true , "" ==> false, "sooraj" ==> true