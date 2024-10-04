// 두 수를 더해서 출력하기
// const add =(num1,num2,callback)=>{
//   callback(num1+num2);
// }

// const print=(value)=>{
//   console.log(value);
// }

// add(20,30,print);


// 성과 이름을 받아서 출력해주는 함수




// 두 정수의 덧셈을 결과를 출력
// const add=(num1,num2,callback)=>{
//   callback(num1+num2);
// }
// const print=(value)=>{
//   console.log(value);
// }
// add(2,3,print);
// 두 정수의 곱셈 결과를 출력
// const mul=(num1,num2,callback)=>{
//   callback(num1*num2);
// }
// const print2=(value)=>{
//   console.log(value);
// }
// mul(3,4,print2);

// 성과 이름을 전달받아서 "00님 환영합니다"를 출력
// const getName=(name,pullname,callback)=>{
//   callback(name+pullname);
// }
// const print4=(pullName)=>{
//   console.log(`${pullName}님 환영합니다`);
// }
// getName("박","성진",print4);




// 두 수를 더하고 홀수인지 짝수인지 비교한 후 출력
// const add2=(num1,num2,callback)=>{
//   callback(num1+num2);
// }
// const isEven=(num3,callback)=>{
//   let result=num3%2==0? "짝수":"홀수";
//   callback(result);
// }
// const print3=(result)=>{
//   console.log(result);
// }
// ⭐⭐⭐add2(2,2,(result)=>{
//        isEven(result,print3)
// });


//-------------------------------------------------------------------------------------


// 두 정수의 곱셈을 구한뒤 결과에 2를 곱해서 출력
// 두 정수 의 값중 작은 값을 반환하여 출력
// 결제 상품이름과 결제상태를 전달 받아서 결제 상태가 true일경우 결제완료 false일 경우 결제 취소

const mul=(num1,num2,callback)=>{
  callback(num1*num2);
}
const plus=(num1,callback)=>{
  let result=num1*2;
  callback(result);
}
const print=(result)=>{
  console.log(result);
}
mul(2,2,(result)=>{
  plus(result,print);
})


const select=(num1,num2,callback)=>{
  if(num1>num2){callback(num1);}
  else if(num2==num1){callback ("수가 같습니다");}
  else{callback(num2);}
}
const print2=(result)=>{
  console.log(result);
}
select(5,4,print2);



const buy=(name="",state,callback)=>{
  let result=state=="true" ? "결제완료" : "결제 취소"
  callback(name,result);
}
const print3=(name,result)=>{
  console.log(`${name}은 ${result} 되었습니다`)
}
buy("사탕","true",print3);


const change=(str,callback)=>{
  let newstr=""
  for(let i=str.length-1;i>=0;i--){
    newstr+=str[i];
  }
  callback(newstr);
}
const print4=(newstr)=>{
  console.log(newstr)
}
change("안녕하세요",print4);


const add=(num,callback)=>{
  let result=0;
  for(let i=0;i<=num;i++){
    result+=i;
  }
  callback(result);
}
const collect=(result,callback)=>{
  if(result%5==0){
    callback("5의 배수입니다");
  }
  else{
    callback("5의 배수가 아닙니다");
  }
}
const print5=(result)=>{
  console.log(result);
}
add(12,(result)=>{
  collect(result,print5);
})


const add2=(callback)=>{
  let result=0;
  for(let i=0;i<101;i++){
    if(i%2==0){result+=i;}
  }
  callback(result);
}
const mul2=(result,callback)=>{
  callback(result*2);
}
const print6=(result)=>{
  console.log(result)
}
add2((result)=>{
  mul2(result,print6)
});

const select2=(num1,num2,callback)=>{
  if(num1>num2)callback(num1);
  else if(num1==num2)callback("같다");
  else{callback(num2);}


}
const total=(result,callback)=>{
  let sum=0;
  sum=result*2;
  callback(sum);
}
const print7=(sum)=>{
  console.log(sum);
}
select2(5,4,(result)=>{
  total(result,print7)
})