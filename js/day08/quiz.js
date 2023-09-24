// lotto

/* 
1. 구현이랑 설계를 해야한다, 한국어로 먼저 설명하 듯이, 구글링이 가능하도록
2. 출력 값을 통해 입력 값을 예상
*/

/* 
output - 1등, 2등, 3등, 4등, 5등, 미당첨 -> 경우에 따라서 console.log
                                          -------------- 분기점 ---- if, switch

         맞춘 숫자의 갯수
         정답, 사용자 입력 값
         로또 7자리 ---------- 숫자가 들어간 길이가 7인 배열
         보너스 숫자 - 마지막 자리

input - 정답, 입력 값 ------> [?, ?, ?, ?, ? ,? ,?]
                            ------------------------ 수동, 자동
                                                           ---- 랜덤생성


배열에 겹치지 않는 1~45의 랜덤 숫자로 이루어진 요소
[1~45, 1~45, 1~45, 1~45, 1~45, 1~45, 1~45]

#1. 길이가 7인 배열을 생성, 빈배열을 생성
#2. 1~45 랜덤 숫자 생성
#3. 배열을 순회하여 길이가 7일 때까지 반복
#4. 똑같은 번호가 배열에 포함되어 있을 때는 포함시키지 않는다, 중복된 요소를 허용하지 않는다
    자바스크립트 배열 내 중복된 요소를 제거하거나 중복된 요소는 추가하지 않는 방법
*/

function generatedLottoNumber() {
  const lottoNumbers = [];
  // for, while
  // for(;lottoNumbers.length < 7;){
  // }

  // new Set()
  while (lottoNumbers.length < 7) {
    // 1~45
    const randomNumber = Math.floor(Math.random() * 45 + 1);

    if (!lottoNumbers.includes(randomNumber)) {
      lottoNumbers.push(randomNumber);
    }
  }
  return lottoNumbers;
}

function lottery(userNumbers) {
  let rank;
  let winningCount = 0;
  let winningNumberArray = [2, 3, 45, 12, 31, 17, 27];
  let bounsNumber = userNumbers.pop();
  // pop -> 원본 배열의 마지막 제거
  // 반환 값 -> 제거한 값

  /* 
            보너스를 제외한 로또번호 = 마지막 인덱스를 제외한 배열
            보너스 번호 = 마지막 인덱스
      
            요구사항 분석 
            1. 로또번호 6개를 모두 맞추면 1등
            2. 로또번호 5개 + 보너스 2등
            3. 로또번호 5개 + 보너스 제외 3등
            4. 로또번호 4개 + 보너스 제외 4등
            5. 로또번호 3개 + 보너스 제외 5등
          */

  /* 
          [?, ?, ?, ?, ?, ?, ?] - userNumbers
          winningNumberArray
          
          userNumbers의 각 요소가 winningNumberArray에 포함되어 있는지 확인
          배열의 요소가 다른 배열의 요소에 포함되어 있는지
      
          순회 -> forEach, for..of
          포함되어있는지 검사 -> includes
          */

  // winningCount = userNumbers.reduce((sum, el) => {
  //   if(winningNumberArray.includes(el)){
  //     sum++
  //   }
  // }, 0)

  for (let number of userNumbers) {
    if (winningNumberArray.includes(number)) {
      winningCount++;
    }
  }

  switch (winningCount) {
    case 6:
      rank = 1;
      break;
    case 5:
      if (winningNumberArray.includes(bounsNumber)) {
        rank = 2;
      } else {
        rank = 3;
      }
      break;
    case 4:
      rank = 4;
      break;
    case 3:
      rank = 5;
      break;
    default:
      rank = "미당첨";
      break;
  }
  return rank;
}

module.exports = {
  lottery,
  generatedLottoNumber,
};
