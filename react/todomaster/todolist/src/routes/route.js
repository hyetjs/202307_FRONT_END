import { createBrowserRouter } from "react-router-dom";
// v6
// import 하기 위해 해당 모듈(컴포넌트)를 export 하는 방법
// 1. export const router = createBrowserRouter([])
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/todo",
    element: <div>todo page</div>,
  },
]);

// 2. export default router(어떤 값을 내보낼 것 인지)
export default router;

// 앞에 export를 붙이면 객체로 오기때문에 키값으로 찾아야하기 때문에 이름이 무조건 같아야한다 import할때
// 여러개 보낼 수 있는 장점이 있다
// 뒤에 export를 붙여서 보내면 default값을 주기때문에 import시 이름을 마음대로 할 수 있다
// 대신 하나만 보낼 수 있다 보내는 기본값을 객체로 만들어주면 많은 값을 보낼 수 있지만 굳이?

//내보내는 타입이 객체인가 값인가의 차이가 존재함

//객체면 키 값에 의존하기 때문에 키값(변수명)을 지켜줘야함
//값이면 어떠한 변수에도 담을 수 있기 때문에 마음대로

// 라우터 공홈 -> App.js에 복붙 -> route.js만들어서 분리해준다
