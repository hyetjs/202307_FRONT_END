// setTimeout(callback, time)
// 특정 시간이 경과한 후에 실행

setTimeout(() => {
  console.log("3초가 지났습니다");
}, 3000);
console.log("시작");

// setInterval(callback, time)
// 특정 시간 마다 실행 ex) 자동 슬라이드 베너, 타이머
let time = 0;
setInterval(() => {
  time++;
  console.log(time);
  // renderTime(time)
}, 1000);
// setTimeout과 setInterval 동시(병렬적으로) 실행

// promise -> 약속
// 약속이 성공하는가, 실패하는가
// 비동기 처리 해당 비동기 함수가 끝나고 나서 동기적인 함수를 실행해야할 때

let count = 3;
setTimeout(() => {
  count = 5;
  console.log(count + 2); // 5
  console.log(count + 2); // 5
  console.log(count + 2); // 5
  console.log(count + 2); // 5
  // 또 비동기가 일어나면? -> 콜백 지옥 현상 -> 콜백 안에 또 다시 콜백함수가 작성 -> 가독성 나쁨
  // 실패하면?
  if (count !== 5) {
    //... 분기 생성
  }
}, 3000);
// setTimeout은 무조건 성공합니다 그러나 백엔드에 데이터 요청과 같은 로직은 실패 할 수도 있음
// 성공과 실패를 분기 처리해야하며
// 성공하고나서의 데이터를 사용하기 위해서는 콜백함수를 써서 해결했으나 가독성을 해치는 경우가 다분하여
// ES6에 promise가 등장

console.log(count + 2); // 5

// Promise
// resolve 성공했다
// reject 실패했다
new Promise((resolve, reject) => {
  setTimeout(() => {
    count = 5;
    if (count !== 5) {
      reject("count가 5가 아닙니다"); // catch method
    }
    // count === 5
    resolve(count); // -> then method
  }, 3000);
})
  .then((result) => console.log(result + 2)) // setTimeout(비동기)이후 결과값을 갖고 실행
  .catch((error) => console.error(error)); // reject된 결과 -> error -> 비동기의 예외 처리

// Promise.all, Promise.race, Promise.allSettled
// Promise.all -> 여러개의 비동기 로직을 한번에 실행, 하나라도 실패하면 모두가 실패
// Promise.race -> 여러개의 비동기 로직 한번에 실행, 가장 먼저 온 결과값만
// Promise.allSettled -> 여러개의 비동기 로직을 한번에 실행, 하나 실패해도 실패와 성공 모두 반환

// backend에 데이터 요청하는 것도 모두다 Promise 데이터 형태
// then, catch -> 비동기 이후의 동기적인 로직의 대기, 성공과 실패에 대한 결과를 처리하기 위해 존재

// pending, fulfilled, rejected
// 대기, 이행, 실패
