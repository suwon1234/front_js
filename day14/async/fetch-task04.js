
// // https://jsonplaceholder.typicode.com/users
// // city를 가져와서
// // 모두 대문자로 바꾸고,
// // 알파벳 중 A의 개수를 세서 콘솔에 출력
// const getCity=async ()=>{
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const datas  = await response.json();
//   return datas;
// }

// getCity()
// .then((result)=>result.map((city)=>city.address.city.toUpperCase())).then((results)=>results.map((data)=>{
//   let totalA=0;
//   for(let i=0;i<data.length;i++){
//     if(data[i]==="A"){
//       totalA++;
//     }
//   }
//   return totalA

// }))
// .then((totalA)=>console.log(totalA))




// // 다른 방법

// getCity()
// .then((datas)=>datas.map((data)=>data.address.city.toUpperCase()))
// .then((datas)=>datas.join("").split(""))
// .then((datas)=>datas.filter((data)=>data==="A").length)
// .then(console.log)
const getTodos=async()=>{
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const datas=await response.json();
  return datas;
}
getTodos()
  .then((result)=>result.slice(0,100))
  .then((total)=>total.filter((completed)=>completed.completed="true"))
  .then((data)=>data.map((title)=>title.title))
  .then((title)=>title.map((name)=>console.log(name)))