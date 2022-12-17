import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Chick from "../shared/Chick";
import StBtn from "../ui/buttons/StBtn";
import StForm from "../ui/div/StForm";
import StInput from "../ui/inputs/StInput";

const SignUp = () => {
  const navigate = useNavigate();

  return <section>
      <SignupHeader>
        <div />
        <div className="title">
          분양 받기
        </div>
        <StBtn width='' margin='0px -2.5rem 0px 0px' onClick={() => navigate('/')}>뒤로가기</StBtn>
      </SignupHeader>
    <Chick />
    <StForm alignItem="center">
      <Div>
        <div className="input-box">
          <label>닉네임</label>
          <StInput width="100%"/>
          <label className="validity">유효성 검사</label>
        </div>
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
        <StBtn width="102%" margin='-0.3rem 0px 0px 0px'>회원가입</StBtn>
      </Div>
    </StForm>
  </section>;
};

const Div = styled.div`
  width: 80%;
  display: block;
  .input-box {
    padding: 2px 0px;
  }
  .input-box:nth-child(3) {
    margin-bottom: 10px;
  }
  .validity {
    color: transparent;
  }
`

const SignupHeader = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  .title {
    font-size: 30px;
    font-weight: 700;
    margin-left: 3rem;
  }
`

export default SignUp;
