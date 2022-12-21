import React from "react";
import Chick from "../shared/Chick";
import Header from "../shared/Header";
import login from "../../images/login.webp";

const Neighborhood = () => {
  return (
    <div>
      <Header />
      <Chick src={login} />
    </div>
  );
};

export default Neighborhood;
