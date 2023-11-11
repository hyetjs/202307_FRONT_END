import { useEffect, useState } from "react";
import Modal from "./modal";

const UseEffect = () => {
  const [message, setMessage] = useState("페이지가 열리기 전 입니다");
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    setMessage("페이지가 열렸습니다");
  }, []);

  useEffect(() => {
    // 페이지가 열렸을 때 한번 실행하고, isOpenModal 바꼈을 때 실행
    isOpenModal && console.log("test");
  }, [isOpenModal]);

  const onClickModalBtn = () => {
    // setIsOpenModal(!isOpenModal);
    setIsOpenModal((prev) => !prev);

    // prev라는 값이 왜 생겼을까요?
    // 부모가 가진 상태의 값을 자식이 변형
    // 자식은 부모가 전달해주는 set 함수 뿐만아니라 state도 필요
  };

  return (
    <div>
      {message}
      {isOpenModal && <Modal />}
      <button onClick={onClickModalBtn}>
        {isOpenModal ? "close" : "open"}
      </button>
    </div>
  );
};
export default UseEffect;
