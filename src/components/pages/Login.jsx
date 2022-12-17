import React from "react";
import StBtn from "../ui/buttons/StBtn";
import StSection from "../ui/div/StSection";
import StInput from "../ui/inputs/StInput";

const Login = () => {
  return (
    <StSection gap="2rem" paddingTop="1rem">
      <StInput />
      <StInput />
      <StBtn width="82%">로그인</StBtn>
      <StBtn width="82%">회원가입</StBtn>
    </StSection>
  );
};

export default Login;
