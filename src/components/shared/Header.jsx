import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";

const Header = (props) => {
  const param = useParams()
  // console.log(param)

  const { disply, justifyContent, divWidth, divFont } = props;
  const styles = { disply, justifyContent, divWidth, divFont };
  return <Wrap {...styles}>화이팅</Wrap>;
};

Header.defaultProps = {};
const Wrap = styled.div`
  width: 100%;
  height: 5rem;
  display: ${(props) => props.disply};
  justify-content: ${(props) => props.justifyContent};
`;

export default Header;
