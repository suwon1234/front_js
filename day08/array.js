// const array1= [10, 20, 30, 40, 50, 60]; // 참조 타입 

// console.log(array1[4])


// const array2 = new Array();
// const array3 = new Array(10).fill(false); // 길이를 알고 있을 때
// const array4 =  Array.of("1,2,3");

// console.log(array3);

// 길이를 확인

// console.log(array3.length)

// ⭐.split(), string 
// 전달된 매개변수를 기준으로 잘라서 배열로 리턴한다.
// 아무것도 전달하지 않으면 모두 자른다
// const phone = "010-9999-9999";
// let array5 = phone.split("-")
// console.log(array5)
// // .join(), array

// let phoneNumber=array5.join("");
// console.log(phoneNumber);

// ⭐.replace(바꾸고 싶은 값, 바뀌는 값), string ---->제일 먼저 만나는 값을 변경
// ⭐.replaceAll(바꾸고 싶은 값, 바뀌는 값), string ----> 다 바꿈

// let replaceNumber = phone.replace("9999","****");
// console.log(replaceNumber)

// 추가
// ⭐.push(), array
// 기존에 배열에 값을 마지막에 추가한다.
// const array1 =["장보고", "홍길동", "박성진"]
// array1.push("김철수")
// console.log(array1)

// ⭐.concat(), array
// 2개의 배열을 ⭐새로운 배열로 합쳐서 리턴한다.
// 값을 뒤에 추가하는 메서드
// const array2=["기석","병욱"];
// let array3=array1.concat(array2);
// console.log(array3)

// ⭐.unshift(), array
// 맨 앞에 값을 추가하는 메서드
// array3.unshift("박성진")
// console.log(array3);


//  제거
// ⭐.pop()
// 맨 마지막의 요소를 추출, 마지막 값을 리턴
// array3.pop("병욱")
// console.log(array3)

// ⭐.shift(), array
// 맨 앞의 요소를 추출, 맨앞의 값을 리턴
// console.log(array3.shift())
// console.log(array3)

// ⭐.slice(startIndex, endIndex), array
// 얕은 복사 새로운 배열로 리턴한다
// 단 매개변수를 1개 전달하면 start부터 끝까지 가져온다
// console.log(array3.slice(0,2))
// console.log(array3.slice(-4,-1));

// ⭐.splice(startIndex, deleteCount, addItems), array
// const array4=[1,2,3,4,5,6,7,8,9,10];
// console.log(array4.splice(2,3))
// console.log(array4.splice(4,1,50))
// console.log(array4)

// 정렬
// 유니코드 정렬( sort )
// 무작위로 들어간 데이터 값을 정렬하는 함수
const array5 = [150,120,130,500,200,30,10,70,10,80];
console.log(array5.sort((a,b)=>a-b))// 앞의 값이 뒤에 값보다 크면 두 숫자는 교체

// .reverse 배열의 값을 반대로 바꾸어줌
const array6 = [150,120,130,500,200,30,10,70,10,80];
// console.log(array6.sort((a,b)=>a-b).reverse())

// -------------------------------------------------------------------------------------


// ⭐⭐배열의 고차함수⭐⭐
//⭐ .forEach((data, i, array)=>{}), 반복문
const array7 = [10,20,30,40];
// array7.forEach((data,i,array)=>{
//   console.log(array);
// })

// forEach를 사용하여 기존 값을 제곱으로 변경하기
// array7.forEach((data,i,array)=>{
//   array[i]*=array[i]
// })
// console.log(array7)

//⭐ .map()
// 반복을 통해 값에 접근하고, 새로운 배열로 return한다
//반드시 리턴값이 있어야 한다
// let result= array7.map((data,i,datas)=>{
//   return data+10;
// })
// console.log(result)
let result= array7.map((data,i,datas)=>{
  return data+10;  //중갈호 생략하여 return값을 생략가능--> data + 10 
})
console.log(result)


//⭐ .filter()
// 조건이 true인 값만 모아서 새로운 배열로 리턴한다
// 반드시 리턴 값이 필요하다
let result2=array7.filter((data,i,array)=>data%4==0)
console.log(result2);