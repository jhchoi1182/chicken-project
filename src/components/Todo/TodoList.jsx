import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import TodoCard from "./TodoCard";
import { __getTodo } from "../../redux/modules/TodoSlice";
import { useParams } from "react-router";

const TodoList = () => {
  const dispatch = useDispatch();
  const { isLoading, todos } = useSelector((state) => state.todos);
  const param = useParams();

  console.log(todos);
  useEffect(() => {
    dispatch(__getTodo(param.id)).then((res) => {});
  }, []);

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <ListWrap>
      <BoxWrap>
        {todos?.map((todo, i) => {
          return <TodoCard key={`todo${i}`} todo={todo} />;
        })}
      </BoxWrap>
    </ListWrap>
  );
};

export default TodoList;

const ListWrap = styled.div``;

const BoxWrap = styled.div`
  width: 500px;
  height: 330px;
  overflow-y: auto;
`;
