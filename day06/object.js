// let user = {
//   name : "박성진",
//   age : 20,
//   height : 200,
//   mbti : "isfp"
// };


// user.money=20000;


// let user2=new Object();//{}

// console.log(user["mbti"])

// const post = {
//   id : 1,
//   title : "오늘은 즐거운 금요일 또 공부중~",
//   content : "자바스크립트 객체 연습하면서 공부하는 프론트엔드",
//   name : "홍길동"
// }
// post.title="불금에는 치킨";
// console.log(post.title)


// const products={
//   product1 : "지우개",
//   product2 : "키보드",
//   product3 : "마우스",
//   product4 : "노트",
//   product5 : "연필",
//   product6 : "공책",
// }
// // 향상된 for문, 빠른 for문  ----> for in, for of
// for(let i in products){
//   console.log(i)

// }


// const user ={
//   user1 : {
//     name : "홍길동",
//     age : 20,
//     point : 3000
//   },
//   user2 : {
//     name : "이순신",
//     age : 30,
//     point : 5000
//   },
//   user3 : {
//     name : "장보고",
//     age : 40,
//     point : 10000
//   }
// }
// let result=0;
// for(let i in user){
//   result+=user[i].point
// }
// console.log(result)

const user1= {
  name : "홍길동"
}
const user2= {
  name : "이순신"
}
const user3= {
  name : "장보고"
}
const user4= {
  name : "김철수"
}
const user5= {
  name : "김영희"
}
const user6= {
  name : "휜둥이"
}

// 프로토타입(Prototype)
// 객체 생성자 함수에 의해 생성되는 객체들이 공유하는 속성과 메소드를 저장하는 특수한 개체
function User(name){
  this.name=name;
}

const user7=new User("홍길동")
const user8=new User("이순신")
console.log(user7)
console.log(user8)


