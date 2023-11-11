import { useRef, useState } from "react";

const UseRef = () => {
  const count = useRef(5);
  const divRef = useRef();

  //   let count = 5;
  const [isForceRender, setIsForceRender] = useState(false);

  // useState로 생성된 것이 상태, useRef 상태가 아니기 때문에
  // 리랜더를 하지 않습니다.

  const onClickPlusBtn = () => {
    count.current += 1;
    // count++;
    console.log(count.current);
  };

  const onClickForceRender = () => {
    setIsForceRender((prev) => !prev);
    // 강제 랜더링을 위해 만든 함수 버튼을 누를 때마다 t/f가 반복되어 강제 리랜더
    // setState 함수에는 콜백함수가 들어올 수 있으며 인자에는 이전값(현재값)
    // true <-> false
  };

  const onClickChangeColor = () => {
    // document.getElementById("color").style.color = "red";
    divRef.current.style.color = "red";
  };
  /* 
    react re render하면 react tree라는 것을 다시 그림
    reRender 되기 전과 되고 난 후의 dom tree가 다름
    
    dom tree가 달라? 그럼 ref에 style 속성을 갖고 있고 
    render 되었을 때 이 ref 속성을 유지시켜줄 수 있다면
  */

  return (
    <>
      <div id="color" ref={divRef}>
        {count.current}
      </div>
      <button onClick={onClickPlusBtn}>+</button>
      <button onClick={onClickForceRender}>force-render</button>
      <button onClick={onClickChangeColor}>chnage-color</button>
    </>
  );
};
export default UseRef;

/* 
useState
useRef의 활용에 대한 의도

1. + 버튼을 누를 때마다 UI가 증가되는 것이 보여야한다. count - useState
2. + 버튼을 누를 때 값은 증가하지만 UI는 변동되지 않는다. 단 정산 버튼을 누르면 정산된다. count - useRef
*/
