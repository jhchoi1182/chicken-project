import React, { useEffect } from "react";
import Chick from "../shared/Chick";
import Header from "../shared/Header";
import login from "../../images/login.webp";
import StBtn from "../ui/buttons/StBtn";
import { useNavigate, useParams } from "react-router";
import StSpaceBetween from "../ui/div/StSpaceBetween";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __neighborhood } from "../../redux/modules/LoginSlice";
import Neighbor from "./Neighbor";

const Neighborhood = () => {
  const navigate = useNavigate()
  const param = useParams().id;
  const dispatch = useDispatch()
  const neighbor = useSelector(state => state.login.neighbor)

  useEffect(() => {
    dispatch(__neighborhood())
  }, [])

  return (
    <div>
      <Header />
      <Chick />
      <StSpaceBetween>
        <StBtn width="7.5rem" color={"#e67700"} onClick={() => navigate(`/todos/${param}`)}>
          todo
        </StBtn>
        <StBtn width="7.5rem" color={"#e67700"} onClick={() => navigate(`/post/${param}`)}>
          내 이야기
        </StBtn>
        <StBtn width="7.5rem" color={"#e67700"} onClick={() => navigate(`/neighborhood/${param}`)}>
          양계장이웃들
        </StBtn>
      </StSpaceBetween>
      <List>
        {neighbor.map(neighbor => {
          return <Neighbor key={neighbor.userId} neighbor={neighbor} />})}
      </List>
      <StBtn width="5.5rem" height="2rem" margin="15px" onClick={() => dispatch(__neighborhood())}>새로고침</StBtn>
    </div>
  );
};

const List = styled.div`
  margin-top: 2rem;
  border: 2px solid #e67700;
  border-radius: 10px;
  height: 13rem;
  padding: 1rem 2.5rem;
`

export default Neighborhood;
