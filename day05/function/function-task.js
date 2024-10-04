// .indexOf()  문자의 위치를 숫자로 나타냄
// "abcdefg".indexOf()
// .charAt() 숫자를 입력하면 그 번호에 있는 문자를 나타냄
// "abcdefg".charAt()
// 브론즈
// 어떤 값을 받으면 값을 출력해주는 함수
// 3개의 정수를 빼주는 함수

// 실버
// 홍길동을 n번 출력해주는 함수

// 골드
// 1~n까지 홀수만 출력해주는 함수
// 문자열을 입력받고 원하는 문자의 개수를 구해주는 함수
// ex) getCount("abcabc", "a") -> return 2

// 플레티넘
// 한글을 정수로 바꿔주는 함수 (일공이사 -> 1024)
// 정수를 한글로 바꿔주는 함수 (1024 -> 일공이사)

function getName(name1){
 return name1
}
console.log(getName("박성진"));


function getName2(a){
  let n=a;
  let m="홍길동"
  for(let i=0; i<n; i++){
    console.log(m);
  }
}
getName2(5);


function getNum(a=0,b=0,c=0){
  return a-b-c;
}
console.log(getNum(5,2,2));


function getOdd(a=0){
  let n=a;
  for( let i=0;i<n;i++){
    if(i%2!=0){
      console.log(i);
    }
  }
}
getOdd(10);




function getCount(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
          count++;
      }
  }
  return count;
}
console.log(getCount("apple", "p")); 







// function getChang(str2){
//   for(let i=0;i<str2.length;i++){
//     if(str2[i]=="일"){
//       str2[i]=1;
//     }
//     else if(str2[i]=="공"){
//       str2[i]=0;
//     }
//     else if(str2[i]=="이"){
//       str2[i]=2;
//     }
//     else if(str2[i]=="사"){
//       str2[i]=4;
//     }
//     }
//    return str2;
//   }
// console.log(getChang("일공이사"));


//한글을 정수로 바꾸어주는 함수
// const changeToInt=(hangle) =>{
//   let hangles="공일이삼사오육칠팔구";
//   for(let i=0;i<hangle.length;i++){
//     console.log(hangles.indexOf(hangle.charAt(i)));
//   }

// }
// changeToInt("공삼육칠");

// const changeToChar=(num) => {
//   let hangle="공일이삼사오육칠팔구";
//   for(let i=0;i<num.length;i++){
//     console.log(hangle.charAt(num.charAt(i)));
//   }
// }
// changeToChar("321");





