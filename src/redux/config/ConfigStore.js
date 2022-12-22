import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/TodoSlice";
import login from "../modules/LoginSlice";
import detail from "../modules/detailSlice";
import posts from "../modules/postsSlice";

const store = configureStore({
  reducer: { todos, login, detail, posts },
});

export default store;
