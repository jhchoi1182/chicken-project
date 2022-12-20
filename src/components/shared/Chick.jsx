import React from "react";
import styled from "styled-components";

const Chick = (props) => {
  const {src, width, margin} = props
  const styles = {src, width, margin}
  return <Box>
    <Img {...styles} alt=""/>
    <label>LV 1. 갓 깨어난 병아리</label>
  </Box>;
};

const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%
  height: 18rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  gap: 1rem;
  `

const Img = styled.img`
  width: 15rem;
  src: ${(props) => props.src};
  margin: ${(props) => props.margin};
`

export default Chick;
