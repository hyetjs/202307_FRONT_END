// //선언부 호이스팅 -> 평가 과정에서 먼저 수집
// console.log(a); // undefined
// var a = 5;
// console.log(a); // 5
// var a = 6;
// console.log(a); // 6 중복 선언 가능

// //console.log(b); // error ------- stop
// let b = 3;
// console.log(b); // 3

// let c = 5;
// console.log(c); // 5
// c = 7;
// console.log(c); // 7

// const d = 3 ;
// console.log(d); // 3
// d = 5; // error --------------- b
// console.log(d); // x

//중복과 재할당이 안되는 것이 헷갈립니다
//선언과 할당을 명확히 구분
//중복 선언 let c = 5, let c =7;
//재할당 let c = 5; c = 7;

console.log(3 !== 3);