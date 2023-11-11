import { useState } from "react";

const UseState = () => {
  // let count = 5;
  // react는 변수가 아닌 특정 상태 값이 변화해야만 화면을 rerender
  const [count, setCount] = useState(5);

  const onClickPlusBtn = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div>
      {count}
      <button onClick={onClickPlusBtn}>+</button>
    </div>
  );
};
export default UseState;
