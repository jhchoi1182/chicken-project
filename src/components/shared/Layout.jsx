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
  min-height: 100vh;
  display: flex;
  margin: 0px;
  background-color: #eee8aa;
`;

const TodoBox = styled.div`
  max-width: 26rem;
  width: 90%;
  height: 45rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 1px gray;
  padding: 3rem 4rem;
  margin: auto;
`;

export default Layout;
