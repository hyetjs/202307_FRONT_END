import { useEffect, useState } from "react";

const UseEffect2 = () => {
  const todos = [];
  const obj = {};
  const [state, setState] = useState(true);
  useEffect(() => {}, [todos.length, obj.seongyong]);

  const onClickBtn = () => {
    setState(false);
    console.log(state); // -- false (x) // true -- 비동기
    // setState -> A -> B -> C (x)
    // setState (비동기)
    // A -B - C - setState (o)
  };

  useEffect(() => {
    if (!state) {
      //... false 이후의 로직
      // A - B - C
    }
  }, [state]); // setState

  return <div>:D</div>;
};
export default UseEffect2;
