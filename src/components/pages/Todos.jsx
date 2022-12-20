import React from "react";
import Chick from "../shared/Chick";
import Header from "../shared/Header";
import login from "../../images/login.webp";
import lv4 from "../../images/LV4.webp";

const Todos = () => {
  return (
    <div>
      <Header />
      <Chick src={lv4} />
    </div>
  );
};

export default Todos;
