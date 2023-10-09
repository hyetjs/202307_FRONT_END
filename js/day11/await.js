// Promise의 then도 결국 그 이후의 로직을 실행하기위해선 .then이 중복
// then.then.then.then
// ES7 async, await(기다린다)

// await을 통해 비동기 함수가 끝나는 것을 기다리기 때문에
// then이나 callback 없이도 마치 동기적(순서대로) 코드를 짤 수 있기 때문에 현재 가장 자주 사용하는 비동기 처리

// 주의 사항: 반드시 함수로 감싸져 있어야하며 함수의 매개변수 앞에 async가 존재해야한다
// 주의 사항: async로 감싼 순간 해당 함수도 비동기 함수가 됩니다.

const asyncPromise = async () => {
  // async () => { await 비동기 함수 }
  // 시간이 오래걸릴 수 있는 비동기 함수가 끝날 때 까지 기다린다 -> 동기적으로(순서대로) 코드를 작성할 수 있다 -> 가독성이 좋다

  try {
    // catch -> try / catch
    // try -> 시도한다. (성공할 수도 있고, 실패할 수 있어요)
    // 실패 시에는 catch리 이동, 비동기 함수의 reject 값과 함께

    const res = await new Promise((resolve) => resolve(3));
    console.log(res); // 3
    res + 2;
  } catch (err) {
    console.error(err);
    // error handling
  }
};

// (async () => {
//   await asyncPromise(); // 3, 5
//   console.log(5);
// })();

asyncPromise(); // 5, 3 -> 비동기 함수가 되었음
console.log(5);
