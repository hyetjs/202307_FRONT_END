const menus = [
  { title: "상품 목록", isToggle: false },
  { title: "상품 목록", isToggle: true },
  { title: "상품 목록", isToggle: false },
];
const everyToggledMenus = menus.every((menu) => menu.isToggled);
console.log(everyToggledMenus); // false
const someToggledMenus = menus.some((menu) => menu.isToggle);
console.log(someToggledMenus); // true

const sortArr = [5, 3, 1, 2, 4];
sortArr.sort();
console.log(sortArr);
// 유니코드로 계산 - 전 세계의 모든 문자와 숫자에 대해 코드로 기준하는 일종의 국제 표준
// => 다른 코드로 ㄱㅖ산되는구나 그래서 결과값이 다르구나 -> 그럼 어떻게?

sortArr2.sort((a, b) => a - b);
console.log(sortArr2);
