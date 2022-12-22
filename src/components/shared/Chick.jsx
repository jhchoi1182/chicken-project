import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import login from "../../images/login.webp"
import register from "../../images/register.webp"
import lv1 from "../../images/LV1.webp"
import lv2 from "../../images/LV2.webp"
import lv3 from "../../images/LV3.webp"
import lv4 from "../../images/LV4.webp"
import lv5 from "../../images/LV5.webp"

const Chick = (props) => {
  const user = useSelector(state => state.login.user)
  const egg = "알 수 없는 알"
  const lvText = ["LV 1. 갓 깨어난 병아리", "LV 2. 자는 게 일인 병아리", "LV 3. 한창 먹을 나이인 병아리", "LV 4. 노력하는 병아리", "LV 5. 여유만만한 병아리"]
  const chickImg = [lv1, lv2, lv3, lv4, lv5]
  console.log(user.userLevel)
  const { src, width, margin } = props;
  const styles = { src, width, margin };
  return (
    <Box>
      <Img {...styles} src={chickImg[user.userLevel-1]} alt="" />
      <label>{user.userLevel ? lvText[user.userLevel-1] : egg}</label>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 19rem;
  border-radius: 15px;
  margin-bottom: 1rem;
  border: 2px solid #e67700;
  margin-top: -1rem;
  z-index: 15;
  gap: 1rem;
`;

const Img = styled.img`
  width: 20rem;
  src: ${(props) => props.src};
  margin: ${(props) => props.margin};
  margin-top: -1.5rem;
`;

export default Chick;
