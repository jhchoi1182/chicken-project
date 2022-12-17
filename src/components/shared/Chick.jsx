import React from "react";
import styled from "styled-components";
import lv1 from '../../images/LV. 1.webp'

const Chick = () => {
  return <Box>
    <Img src={lv1} alt="갓 깨어난 병아리"/>
    <label>LV 1. 갓 깨어난 병아리</label>
  </Box>;
};

const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 18rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  gap: 1rem;
`;

const Img = styled.img`
`

export default Chick;
