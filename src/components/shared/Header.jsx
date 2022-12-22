import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StBtn from "../ui/buttons/StBtn";
import { Cookies } from "react-cookie";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { __userInfo } from "../../redux/modules/LoginSlice";

const Header = (props) => {
  const cookie = new Cookies()
  const isCookie = cookie.get("token")
  cookie.get("token")
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state => state.login.user)
  const [loginState, setLoginState] = useState(false)
  const param = useParams().id
  const deleteTokenHandler = () => {
    cookie.remove('token', { path: '/' })
    setLoginState((false))
    alert('로그아웃되었습니다.')
    navigate('/')
  }

  useEffect(() => {
    dispatch(__userInfo(param))
    if (isCookie) {
      setLoginState(true);
    } else {
      setLoginState(false)
    }
  }, [isCookie])

  const { disply, justifyContent, divWidth, divFont } = props;
  const styles = { disply, justifyContent, divWidth, divFont };
  return <Wrap {...styles}>
    <div className="loginInfo">
      {loginState ? <label>{`${user.nickname} 님`}</label> : null}
      {loginState ? <StBtn width="5.5rem" onClick={deleteTokenHandler}>로그아웃</StBtn> : <StBtn width="5.5rem" onClick={() => navigate('/')}>로그인</StBtn>}
    </div>
    <label className="pageInfo">{`${user.nickname} 님의 둥지`}</label>
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
