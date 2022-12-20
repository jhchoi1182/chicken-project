import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../modules/TodoSlice";
import login from "../modules/LoginSlice";

const store = configureStore({
  reducer: { todos: todoReducer, login },
});

export default store;
