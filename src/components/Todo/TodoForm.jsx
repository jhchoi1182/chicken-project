import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __addTodo } from "../../redux/modules/TodoSlice";
import { useInput } from "../../hooks/useInput";

const Form = () => {
  const { input, handleInput, setInput } = useInput({ content: "" });
  const { isLoading } = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const addSubmitHandler = (e) => {
    e.preventDefault();

    const todo = {
      ...input,
      id: Math.floor(Math.random() * 1000),
      isDone: false,
    };

    if (input.content.length === 0) {
      alert("내용을 입력해 주세요");
    } else {
      dispatch(__addTodo(todo));
      setInput({ content: "" });
    }
  };

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <form onSubmit={addSubmitHandler}>
      <InputBox>
        <ContentInput
          type="text"
          name="content"
          value={input.content}
          onChange={(e) => handleInput(e)}
          placeholder="이곳에 내용을 작성해주세요."
        />
      </InputBox>
      <AddButton>추가하기</AddButton>
    </form>
  );
};

export default Form;

const InputBox = styled.div`
  width: 400px;
  height: 40px;
`;

const ContentInput = styled.input`
  width: 300px;
  height: 35px;
  border-radius: 10px;
  border: 1px solid red;
  font-size: 12px;
`;

const AddButton = styled.button`
  width: 70px;
  height: 40px;
  color: orange;
  position: absolute;
  left: 620px;
  top: 430px;
  margin-left: 40px;
  cursor: pointer;
`;
