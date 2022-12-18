import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Chick from "../shared/Chick";
import StBtn from "../ui/buttons/StBtn";
import StForm from "../ui/div/StForm";
import StInput from "../ui/inputs/StInput";

const Login = () => {
  const navigate = useNavigate();
  const [edteredInfo, setEnteredInfo] = useState({
    account: "",
    password: ""
  })

  const onChangeHandler = (event) => {
    const {name, value} = event.target
    setEnteredInfo({...edteredInfo, [name]: value})
  }

  return (
    <section>
      <LoginHeader>Todo</LoginHeader>
      <Chick />
      <StForm gap="1.5rem" paddingTop="1rem" alignItem="center">
        <Div>
          <div className="input-box">
            <label>아이디</label>
            <StInput width="100%" margin="0.3rem 0rem 0.1rem 0rem" name="account" value={edteredInfo.account} onChange={onChangeHandler} />
            <IDValidity className="test" length={edteredInfo.account.length} >3~10자를 입력해주세요.</IDValidity>
          </div>
          <div className="input-box">
           <label>비밀번호</label>
          <StInput width="100%" margin="0.3rem 0rem 0.1rem 0rem" name="password" value={edteredInfo.password} onChange={onChangeHandler}/>
          <PWValidity length={edteredInfo.password.length}>4~20자를 입력해주세요.</PWValidity> 
          </div>
        </Div>
        <StBtn width="82%" margin="0px 0px 0px 3px" type="submit" HoverColor="#e6d96b" disabled={edteredInfo.account.length > 0 ? false : true } >로그인</StBtn>
        <StBtn width="82%" margin="0px 0px 0px 3px" type="button" onClick={() => navigate('/signup')}>회원가입</StBtn>
      </StForm>
    </section>
  );
};

const LoginHeader = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: 700;
`

const Div = styled.div`
  width: 80%;
  display: block;
  margin-bottom: -0.3rem;
  .input-box {
    padding: 2px 0px;
  }
  .input-box:nth-child(2) {
    margin-bottom: -0.5rem;
  }
`
const IDValidity = styled.label`
  color: ${({length}) => (length > 2 && length <= 10 || length === 0 ? "transparent" : "red")};
  font-size: 0.9rem;
`

const PWValidity = styled.label`
  color: ${({length}) => (length > 2 && length <= 10 || length === 0 ? "transparent" : "red")};
  font-size: 0.9rem;
`



export default Login;
