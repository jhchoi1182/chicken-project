import React from "react";
import Chick from "../shared/Chick";
import Header from "../shared/Header";
import StBtn from "../ui/buttons/StBtn";
import StSection from "../ui/div/StSection";
import StInput from "../ui/inputs/StInput";

const Login = () => {
  return (
    <section>
      <Header />
      <Chick />
      <StSection gap="2rem" paddingTop="1rem" alignItem="center">
        <StInput placeholder="왜 안써지지" />
        <StInput />
        <StBtn width="82%">로그인</StBtn>
        <StBtn width="82%">회원가입</StBtn>
      </StSection>
    </section>
  );
};

export default Login;
