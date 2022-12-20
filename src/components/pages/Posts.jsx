import React from "react";
import Chick from "../shared/Chick";
import Header from "../shared/Header";
import lv1 from '../../images/1LV.webp'

const Posts = () => {
  return (
    <div>
      <Header />
      <Chick src={lv1} />
    </div>
  )
};

export default Posts;
