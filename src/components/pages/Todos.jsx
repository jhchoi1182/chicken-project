import React from "react";
import Chick from "../shared/Chick";
import Header from "../shared/Header";
import login from "../../images/login.webp";
import lv4 from "../../images/LV4.webp";
import StForm from "../ui/div/StForm";
import StInput from "../ui/inputs/StInput";

const Todos = () => {
  return (
    <div>
      <Header />
      <Chick src={login} />
      <StForm>
      </StForm>
    </div>
  );
};

export default Todos;
