// email 10개만 가져옴 --> slice 사용
// 1번 문제
// https://jsonplaceholder.typicode.com/comments
// email 10개만 가져온 후 email에서 아이디만 가져오기
// ex) ["Eliseo@gardner.biz"] => ["Eliseo"]
// 아이디만 출력



// 2번 문제
// https://jsonplaceholder.typicode.com/users
// 이름만 가져와서 이름을 거꾸로 뒤집어서 출력하기
// ["Leanne Graham", ...] => ["maharG ennaeL", ...]



const getEmail=async ()=>{
  const response=await fetch("https://jsonplaceholder.typicode.com/comments")
  const datas=await response.json();
  return datas;
}
getEmail().then((result)=>result.slice(0,10)).then((email)=>email.map((email)=>email.email.split("@").shift())).then((email)=>email.forEach((email)=>{console.log(email)}))

const getName=async ()=>{
  const response=await fetch("https://jsonplaceholder.typicode.com/users")
  const datas=await response.json();
  return datas;
}
getName().then((result)=>result.map((name)=>name.name.split("").reverse().join(""))).then((name)=>console.log(name));