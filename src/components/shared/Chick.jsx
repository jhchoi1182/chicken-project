import React from "react";
import styled from "styled-components";

const Chick = (props) => {
  const { src, width, margin } = props;
  const styles = { src, width, margin };
  return (
    <Box>
      <Img {...styles} alt="" />
      <label>LV 1. 갓 깨어난 병아리</label>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 19rem;
  border-radius: 15px;
  margin-bottom: 1rem;
  border: 2px solid #e67700;
  margin-top: -1rem;
  z-index: 15;
  gap: 1rem;
`;

const Img = styled.img`
  width: 20rem;
  src: ${(props) => props.src};
  margin: ${(props) => props.margin};
  margin-top: -1.5rem;
`;

export default Chick;
