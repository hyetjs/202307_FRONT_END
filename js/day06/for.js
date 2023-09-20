const arr = [0, 1, 2, 3];
for (let i = 0; i < arr.length; i += 2) {
  console.log(arr[i]);
}
// 0, 1, 2, 3
// -,n
// 이터러블하지 않은 상황일 때도 사용이 가능

arr.forEach((el, index, origin) => {
  console.log((el, index, origin));
  // bacend data fetching
});
// 순서 보장 , 모든 요소를 순회, index를 사용할 수 있음

for (let el of arr) {
  console.log(el);
}
// 순서 보장x, 모든 요소를 순회, 요소의 값만 가지고 올 수 있음
// 배열의 모든 요소의 값만 필요할 때

const hyesun = {
  age: 20,
  height: 190,
};

for (let key in hyesun) {
  console.log(key);
  console.log(hyesun[key]);
}
// age 20, height 190
// 객체를 반복, 순서가 보장되지는 않습니다.
Object.keys(hyesun); // [age, height]
Object.values(hyesun); // [20, 190]
Object.entries(hyesun); // / [age, 20], [hieght, 190 ]
for (let [key, value] of Object.entries(hyesun)) {
  console.log(key, value);
}


// day 07 -> deep copy, shallow copy, spread operator, destructuring assignment
// day 08 -> built in object, dom, form, nodelist, classList
// day 09 -> bubbling, capturing, banner, menu, scroll, aos
// day 10 -> ajax, fetch, axios, promise, board
// day 11 -> context, closure, event loop, prototype, this (¥3)