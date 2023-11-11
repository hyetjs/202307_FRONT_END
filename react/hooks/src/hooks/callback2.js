import { useCallback, useState } from "react";

const Callback2 = () => {
  // 추천드리지 않습니다. erroState -> re, text -> re

  const [errorState, setErrorState] = useState(null);
  //   const [text, setText] = useState("");
  //   useEffect(() => {
  //     if (errorState === "error") {
  //       setText("에러가 발생했습니다");
  //     }
  //     if (errorState === "warn") {
  //       setText("불안정합니다");
  //     }
  //   }, [errorState]);

  // html 구조가 같고 css 변경과 내부 컨텐츠만 변경될 때
  //   const text = useMemo(() => {
  //     if (errorState === "error") return "에러가 발생했습니다";
  //   }, [errorState]);
  const text = (() => {
    switch (errorState) {
      case "error":
        return {
          color: "red",
          text: "에러가 발생헀습니다",
        };
      default:
        break;
    }
  })();

  // 각 분기마다 html 구조가 상이할 때
  const Text = useCallback(() => {
    if (errorState === "error") {
      return <p style={{ color: "red" }}>에러가발생헀습니다</p>;
    }
  }, [errorState]);

  // 결론을 이야기하자면 memo, callback, state를 적절히 활용하여
  // 가독성이 있고 유지보수에 용이한 컴포넌트를 만들어내는 것
  // reredner에 최적화된

  return (
    <p
      style={{
        color: text.color,
      }}
    >
      {text.text}
    </p>
  );
};
export default Callback2;
