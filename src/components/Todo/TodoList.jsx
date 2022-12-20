import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import TodoCard from "./TodoCard";
import { __getTodo } from "../../redux/modules/TodoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const { isLoading, todos } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(__getTodo());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <ListWrap>
      <BoxWrap>
        {todos?.map((todo) => (
          <TodoCard key={`card${todo.id}`} todo={todo} />
        ))}
      </BoxWrap>
    </ListWrap>
  );
};

export default TodoList;

const ListWrap = styled.div``;

const BoxWrap = styled.div``;
