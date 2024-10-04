// 데이터 요청해서 콘솔에 users 출력하기
// users에 name만 콘솔에 출력하기

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>response.json())
.then((result)=>result.map((name)=>name.name))
.then((name)=>console.log(name))