const generatedMockPosts = require('./module')
// exports된 모듈을 require(import - 참조) 하는 것 변수명은 마음대로
// 모듈 -> 파일이 다른 함수, 변수, ...etc


// 배열인지 아닌지 검사
console.log(Array.isArray([1, 2, 3]));

//length만으로 배열인지 아닌지 확인이 불가
//배열이 아닌 경우는 length가 없기 때문입니다
if (Array.isArray("a")) {
} else {
}
const obj = {
  0: "a",
  1: "b",
  length: 2,
};
const arr = Array.from(obj);
console.log(arr); // [a,b]

const arr2 = Array.from({ length: 5 }); // 길이가 5인 비어있는 배열이 생성
console.log(arr2);
const arr3 = Array.from({ length: 5 }, (el, index) => {
  return 0;
});
console.log(arr3);
// 여러분이 설계한 구조에서 필요한 길이만큼 생성해야하는 배열이 있을때 사용

// Array().fill().map()
// 함수 표현식의 {}과 객체 표현식의 {}이 겹침으로써 return 생략이 불가
// /이럴 경우 함수 표현식 부분의 다를 ()로 바꿔주면 return 생략이 가능
// 리턴하는 값이 하나의 실행문이라면 return을 생략하는게 가독성이 좋습니다.
// 그러나 리턴하는 값외에 로직이 있다면 return을 생략할 수 없음
// + ealry return에서도 return은 탈출문이기 때문에 생략하면 안됨, {}는 생략 가능

console.log(generatedMockPosts(10));

// 모듈화

