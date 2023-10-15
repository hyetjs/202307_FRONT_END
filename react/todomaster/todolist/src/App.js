import { RouterProvider } from "react-router-dom";

import 오호예헤 from "./routes/route"; // export default 되어있는 값이 import 사용
// 기본값으로 내보낸 값이기 때문에, 내보낼 때부터 값이 누구인지 정의
// export default router

// import {router} from "./routes/route" 객체로 받아온 모듈을 구조분해할당하여 사용
// 객체이기 때문에 반드시 키 값을 지켜야함 export const {router}
function App() {
  // v6
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <div>Hello world!</div>,
  //   },
  //   {
  //     path: "/todo",
  //     element: <div>todo page</div>,
  //   },
  // ]);
  return <RouterProvider router={오호예헤} />;
}
export default App;
