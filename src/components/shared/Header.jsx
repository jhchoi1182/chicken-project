import React from "react";
import styled from "styled-components";
import StBtn from "../ui/buttons/StBtn";

const Header = (props) => {

  // const cookie = new Cookies()
  // const deleteTokenHandler = (token) => {
  //   cookies.remove(name);
  // }

  const { disply, justifyContent, divWidth, divFont } = props;
  const styles = { disply, justifyContent, divWidth, divFont };
  return <Wrap {...styles}>
    <div className="loginInfo">
      <label>
        ~~님
      </label>
      <StBtn width="5.5rem" >로그아웃</StBtn>
    </div>
    <label className="pageInfo">~~님의 둥지</label>
  </Wrap>;
};

Header.defaultProps = {};
const Wrap = styled.div`
  width: 100%;
  height: 5rem;
  display: ${(props) => props.disply};
  justify-content: ${(props) => props.justifyContent};
  .loginInfo {
    float: right;
  }
  .loginInfo > label {
    margin-right: 5px;
  }
  .pageInfo {
    position: relative;
    top: 40%;
  }
`;

export default Header;
