import { useCallback, useState } from "react";

function UseCallback() {
  const [count, setCount] = useState(0);

  const addNumber = useCallback(() => {
    //
    //
    // axios, fetch
    // 반복, 순회
    // 매우 거대한 로직
    // setCount((prev) => prev + 1);
    setCount(count + 1);
  }, [count]);

  // UI를 반환하는 경우에도 useCallback을 사용할 수 있습니다.
  // 반드시 컴포넌트화 하는 것이 좋은 것은 아니다
  // 파일이 많아지면 DX를 해치고, 조건부 랜더
  const Modal = useCallback(() => {
    return <p>modal{count}</p>;
  }, [count]);

  return (
    <div>
      {count}
      <button onClick={addNumber}>+</button>
      <Modal />
    </div>
  );
}
export default UseCallback;
