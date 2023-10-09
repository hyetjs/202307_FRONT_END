const arr = ["arr", "arr", "arr", "set", "set", "map"];
// ["arr", "set", "map"]

// 배열 -> Set (중복데이터 삭제)
let set = new Set(arr);
// Set("arr", "set", "map")

// 메서드 체이닝 -> 메서드가 연달아 사용된다 -> 메서드 (객체에 함수가 들어있는 경우)
set.add("성용").add("성용").delete("성용");
Array()
  .map((_i) => i)
  .map()
  .find();

// Set -> Array
const setArr = Array.from(set);
const spreadSet = [...set];
// [ "arr", "set", "map" ]
// 내용물만 복사해서 전달하고 다시 배열로 감싸줌으로 써 배열화
// 전개 연산자는 자료구조의 내용물만 따로 복사하여 가지고 오는 것
