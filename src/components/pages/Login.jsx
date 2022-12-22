import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Chick from "../shared/Chick";
import StBtn from "../ui/buttons/StBtn";
import StForm from "../ui/div/StForm";
import StInput from "../ui/inputs/StInput";
import login from "../../images/login.webp";
import { tokenHandler, __login } from "../../redux/modules/LoginSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const loginData = useSelector(state => state.login)
  const [edteredInfo, setEnteredInfo] = useState({
    account: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setEnteredInfo({ ...edteredInfo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(__login(edteredInfo));
  };

  useEffect(() => {
    dispatch(tokenHandler(loginData.userId))
    if (loginData.status === 200) {
      navigate(`/todos/${loginData.userId}`)
    }
  }, [loginData])

 

  const aLength = edteredInfo.account.length;
  const bLength = edteredInfo.password.length;

  return (
    <section>
      <LoginHeader>Todo</LoginHeader>
      <Box>
        <Img src={login} />
        <label>알 수 없는 알</label>
      </Box>
      <StForm gap="1.5rem" paddingTop="1rem" alignItem="center" onSubmit={onSubmitHandler}>
        <Div>
          <div className="input-box">
            <label>아이디</label>
            <StInput width="100%" margin="0.3rem 0rem 0.1rem 0rem" name="account" value={edteredInfo.account} onChange={onChangeHandler} />
            <IDValidity length={aLength}>3~15자를 입력해주세요.</IDValidity>
          </div>
          <div className="input-box">
            <label>비밀번호</label>
            <StInput type="password" width="100%" margin="0.3rem 0rem 0.1rem 0rem" name="password" value={edteredInfo.password} onChange={onChangeHandler} />
            <PWValidity length={bLength}>4~20자를 입력해주세요.</PWValidity>
          </div>
        </Div>
        <StBtn type="submit" width="82%" margin="0px 0px 0px 3px" disabled={aLength > 2 && aLength <= 15 && bLength > 2 && bLength <= 20 ? false : true}>
          로그인
        </StBtn>
        <StBtn width="82%" margin="0px 0px 0px 3px" type="button" onClick={() => navigate("/signup")}>
          회원가입
        </StBtn>
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
`;

const Div = styled.div`
  width: 80%;
  display: block;
  margin-bottom: 1rem;
  .input-box {
    padding: 2px 0px;
    height: 5.7rem;
  }
  .input-box:nth-child(2) {
    margin-bottom: -0.5rem;
  }
`;

const IDValidity = styled.label`
  display: ${({ length }) => ((length > 2 && length <= 15) || length === 0 ? "none" : "block")};
  color: red;
  font-size: 0.9rem;
`;

const PWValidity = styled.label`
  display: ${({ length }) => ((length > 2 && length <= 20) || length === 0 ? "none" : "block")};
  color: red;
  font-size: 0.9rem;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 19rem;
  border-radius: 15px;
  margin-bottom: 1rem;
  border: 2px solid #e67700;
  margin-top: -1rem;
  z-index: 15;
  gap: 1rem;
`;

const Img = styled.img`
  width: 20rem;
  src: ${(props) => props.src};
  margin: ${(props) => props.margin};
  margin-top: -1.5rem;
`;

export default Login;
