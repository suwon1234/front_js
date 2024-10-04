// spread (ES6 문법)
// 1depth 깊은 복사
// 배열 객체

// const animals={
//   cat : "야옹이",
//   dog : "멍멍이",
//   cow : "소",
//   tiger : "호랑이"
// }

// const animals2 = {...animals, camel : "낙둥이"};
// console.log(animals)
// console.log(animals2)


const array = [1,2,3];
const array2= [4,5,6];
const array3= [7,8,9];

let numbers = [...array,...array2,...array3];
console.log(numbers)
