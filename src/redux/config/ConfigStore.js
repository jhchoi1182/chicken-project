import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/TodoSlice";
import login from '../modules/LoginSlice'

const store = configureStore({
  reducer: { todos, login },
});

export default store;