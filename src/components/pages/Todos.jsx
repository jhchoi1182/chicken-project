import React from "react";
import Chick from "../shared/Chick";
import Header from "../shared/Header";
import login from "../../images/login.webp";
import lv4 from "../../images/LV4.webp";
import StInput from "../ui/inputs/StInput";

//새로 추가한 부분
import TodoForm from "../Todo/TodoForm";
import TodoList from "../Todo/TodoList";

const Todos = () => {

  console.log(document.cookie)
  return (
    <div>
      <Header />
      <Chick src={login} />
      <div>
        <TodoForm></TodoForm>
        <TodoList></TodoList>
      </div>
    </div>
  );
};

export default Todos;
