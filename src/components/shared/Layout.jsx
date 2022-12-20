import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <Wrap>
      <TodoBox>{children}</TodoBox>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  min-height: 98vh;
  display: flex;
`;

const TodoBox = styled.div`
  max-width: 25rem;
  width: 90%;
  height: 46rem;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 1px 1px gray;
  border: 3px solid #e67700;
  padding: 2rem 4rem;
  margin: auto;
`;

export default Layout;
