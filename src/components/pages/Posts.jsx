import React from "react";
import Chick from "../shared/Chick";
import Header from "../shared/Header";
import lv3 from "../../images/LV3.webp";

const Posts = () => {
  return (
    <div>
      <Header />
      <Chick src={lv3} />
    </div>
  );
};

export default Posts;
