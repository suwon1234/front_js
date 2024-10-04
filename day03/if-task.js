
// 이름 : 성함
// 국어 : 80점
// 수학 : 70점
// 영어 : 90점
// 과학 : 20점

// 평균, 학점, 구하기
// if문을 사용해서 평균이 60점이면 합격, 60점 이하는 불합격을 출력하기

// 최종 문장
// OOO님의 이번 총점은 OO, 평균은 OO점으로 (합격 또는 불합격)입니다.



const name="철수";
const math=70;
const english=90;
const science=20;
const language=80;
let score=""

const result=math+english+science+language;
const average=result/4;

if(average>=60){
   score="합격";
}
else {
   score="불합격";
}

console.log(`${name}님의 이번 총점은 ${result}, 평균은${average}으로 ${score}입니다.`)




// const name = "김세환";
// let korScore = 80;
// let mathScore = 70;
// let engScore = 90;
// let scScore = 20;

// let totalScore = korScore + mathScore + engScore + scScore;
// let average = totalScore / 4;

// let pass = "합격";
// let notPass = "불합격";
// let cutline = average >= 60;
// let passingResult = cutline ? pass : notPass;
// let result = `${name}님의 이번 총점은 ${totalScore}, 평균은 ${average}으로 ${passingResult}입니다.`

// if(cutline){
//   console.log(result);
// }else{
//   console.log(result);
// }

// 평균, 총점, 구하기
// if문을 사용해서 평균이 60점이면 합격, 60점 이하는 불합격을 출력하기

// 최종 문장
// OOO님의 이번 총점은 OO, 평균은 OO점으로 (합격 또는 불합격)입니다.



// switch문

switch(2){
  case 1:
    console.log("1번");
    break;
  default:
    console.log("1번 아님");
    break;
}

