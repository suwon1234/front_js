// getTitles
// todos 에서 title만 5개 가져오기 
// 값으로 가져와서 데이를 "제목 : title" 내용으로 변경하여 출력하기

const getTitle=async ()=>{
  const response=await fetch("https://jsonplaceholder.typicode.com/todos");
  const datas= await response.json();
  return datas;
}
getTitle().then((reslut)=>reslut.slice(0,5)).then((title)=>title.map((name)=>`제목 : ${name.title}`)).then((name)=>console.log(name))