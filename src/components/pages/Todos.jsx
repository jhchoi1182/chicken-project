import React from "react";
import Chick from "../shared/Chick";
import Header from "../shared/Header";
import login from "../../images/login.webp";
import lv4 from "../../images/LV4.webp";
import StInput from "../ui/inputs/StInput";

//새로 추가한 부분
import TodoForm from "../Todo/TodoForm";
import TodoList from "../Todo/TodoList";
import StSpaceBetween from "../ui/div/StSpaceBetween";
import StBtn from "../ui/buttons/StBtn";
import { useNavigate, useParams } from "react-router";

const Todos = () => {
  const navigate = useNavigate()
  const param = useParams().id;

  return (
    <div>
      <Header />
      <Chick src={lv4} />
      <div>
      <StSpaceBetween>
        <StBtn width="7.5rem" color={"#e67700"} onClick={() => navigate(`/todos/${param}`)}>
          todo
        </StBtn>
        <StBtn width="7.5rem" color={"#e67700"} onClick={() => navigate(`/`)}>
          내 이야기
        </StBtn>
        <StBtn width="7.5rem" color={"#e67700"} onClick={() => navigate(`/neighborhood/${param}`)}>
          양계장이웃들
        </StBtn>
      </StSpaceBetween>
        <TodoForm></TodoForm>
        <TodoList></TodoList>
      </div>
    </div>
  );
};

export default Todos;
