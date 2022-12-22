import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __addTodo } from "../redux/modules/todoSlice";
import { useInput } from "../../hooks/useInput";

const Form = () => {
  const { input, handleInput, setInput } = useInput({ content: "" });
  const { isLoading, error } = useSelector((state) => state.todos);

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

  if (error) {
    return <div>에러가 발생했습니다</div>;
  }

  return (
    <FormBox>
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
    </FormBox>
  );
};

export default Form;

const FormBox = styled.div``;

const CreateForm = styled.form``;

const InputBox = styled.div``;

const StInput = styled.input``;

const StButton = styled.button`
  cursor: pointer;
`;
