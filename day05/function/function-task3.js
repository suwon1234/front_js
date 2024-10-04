// 1) 입력받은 3개 중 홀수만 모두 더해주는 함수
// 2) 입력받은 수까지 반복 후 짝수의 합을 모두 더해주는 함수
// 3) 입력한 값 중 a를 제거해주는 함수
// ex) "가a나a다a라a마a바" -> "가나다라마바"
// 4) 입력한 값이 실수인지 정수인지 알려주는 함수
// parseInt() : 정수로 바꿔주는 함수
// 5) 입력받은 문자를 뒤집어주는 함수
// ex) "abcdefg" -> "gfedcba";

function totalResult(num1,num2,num3){
  let result=0;
  if(num1%2!=0){result+=num1;}
  if(num2%2!=0){result+=num2;}
  if(num3%2!=0){result+=num3;}
  return result;
}
console.log(totalResult(1,3,3));

function totalPlus(randomNum){
  let total=0;
  for(let i=0;i<randomNum;i++){
    if(i%2==0){total+=i}
  }
  return total;
}
console.log(totalPlus(20));

function deleteNum(str){
  let result="";
  for(let i=0; i<str.length;i++){
    if(str.charAt(i)=="a"){
      continue;
    }
    result+=str.charAt(i);
  }
  return result;

}
console.log(deleteNum("banana"));





// 만약에 정수로 바꾸어준거하고 원래문자하고 같으면 정수이고 같지 않으면 실수이지 않을까?
function intNum(num4){
  if(parseInt(num4)===num4){return "정수입니다"}
  else{
    return "실수입니다";
  }
}
console.log(intNum(10.2));




// 반대로 반복하면 뒤에 있는 숫자부터 나오지 않을까?
function changStr(str2){
  let changstr=""
  for(let i=str2.length-1;i>=0;i--){
    changstr+=str2.charAt(i);
  }
  return changstr;
}
console.log(changStr("abcdefg"));