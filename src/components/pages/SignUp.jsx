import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { __signUp } from "../../redux/modules/LoginSlice";
import Chick from "../shared/Chick";
import StBtn from "../ui/buttons/StBtn";
import StForm from "../ui/div/StForm";
import StInput from "../ui/inputs/StInput";
import register from '../../images/register.webp'

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [edteredSignUpInfo, setEnteredSignUpInfo] = useState({
    nickname: "",
    account: "",
    password: "",
    confirm: ""
  })

  const onChangeHandler = (event) => {
    const {name, value} = event.target
    setEnteredSignUpInfo({...edteredSignUpInfo, [name]: value})
  }

  const onSubmitHandler = () => {
    dispatch(__signUp(edteredSignUpInfo))
    setEnteredSignUpInfo({
      nickname: "",
      account: "",
      password: "",
      confirm: ""
    })
    // alert("회원가입 성공!")
    // navigate('/')
  }
  
  const aLength = edteredSignUpInfo.nickname.length
  const bLength = edteredSignUpInfo.account.length
  const cLength = edteredSignUpInfo.password.length
  const validity = [edteredSignUpInfo.password, edteredSignUpInfo.confirm]

  return <section>
      <SignupHeader>
        <StBtn width='' margin='0px 0px 0px -2.5rem' 
        disabled={
          (aLength, bLength > 2 && aLength, bLength <= 15) && 
          (cLength > 3 && cLength <= 20) && (validity[0] === validity[1]) ?
          false : true}
        onClick={onSubmitHandler}>회원가입</StBtn>
        <div className="title">
          분양 받기
        </div>
        <StBtn width='' margin='0px -2.5rem 0px 0px' onClick={() => navigate('/')}>뒤로가기</StBtn>
      </SignupHeader>
    <Chick src={register} margin="0px 0.6rem 0px 0px" />
    <StForm gap="1.5rem" paddingTop="1rem" alignItem="center">
      <Div>
        <div className="input-box">
          <label>닉네임</label>
          <StInput width="100%" height="2rem" borderRadius="8px" margin="0.3rem 0rem 0.1rem 0rem" name="nickname" value={edteredSignUpInfo.nickname} onChange={onChangeHandler} />
          <NickValidity length={aLength}>3~15자를 입력해주세요.</NickValidity>
        </div>
        <div className="input-box">
          <label>아이디</label>
          <StInput width="100%" height="2rem" borderRadius="8px" margin="0.3rem 0rem 0.1rem 0rem" name="account" value={edteredSignUpInfo.account} onChange={onChangeHandler} />
          <IdValidity length={bLength}>3~15자를 입력해주세요.</IdValidity>
        </div>
        <div className="input-box">
          <label>비밀번호</label>
          <StInput type="password" width="100%" height="2rem" borderRadius="8px" margin="0.3rem 0rem 0.1rem 0rem" name="password" value={edteredSignUpInfo.password} onChange={onChangeHandler} />
          <PwValidity length={cLength}>4~20자를 입력해주세요.</PwValidity>
        </div>
        <div className="input-box">
          <label>비밀번호 확인</label>
          <StInput type="password" width="100%" height="2rem" borderRadius="8px" margin="0.3rem 0rem 0.1rem 0rem" name="confirm" value={edteredSignUpInfo.confirm} onChange={onChangeHandler} />
          <Confirm validity={validity} >비밀번호가 일치하지 않습니다.</Confirm>
        </div>
      </Div>
    </StForm>
  </section>;
};

const Div = styled.div`
  width: 80%;
  display: block;
  .input-box {
    padding: 2px 0px;
    margin-bottom: -0.3rem;
    height: 5.15rem;
  }
`

const NickValidity = styled.label`
  display: ${({length}) => (length > 2 && length <= 15 || length === 0 ? "none" : "block")};
  color: red;
  font-size: 0.9rem;
`

const IdValidity = styled.label`
  display: ${({length}) => (length > 2 && length <= 15 || length === 0 ? "none" : "block")};
  color: red;
  font-size: 0.9rem;
`
const PwValidity = styled.label`
  display: ${({length}) => (length > 3 && length <= 20 || length === 0 ? "none" : "block")};
  color: red;
  font-size: 0.9rem;
`
const Confirm = styled.label`
  display: ${({validity}) => (validity[0] === validity[1] || validity[1].length === 0 ? "none" : "block")};
  color: red;
  font-size: 0.9rem;
`

const SignupHeader = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  .title {
    font-size: 30px;
    font-weight: 700;
  }
`

export default SignUp;