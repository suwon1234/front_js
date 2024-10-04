//연산자
//후위연산자 : x++  , 전위연산자 : ++x
// let data=100;
// console.log(data++)

// data--;
// console.log(data)


// let data2 =true;
// console.log(!data2)



//이항 연산자
// +
// let str1="오늘은 자바 스크립트 2일차😁";
// let str2="너무 재미있다";
// let num1=8.16;
// let num2=2024;
//죄결합성에 의해 연산후 연결된다
// console.log((num1,num2,str2));


// "/" : 나누기 연산자
// let num3 = 30;
// let num4 =4 ;
// console.log(num3/num4)
//" % " : 나머지 연산자
// console.log(num3%num4)


// 누적 복합 연산자
// +=, -=
// let data5 =100;
// data5+=100;
// console.log(data5)

// let data6="안녕";
// let data7="하세요";
// data6+=data7;
// console.log(data6);


// 5. 관계 연산자
// ==, ===
// 

// let data8 = 100;
// let data9 = "100";
// let data10 = 101;
// console.log(data8 === data9)
// console.log(data8 == data10)


//6. 논리 연산자
// 값이 있으면 true 값이 없으면 false
// let data = 0;
// || : 앞에 값이 false면 뒤에 있는 값이 출력됨
// false가 아닌데 false로 취급하는 값 --> 0, "", 0.0
// console.log(data || 20);


//&& : 앞에 값이 false면 뒤에 문장을 실행하지 않는다.(성능 향상을 위해)
// let data1=0;
// 10 == 11 && ++data1;
// console.log(data1)


//삼항 연산자( 조건식 ? true : false )

// 10 == 11? "같습니다" : "아닙니다 ";
// console.log(10 == 11? "같습니다" : "아닙니다 ");

// let data1 ="";
// let data2 = 20;

// let data3=data1 + data2 ? "정답" : "거짓";
// console.log(data3);

// false가 아닌데 false로 취급되는 값
console.log(Boolean(100))
console.log(Boolean(" "))

console.log(Boolean(""))
console.log(Boolean(NaN))
console.log(Boolean(null))
console.log(Boolean(undefined))
