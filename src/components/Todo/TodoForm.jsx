import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __addTodo } from "../../redux/modules/TodoSlice";
import { useInput } from "../../hooks/useInput";
import { useParams } from "react-router";

const Form = () => {
  const { input, handleInput, setInput } = useInput({ content: "" });
  const { isLoading } = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const param = useParams();
  // console.log(param);
  const addSubmitHandler = (e) => {
    e.preventDefault();

    const todo = {
      userId: param.id,
      content: input.content,
    };

    if (input.content.length === 0) {
      alert("내용을 입력해 주세요");
    } else {
      dispatch(__addTodo({ todo: todo, id: param.id }));
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
      <BtnWrap>
        <AddButton>추가하기</AddButton>
      </BtnWrap>
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

const BtnWrap = styled.div`
  position: static;
`;

const AddButton = styled.button`
  width: 70px;
  height: 40px;
  color: orange;
  position: relative;
  left: 290px;
  top: -40px;
  margin-left: 30px;
  cursor: pointer;
`;
