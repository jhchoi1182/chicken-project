import React from "react";
import styled from "styled-components";
import StBtn from "../Buttons/StButton";

const Header = () => {
  return (
    <Wrap>
      <StBtn>안녕</StBtn>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  margin: 0px;
`;

export default Header;
