import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Cookies } from "react-cookie";

const instance = axios.create({
  baseURL: "https://sparta-syk.site/",
});

const cookie = new Cookies();
const getCookie = cookie.get("token");
instance.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${getCookie}`;
  return config;
});

const initialState = {
  todos: [],
  detail: {
    id: "",
    content: "",
  },
  isLoading: false,
  error: null,
};

export const __getTodo = createAsyncThunk(
  "todos/getTodos",
  async (payload, thunkAPI) => {
    try {
      const todos = await instance.get(`/todo/${payload}`);
      return thunkAPI.fulfillWithValue(todos.data.Todos);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addTodo = createAsyncThunk(
  "todos/addTodo",
  async (payload, thunkAPI) => {
    try {
      const todo = await instance.post(`/todo/${payload.todo.userId}`, {
        content: payload.todo.content,
      });
      if (todo.status === 200) {
        const result = await instance.get(`/todo/${payload.id}`);
        return thunkAPI.fulfillWithValue(result.data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __isdoneTodo = createAsyncThunk(
  "todos/isdoneTodo",
  async (payload, thunkAPI) => {
    try {
      const todo = await instance.patch(
        `/todo/${payload.userId}/${payload.todoId}?done=${!payload.done}`
      );
      return thunkAPI.fulfillWithValue(payload.id);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const __deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id, thunkAPI) => {
    try {
      const todo = await instance.delete(`/todo/${id.userId}/${id.todoId}`);
      return thunkAPI.fulfillWithValue(id.todoId);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const __updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (payload, thunkAPI) => {
    try {
      const todo = await instance.patch(
        `/todo/${payload.userId}/${payload.todoId}`,
        {
          content: payload.content,
        }
      );
      return thunkAPI.fulfillWithValue(todo.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    // __getTodo
    [__getTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__getTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    },
    [__getTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //__addTodo
    [__addTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__addTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = [...action.payload.Todos];
    },
    [__addTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // __deleteTodo
    [__deleteTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = state.todos.filter((value) => {
        return value.id !== action.payload;
      });
    },
    [__deleteTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // __updateTodo
    [__updateTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = state.todos.map((value) => {
        if (value.id === action.payload.id) {
          return action.payload;
        } else {
          return value;
        }
      });
    },
    [__updateTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // __isdoneTodo
    [__isdoneTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__isdoneTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = state.todos.map((el) =>
        el.id === action.payload
          ? {
            ...el,
            isDone: !el.isDone,
          }
          : el
      );
    },
    [__isdoneTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default todoSlice.reducer;
