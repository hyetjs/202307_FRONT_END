const lottoService = require("./quiz"); // quiz.js 파일을 가져옵니다.
// 로또 당첨 함수를 quiz2로 import,require(참조)하여
// 원하는 갯수 만큼 로또 7자리 번호를 생성하고 등수 맞추기
// 다차원 배열, 순회

const generatedLottoNumberArray = (count) => {
  return Array.from({ length: count }, () =>
    lottoService.generatedLottoNumber()
  );
  /*
    비어있는 count 갯수의 요소를 갖는 배열을 생성
    [ [1,2,3,4,5,6,7] ?, ?, ?, ?]
    [
    [generatedLottoNumber], 
    [generatedLottoNumber], 
    [generatedLottoNumber], 
    [generatedLottoNumber], 
    [generatedLottoNumber],
    ...
    ]
    */
};

const userNumbersArray = generatedLottoNumberArray(10);

for (let userNumbers of userNumbersArray) {
  const rank = lottoService.lottery(userNumbers);
  console.log(rank);
}
