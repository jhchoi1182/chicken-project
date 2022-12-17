import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/TodoSlice";
import comments from '../modules/CommentSlice'

const store = configureStore({
  reducer: { todos, comments },
});

export default store;