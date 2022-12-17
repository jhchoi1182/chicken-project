import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Chick from "../shared/Chick";
import Header from "../shared/Header";
import StBtn from "../ui/buttons/StBtn";
import StSection from "../ui/div/StForm";
import StSpaceBetween from "../ui/div/StSpaceBetween";
import StInput from "../ui/inputs/StInput";

const SignUp = () => {
  const navigate = useNavigate();

  return <section>
    <Header />
    <Chick />
    <StSection gap="2rem" paddingTop="1rem" alignItem="center">
      <StInput />
      <StInput />
      <StInput />
      <StSpaceBetween width="82%">
        <StBtn>회원가입</StBtn>
        <StBtn onClick={() => navigate('/')}>돌아가기</StBtn>
      </StSpaceBetween>
    </StSection>
  </section>;
};

export default SignUp;
