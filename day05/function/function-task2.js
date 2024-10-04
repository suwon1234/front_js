// 값을 2개 전달 받아서 큰 값, 작은 값을 알려주는 함수

// 정수를 넘기면홀수 인지, 짝수인지 알려주는 함수

// 0,1 를 머구잡이로 5개 전달했을떄 0과 1의 개수를 알려주는 함수


// function getNum(numBig,numSmall){
//   if(numBig>numSmall)
//     return numBig;
//   else if(numBig==numSmall){
//     return "같습니다";
//   }
//   else{
//     return numSmall;
//   }
// }
// console.log(getNum(5,2));

// function selectNum(num1){
//   if(num1%2==0){
//     return "이 정수는 짝수 입니다";
//   }
//   else{
//     return "이 정수는 홀수 입니다";
//   }
// }
// console.log(selectNum(3));


// function randomNum(a,b,c,d,e){
//   let countZero=0;
//   let countOne=0;
//   if(a==0)countZero++;
//   else if(a==1)countOne++;
//   if(b==0)countZero++;
//   else if(b==1)countOne++;
//   if(c==0)countZero++;
//   else if(c==1)countOne++;
//   if(d==0)countZero++;
//   else if(d==1)countOne++;
//   if(e==0)countZero++;
//   else if(e==1)countOne++;
//   console.log(`0의 개수는 ${countZero} 1의 개수는 ${countOne}`);
// }
// randomNum(0,0,0,0,0);


const getCount = (num1,num2,num3,num4,num5)=>{
  let countZero=5;
  let countOne=0;

  if(num1){countOne++}
  if(num2){countOne++}
  if(num3){countOne++}
  if(num4){countOne++}
  if(num5){countOne++}
  countZero-=countOne;
  return `0의 개수 ${countZero} 1의 개수 ${countOne}`;
}
console.log(getCount(0,1,0,1,0));