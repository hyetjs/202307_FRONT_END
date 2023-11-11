import { styled } from "styled-components";
import { flexAlignCetner } from "../../../styles/common";
import Box from "../../../components/Box";
import { useRef, useState } from "react";
import { useTodo } from "stroe/todo";

/**
 * @param {todo} todos의 각각의 요소인 todo 
 */
const OneTodo = ({todo}) => {
  const [isEditMode, setIsEditMoe] = useState(false)
  const {todos, setTodos} = useTodo()

  const editTextArea = useRef(null)
  


  const onDeleteTodo = () => {
    if(window.confirm("정말 삭제하시겠습니까?")){
      const deleteTodos = todos.filter((el) => el.id !== todo.id)
      setTodos(deleteTodos)
    }
  }


  const handleEditTodo = (id, todo) => {
    const _todos = [...todos]
    let selectTodoIndex = _todos.findIndex((todo) => todo.id === id)
    _todos[selectTodoIndex] = {..._todos[selectTodoIndex], ...todo}
    setTodos(_todos)

  }

  const onEditTodo = () => {
      if(!isEditMode) return setIsEditMoe(true)
      handleEditTodo(todo.id, {content: editTextArea.current.value})
      setIsEditMoe(false)
  }

  const onEditState = () => {
    handleEditTodo(todo.id, {state: !todo.state})
  }

  return (
    <Styled.Wrapper $state={todo.state}>
        <Styled.Header>
            <div onClick={onEditState}>
                {todo.state ? "완료" : "미완료"}
                <Box x={4}/>
                {todo.title}
            </div>
            <div>
                <button onClick={onEditTodo}>{isEditMode ? '완료' : '수정'}</button>
                <button onClick={onDeleteTodo}>삭제</button>
            </div>
        </Styled.Header>
        <Styled.Content $state={todo.state}>
          {isEditMode ? <textarea defaultValue={todo.content} ref={editTextArea}></textarea> : todo.content}
        </Styled.Content>
    </Styled.Wrapper>
    )
}
export default OneTodo

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #999;
  margin: 16px 0;
  border-radius: 8px;
  background-color: ${({ $state, theme }) =>
    $state ? theme.colors.gray[100] : theme.colors.white};
`;

const Header = styled.div`
  border-bottom: 1px dotted #999;
  ${flexAlignCetner};
  justify-content: space-between;
  padding: 8px 16px;
  height: 48px;
`;

const Content = styled.div`
  padding: 16px;
  text-decoration: ${({ $state }) => ($state ? "line-through" : "none")};
`;

const Styled = {
  Wrapper,
  Header,
  Content,
};