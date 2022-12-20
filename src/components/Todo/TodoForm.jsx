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
    dispatch(__addTodo(todo));
    setInput({ content: "" });
  };

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <CreateForm onSubmit={addSubmitHandler}>
      <InputBox>
        <label>
          <StInput
            type="text"
            name="content"
            value={input.content}
            onChange={(e) => handleInput(e)}
            placeholder="이곳에 내용을 작성해주세요."
          />
        </label>
      </InputBox>
      <StButton>추가하기</StButton>
    </CreateForm>
  );
};

export default Form;

const CreateForm = styled.form``;

const InputBox = styled.div``;

const StInput = styled.input`
  width: 400px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid orange;
`;

const StButton = styled.button`
  cursor: pointer;
`;
