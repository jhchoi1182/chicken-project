import React from "react";
import { useNavigate } from "react-router";
import Chick from "../shared/Chick";
import Header from "../shared/Header";
import StBtn from "../ui/buttons/StBtn";
import StForm from "../ui/div/StForm";
import StInput from "../ui/inputs/StInput";

const Login = () => {
  const navigate = useNavigate();

  return (
    <section>
      <Header />
      <Chick />
      <StForm gap="2rem" paddingTop="1rem" alignItem="center">
        <StInput placeholder="왜 안써지지" />
        <StInput />
        <StBtn width="82%">로그인</StBtn>
        <StBtn width="82%" onClick={() => navigate('/signup')}>회원가입</StBtn>
      </StForm>
    </section>
  );
};

export default Login;
