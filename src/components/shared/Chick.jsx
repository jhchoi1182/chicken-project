import React from "react";
import styled from "styled-components";

const Chick = () => {
  return <Box>Header와 Chick 태그를 위에 쌓고 만들어주세요 (Login.jsx 구조를 참조)</Box>;
};

const Box = styled.div`
  width: 100%;
  height: 18rem;
  border: 1px solid black;
  border-radius: 8px;
  margin-bottom: 3rem;
`;

export default Chick;
