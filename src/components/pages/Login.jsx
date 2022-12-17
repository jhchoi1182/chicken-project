import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Chick from "../shared/Chick";
import Header from "../shared/Header";
import StBtn from "../ui/buttons/StBtn";
import StForm from "../ui/div/StForm";
import StInput from "../ui/inputs/StInput";

const Login = () => {
  const navigate = useNavigate();

  return (
    <section>
      <LoginHeader>Todo</LoginHeader>
      <Chick />
      <StForm gap="1.5rem" paddingTop="1rem" alignItem="center">
        <Div>
          <div className="input-box">
            <label>아이디</label>
            <StInput width="100%"/>
            <label className="validity">유효성 검사</label>
          </div>
          <div className="input-box">
           <label>비밀번호</label>
          <StInput width="100%"/>
          <label className="validity">유효성 검사</label> 
          </div>
        </Div>
        <StBtn width="82%" margin="0px 0px 0px 3px" type="submit">로그인</StBtn>
        <StBtn width="82%" margin="0px 0px 0px 3px" type="button" onClick={() => navigate('/signup')}>회원가입</StBtn>
      </StForm>
    </section>
  );
};

const Div = styled.div`
  width: 80%;
  display: block;
  .input-box {
    padding: 2px 0px;
  }
  .input-box:nth-child(2) {
    margin-bottom: -5px;
  }
  .validity {
    color: transparent
    ;
  }
`

const LoginHeader = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: 700;
`

export default Login;
