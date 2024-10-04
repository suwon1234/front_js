// 전역 변수, 지역 변수

globalThis.x=10;
function f2(  ){
  let x=20;
  globalThis.x=30;
  console.log(x);
}
f2()
console.log(globalThis.x);
