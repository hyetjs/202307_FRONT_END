import { useEffect } from "react";

const Modal = () => {
  useEffect(() => {
    console.log("모달이 열렸습니다");

    return () => {
      console.log("모달이 닫혔습니다");
      // reset, remove
    };
  }, []);

  return <div>Modal</div>;
};
export default Modal;
