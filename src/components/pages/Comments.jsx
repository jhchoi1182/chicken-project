import React from "react";
import Chick from "../shared/Chick";
import Header from "../shared/Header";
import lv3 from "../../images/LV3.webp";
import lv4 from "../../images/LV4.webp";
import lv5 from "../../images/LV5.webp";

const Comments = () => {
  return (
    <div>
      <Header />
      <Chick src={lv5} />
    </div>
  );
};

export default Comments;
