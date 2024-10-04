// 1. 이름을 1번 출력해주는 함수

// function printName(){
//   console.log("이름")
// }
// printName( );


//2. 100이라는 값을 주는 함수

// function get100(){
//   return 100;
// }

// console.log(get100());


// 3. 두 수를 합쳐서 결과 값을 주는 함수
// a,b --> 매개변수
// function getAdd(a,b){
//   return a+b;
// }

// console.log(getAdd(10,20));


// function getName1(a,b){
//   return a+b;
// }
// function getName2(a,b){
//   console.log(b);
// }
// function getName3(a,b){
//   for(let c=0;c<10;c++){
//     console.log(b);
//   }
// }
// console.log(getName1("박","성진"));
// getName2("박","성진");
// getName3("박","성진");
//매개변수, 파리미터, 파람
//디폴트 파라미터
// function getAdd(a=0,b=0,c=0,d=0,e=0){
//   return a+b+c+d+e;
// }
// 함수의 사용은 값으로 봐야한다
// function getDouble(a=0,b=0,c=0){
//   return a*b*c;
// }
// function getPlus(a=0,b=0){
//   console.log(a+b);
// }
// console.log(getAdd(1,2,3,4,5));
// console.log(getDouble(2,2,2));
// getPlus(1,2);

// 사용자가 몇개를 입력할 지 모르는 상대에서 모든 값을 


// ⭐즉시 함수 ()() 일회성 함수 (이름이 없다)
(function(){
  console.log("선언과 동시에 사용")
})();

// 화살표 함수 ()=>{}(ES6)

// function addPrintNum(num1,num2){
    
// };
// const addPrintNum2 = (num1,num2) =>{};

