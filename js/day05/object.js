// 자바스크립트의 빌트인 객체 // 내장 객체
// Object, 빌트인 객체
const hyesun = {
  age: 20,
  height: 180,
  hobby: "코딩",
};

// heysun property (key,value)
// 객체의 key, value를 따로 확인할 때 사용
console.log(Object.values(hyesun));
console.log(Object.keys(hyesun));
console.log(Object.entries(hyesun));
console.log(Object.entries(hyesun)[0][0]);
// 다차원 배열형태로 반환
// 배열 안에 요소로 배열이 존재
