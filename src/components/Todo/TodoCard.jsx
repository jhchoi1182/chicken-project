import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  __deleteTodo,
  __updateTodo,
  __isdoneTodo,
} from "../../redux/modules/TodoSlice";

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [input, setInput] = useState(location.state);

  //삭제하는 부분 --
  const deleteHandler = (id) => {
    dispatch(__deleteTodo(id));
  };

  //수정하는 부분 ---
  const [updateId, setUpdateId] = useState(false);

  const makeUpdateMode = (id) => {
    setUpdateId(true);
  };

  const updateHandler = (id) => {
    dispatch(__updateTodo({ id, input }));
    setUpdateId(false);
  };

  //완료/취소 부분 ---
  const isDoneHandler = () => {
    const updateIsDone = { id: todo.id, isDone: todo.isDone };
    dispatch(__isdoneTodo(updateIsDone));
  };
  console.log(todo.content);

  return (
    <CardBox>
      {updateId !== true ? (
        <TitleSpan>{todo.content}</TitleSpan>
      ) : (
        <UpdateInput
          value={input ?? todo.content}
          onChange={(e) => setInput(e.target.value)}
        ></UpdateInput>
      )}

      {updateId !== true ? (
        <UpdateBtn onClick={() => makeUpdateMode(todo.id)}>수정</UpdateBtn>
      ) : (
        <>
          <UpdateBtn onClick={() => updateHandler(todo.id)}>수정완료</UpdateBtn>
          <UpdateBtn onClick={() => setUpdateId(false)}>수정취소</UpdateBtn>
        </>
      )}

      <UpdateBtn onClick={() => deleteHandler(todo.id)}>삭제</UpdateBtn>
      <UpdateBtn onClick={isDoneHandler}>
        {todo.isDone ? "취소" : "완료"}
      </UpdateBtn>
    </CardBox>
  );
};

export default TodoCard;

const CardBox = styled.div`
  display: flex;
  width: 500px;
  height: 48px;
`;

const TitleSpan = styled.div`
  font-size: 24px;
  width: 260px;
  height: 25px;
  border-radius: 10px;
  font-size: 14px;
  margin-top: 8px;
  margin-right: 10px;
`;

const UpdateInput = styled.input`
  width: 240px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid oarnge;
  font-size: 12px;
  margin-top: 10px;
`;

const UpdateBtn = styled.button`
  width: 43px;
  height: 43px;
  margin-top: 8px;
  /* border: 1px solid orange; */
  color: orange;
`;
