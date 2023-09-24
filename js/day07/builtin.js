
const str = 'hello';
str.charAt(4) // o
str.concat("마이멜로디") // hello 마이멜로디
str.indexOf('e') // 1

const date = new Date();
console.log(date)
console.log(date.getFullYear()) // 2023
console.log(date.getMonth()) // 0 ~ 11 (월)
console.log(date.getDate()) // 23 (일)
console.log(date.getDay()) // 6 (0:일요일, 6:토요일) (요일)

// 주의 2023-09-23T02:47:42.555Z html로 입력이 불가능
// string, number

date.toString() // 문자열
date.toDateString() // 시분초를 생략

console.log(date.toString()) // 현재 위치에 맞는 시간 -> Date에 timezone이 존재
console.log(date.toISOString()) // utc-0
console.log(date.toLocaleString()) // 현재 지역에 맞는 날짜와 시간으로 변환
console.log(date.toLocaleTimeString())

const thisYear = date.getFullYear() // 2023
date.setFullYear(thisYear - 1) // 2023 - 1
console.log(date.getFullYear) // 2022
// 날짜 끼리의 연산도 가능하다

// 있는지 없는지 확인, 모든 요소를 순회해서 변형
// includes, map
// for
// arr[i] === num 
// let result = t/f