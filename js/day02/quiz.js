/* 
이름: 여러분들의 성함 ----> 변수 / 상수
국어: 80점
수학: 70점
영어: ..점
탐구: ..점
평균
학점

이 네가지의 점수의 평균을 구하여
90점 이상이면 a학점
80점 이상이면 b학점
70점 이상이면 c학점
그 외 F학점

if문 사용
console.log()
OOO님의 이번학기 성적인 O학점 입니다.
*/
//console.log에 문자열과 함께 변수를 사용하는 방법
// let name = "김성용";
// let grade = "A";
// console. log (" 김성용님의 이번 학기 성적은 A학점 입니다. ");
// // 1 "+"
// console. log (name + "님의 이번학기 성적은" + grade + "학점 입니다. ");
// // 2 "`"
// console. log (`${name}님의 이번학기 성적은 ${grade}학점 입니다`);
// // 3 ","
// console. log (name, "님의 이번학기 성적은", grade, "학점 입니다. ");

let name = "최혜선";
let korean = 90;
let math = 80;
let english = 80;
let research = 80;
let score = (korean + math + english + research) / 4;
let grade;
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "F";
}
console.log(`${name}님의 이번학기 성적은 ${grade}학점 입니다`);

//풀이
//입력 -> 연산 -> 출력
//출력 -> console.log(`${name}님의 이번학기 성적은 ${grade}학점 입니다`);
//입력 -> name, grade(-> math, kor, tam,eng -> avg)
//avg -> 90,80,70 분기가 생성
//#1. 문제 합산의 평균 값을 구한다.
//#2. 합산 평산된 평균 결과에 따라 학점의 분기를 생성한다
//90,A 80,B 70,C F

//한글 설계시에 주의할 점은 구글링이 가능하도록 최소한의 낮은 레벨의 형태로 작성할 것

