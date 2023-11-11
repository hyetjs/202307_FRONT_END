import styled from "styled-components";
import TDButton from "../../components/Button";
import { flexAlignCetner, flexCenter } from "../../styles/common";
import AddTodoModal from "./components/AddTodoModal";
import TodoList from "./components/TodoList";
import { useState } from "react";
import { OneExample, TwoExample } from "components/Barrel";
import { useTodo } from "stroe/todo";
//import { OneExample, TwoExample } from "../../components/Barrel";
//경로에는 baseURL도 설정할 수 있지만, alias(별칭)을 통해 경로에 이름을 지어줄 수 있다

const TodoPage = () => {
  const [isOpenAddTodoModal, setIsOpenAddTodoModal] = useState(false)
 
  const onClickOpenAddTodoModal = () => {
    setIsOpenAddTodoModal(true)
  }
  const onClickCloseAddTodoModal = () => {
    setIsOpenAddTodoModal(false)
  }

  return (
    <>
      {/*4*/}
      {/* <AddTodoModal { ...{onClickCloseAddTodoModal} } /> */}
      {isOpenAddTodoModal && <AddTodoModal onClose={onClickCloseAddTodoModal}/>}
      <Styled.Wrapper>
          <Styled.Container>
              <Styled.Title>TODOLIST</Styled.Title>
              {/*10 props drilling*/}
              {/*<TodoList />, index page에서 map이 돌아가는 것을 허용하지 않는다, 추상화 레벨 같게한다*/}
              <TodoList/>
              <TDButton size={'full'} variant={'primary'} onClick={onClickOpenAddTodoModal}>
                추가
              </TDButton>
          </Styled.Container>
      </Styled.Wrapper>
    </>
  );
};
export default TodoPage;

const Wrapper = styled.div`
  height: 100vh;
  ${flexCenter};
`;

const Container = styled.div`
  width: 420px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Title = styled.h1`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.white};
  padding-left: 32px;
  height: 32px;
  ${flexAlignCetner};
`;

const Styled = {
  Wrapper,
  Container,
  Title
}