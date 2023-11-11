import { useMemo, useRef, useState } from "react";

const UseMemo = () => {
  const arr = useRef([1, 2, 3, 4, 5]);
  const [forceRender, setForceRender] = useState(false);

  const arrlength = useMemo(() => {
    console.log("증가");
    return arr.current.length;
  }, [forceRender]);
  // 5
  // 복잡한 연산의 결과 값

  // rerender가 되어도 useMemo의 함수는 실행하지 않는다
  // 단, 의존성 배열에 들어가있는 state의 값이 변화되면 재실행 한다
  // 복잡한 연산이 매번 리랜더 될 때마다 실행하지 않고 값을 재사용

  return (
    <div>
      {arrlength}
      <button
        onClick={() => {
          arr.current.push(arr.current.at(-1) + 1);
          console.log(arr.current);
        }}
      >
        push
      </button>
      <button onClick={() => setForceRender((prev) => !prev)}>render</button>
    </div>
  );
};
export default UseMemo;
