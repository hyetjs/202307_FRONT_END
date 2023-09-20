const arr = ["김성용", "짱구", "마이멜로디"];
arr.push("해피캣");
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift("쿠로미");
console.log(arr);
arr.shift();
console.log(arr);

// 만약에 arr에 쿠로미가 없으면 실행시켜라
// 부정연산자를 통해 쿠로미가 없으면 false -> true로 바꾸어서 조건문 실행
if (!arr.includes("쿠로미")) {
  arr.push("쿠로미");
}
console.log(arr);
console.log(arr.indexOf("마이멜로디"));
console.log(arr.indexOf("짝귀"));

if (!arr.indexOf("쿠로미") < 0) {
  arr.push("쿠로미");
}

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const arr3 = arr1.concat(arr2);

console.log(arr3);

// slice, splice, split, join

const apart = ["짱구", "오수", "신혼부부", "훈이", "스폰지밥", "징징이"];
// apart.slice(start,end)
// start -> index, end -> index + 1
const arr4 = apart.slice(3, 5);
// end는 생략이 가능하며 end가 없을 경우 마지막까지 모두 가지고 옵니다
// start부터 마지막 인덱스까지
console.log(arr4);
const arr5 = apart.slice(-3, -1);
// -를 붙이면 마지막 인덱스부터 -1로 계산
// es2020 apart[apart.length-1] -> apart.at
console.log(arr5.at(-1));
console.log(arr5[arr5.length - 1]);

// apart.splice(start, count, item)
apart.splice(3, 2, "배고파요", "졸려요","추워요");
console.log(apart);

const phone = '010-1234-1234'
phone.split(''); // ['0','1','0',...]
const splitPhone = phone.split('-'); // ['010','1234','1234']
const hashedPhone = splitPhone[0] + '****' + splitPhone[2]
// 010****1234
splitPhone[1] = "****" // ['010','****','1234']
console.log(splitPhone.join('-')) // 010-****-1234

// split() -> ()안에 들어간 요소를 기준으로 자릅니다 -> 배열화
// join() -> ()안에 들어간 요소를 배열의 요소 사이에 넣습니다 -> 문자열화

// 좋지 않은 공고와 좋은 공고

// stack에 대한 명시
// 개발 문화
// 팀원 규모, 퇴사율, 평가, 자본현황, 투자 라운드
// 로켓펀치, 사람인, 잡코리아, 접핏, 원티드
// front, react, 신입 키워드 위주로 검색
