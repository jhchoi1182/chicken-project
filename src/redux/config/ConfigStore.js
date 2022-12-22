import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/TodoSlice";
import comments from "../modules/commentsSlice";
import detail from "../modules/detailSlice";
import posts from "../modules/postsSlice";
import login from "../modules/LoginSlice";
const store = configureStore({
  reducer: { todos, login, comments, detail, posts },
});
export default store;
