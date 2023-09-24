
Math.random() // 0 ~ 0.9999999999999999999
Math.random() * 10 // 0 ~ 9.999999999999999
Math.random() * 10 + 1 // 1 ~ 10.9999999999999999
Math.floor(Math.random() * 45 + 1) // 1 ~ 45 -> 특정 범위의 랜덤 정수


/* 
  퀴즈 1번
  전화 번호가리기
  010-1234-1234 => 010-****-1234

  ex) 자바스크립트르 전화번호 가리기
  ex) 특정 기준으로 분리 -> 대체 ....

  퀴즈 2번
  로또 번호 맞추기
  랜덤 번호 생성 [1~45, 1~45, 1~45, 1~45, 1~45, 1~45, 1~45]
  input [?, ?, ?, ?, ?, ?, ?]

  중복 번호는 있어서 안됨 -> for, --> push [], includes, new Set()

  마지막 번호 = 보너스 번호
  로또 번호 3개 -> 5등
  로또 번호 4개 -> 4등
  로또 번호 5개 -> 3등
  로또 번호 5개 + 보너스 -> 2등 (분기)
  로또 번호 6개 -> 1등 --> count -> 순회 -> ++ -> pop, (filter, at(-1))
                      --> reduce

                      --> swtich --> if
*/



// 010-1234-1234 -> AS_IS
// 010-****-1234 -> TO_BE

// 아예 생각도 들지 않았다면 -> 90% 개념은 이해 -> x -> 방치
//                                              o -> 생각 -> 구현과 설계

// 4번째 인덱스에서 4개 만큼 제거하고 ****로 대체
// 문자열에서 특정 구간 다른 문자로 대체
// 배열에서 특정 구간 제거하고 다른 요소로 대체

// [010, 1234, 1234]
// [1] = ****
// 배열을 문자열화 (join)

function hashNumb(num){
  // const numberArry = Array.from(num)
  // numberArry.splice(4, 4, "****")
  // console.log(numberArry.join(""))

  const splitNumber = num.split('-');
  splitNumber[1] = "*".repeat(4);
  console.log(splitNumber.join('-'))
}
hashNumb("010-1234-1234")

//

/* 
output --> 1등, 2등, 3등
       --> 맞춘 갯수 -> 분기(swtich, if)]
       --> 2등은 bouns 숫자와 연관이 있다 -> 분기 (if)
       --> 정답, 입력 값 비교
       --> 정답 랜덤 숫자 7자리
       --> 입력 랜덤 or 사용자가 직접 입력
input
       --> 겹치지 않는 랜덤 숫자 7자리 or 사용자가 직접 입력
       --> [1, 2, 3, 42, 41, 21, 32] --> 사용자가 직접 입력 (o)
*/


function generatedLottoNumber(){
    // 1~45 랜덤 숫자
    // 중복을 허용하면 안된다
    // 중복 검사 -> 현재까지 작성한 숫자의 배열을 순회
    
    const lottoArray = []

    // for(let i = 0; lottoArray.length < 7; i++) {
    //   const random = Math.floor(Math.random() * 45 + 1)
    //   if(!lottoArray.includes(random)){
    //     lottoArray.push(random)
    //   }
    // }

    // 요소의 길이가 명확하지 않기 때문에 while 반복문을 사용
    // 초기식과 증감식이 관련이 없다 반복에, 특정 조건만큼 반복

    // new Set()
    // 자바스크립트 배열에서 중복 요소 삭제, 중복 요소 허용x

    while(lottoArray.length < 7){
      const random = Math.floor(Math.random() * 45 + 1)
      if(!lottoArray.includes(random)){
        lottoArray.push(random)
      }
    }

    return lottoArray
}

const lotto = generatedLottoNumber()
console.log(lotto)

// 화살표 함수도 잊지말자!
const lottery = (numberArr) => {
  // 요구 사항 분석
  // 정답
  // numberArr와 정답의 비교
  // 맞춘 갯수
  // 맞춘 갯수에 따라서 다른 결과
  // const winningNumberArray = [6, 17, 27, 30, 32, 38 ,15]
  const winningNumberArray = generatedLottoNumber()
  const bounsNum = winningNumberArray.pop()

  // const bousNum = winningNumberArray.at(-1)
  // const realWinningNumberArray = 
  //  winningNumberArray.filter((_, index) => index !== winningNumberArray.lenght - 1)

  let winningCount = 0;
  // 사용자가 인자로 전달한 로또번호 중 각 번호가 정답 번호에 포함되어 있으면 ++
  for(let num of numberArr){
    if(winningNumberArray.includes(num)){
      winningCount ++;
    }
  }

  let bounsFlag = false;
  if(numberArr.includes(bounsNum)){
    bounsFlag = true;
  }

  let rank;
  switch(winningCount){
    //...
    case 6:
      // if(bounsFlag) return rank = 2;
      // return rank = 1;
        if(bounsFlag) {
          rank = 2;
        } else {
          rank = 1;
        }
        break;
    case 5:
        rank = 3
        break;
    case 4:
        rank = 4;
        break;
    case 3:
        rank = 5;
        break;
    default:
        rank = "미당첨" 
  }
  console.log(rank)
}
lottery(lotto)


const webtoons = [
  {
    title: "마음의 소리",
    //....
    rank: 1,
    review: []
  },
  {},
  
]

const findToon = webtoons.find((toon) => toon.title === '마음의 소리')
findToon.rank = 2;