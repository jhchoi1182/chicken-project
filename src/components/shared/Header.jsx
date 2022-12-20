import React from "react";
import styled from "styled-components";

const Header = (props) => {
  const {disply, justifyContent, divWidth, divFont} = props
  const styles = {disply, justifyContent, divWidth, divFont}
  console.log(props)
  return <Wrap {...styles}>화이팅</Wrap>;
};

Header.defaultProps = {

};
const Wrap = styled.div`
  width: 100%;
  height: 5rem;
  display: ${(props) => props.disply};
  justify-content: ${(props) => props.justifyContent};
`;

export default Header;
