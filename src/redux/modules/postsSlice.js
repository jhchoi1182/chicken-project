import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://13.125.129.177",
});
//혜민님 화이팅입니다.
const initialState = {
  posts: [],
  post: {},
  isLoading: true,
  errorCurse: false,
  status: 0,
};
//delPost
export const delPost = createAsyncThunk(
  "postsSlice/delPost",
  async ({ postId, id }, thunkAPI) => {
    const headers = {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3MTYwNTIwNCwiZXhwIjoxNjcxNjkxNjA0fQ.CKrZWgUO4JpEOE3r7UkL4C2Bs9URVoxqschGUtwri7o",
    };
    try {
      const res = await axios.delete(
        `http://13.125.129.177/post/${id}/${postId}`,
        {
          headers: headers,
        }
      );
      const data = await instance.get(`/post/${id}`);
      const result = data.data;
      return result;
    } catch (error) {}
  }
);
//updatePost
export const updatePost = createAsyncThunk(
  "postsSlice/updatePost",
  async ({ id, postId, title, content }) => {
    const headers = {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3MTYwNTIwNCwiZXhwIjoxNjcxNjkxNjA0fQ.CKrZWgUO4JpEOE3r7UkL4C2Bs9URVoxqschGUtwri7o",
    };
    try {
      const res = await axios.patch(
        `http://13.125.129.177/post/${id.id}/${postId}`,
        {
          title,
          content,
        },
        {
          headers: headers,
        }
      );
      const data = await instance.get(`/post/${id.id}`);
      const result = data.data;
      return result;
    } catch (error) {}
  }
);
//getPost
export const getPost = createAsyncThunk(
  "postsSlice/getPost",
  async ({ id, postId }, thunkAPI) => {
    const data = await instance.get(`/post/${id}/${postId}`);
    const result = data.data;
    return result;
  }
);

//addPost
export const addPost = createAsyncThunk(
  "postsSlice/addPost",
  async ({ title, content, id }, thunkAPI) => {
    const headers = {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3MTYwNTIwNCwiZXhwIjoxNjcxNjkxNjA0fQ.CKrZWgUO4JpEOE3r7UkL4C2Bs9URVoxqschGUtwri7o",
    };
    try {
      const res = await axios.post(
        `http://13.125.129.177/post/${id.id}`,
        {
          title,
          content,
        },
        {
          headers: headers,
        }
      );
      const data = await instance.get(`/post/${id.id}`);
      const result = data.data;
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  //   async (action, thunkAPI) => {
  //     const addData = {
  //       title: action.title,
  //       content: action.content,
  //     };
  //     console.log(addData);
  //     const data = await instance.post(`/post/${parseInt(action.id)}`, addData);
  //     console.log(data);
  //     return data;
  //}
);
//getPosts
export const getPosts = createAsyncThunk(
  "postsSlice/getPosts",
  async (action, thunkAPI) => {
    const data = await instance.get(`/post/${action}`);
    const result = data.data;
    return result;
  }
);

const postsSlice = createSlice({
  name: "postsSlice",
  initialState,
  extraReducers: {
    //updatePost
    [updatePost.pending]: (state) => {
      state.isLoading = true;
    },
    [updatePost.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.errorCurse = false;
      state.posts = payload;
    },
    //getPost
    [getPost.pending]: (state) => {
      state.isLoading = true;
    },
    [getPost.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.errorCurse = false;
      state.post = payload;
    },
    //delPost
    [delPost.pending]: (state) => {
      state.isLoading = true;
    },
    [delPost.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.errorCurse = false;
      state.posts = payload;
    },
    //addPost
    [addPost.pending]: (state) => {
      state.isLoading = true;
    },
    [addPost.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.errorCurse = false;
      state.posts = payload;
    },

    //getPosts
    [getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.errorCurse = false;
      state.posts = payload;
    },
  },
});
export default postsSlice.reducer;
