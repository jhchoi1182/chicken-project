import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
      const todos = await axios.get("http://localhost:3001/todos");
      return thunkAPI.fulfillWithValue([...todos.data]);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addTodo = createAsyncThunk(
  "todos/addTodo",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const todo = await axios.post("http://localhost:3001/todos", payload);
      return thunkAPI.fulfillWithValue(todo.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __isdoneTodo = createAsyncThunk(
  "todos/isdoneTodo",
  async (payload, thunkAPI) => {
    try {
      const todo = await axios.patch(
        `http://localhost:3001/todos/${payload.id}`,
        {
          isDone: !payload.isDone,
        }
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
      const todo = await axios.delete(`http://localhost:3001/todos/${id}`);
      return thunkAPI.fulfillWithValue(id);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const __updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (payload, thunkAPI) => {
    console.log(payload.input);
    try {
      const todo = await axios.patch(
        `http://localhost:3001/todos/${payload.id}`,
        { content: payload.input }
      );
      return thunkAPI.fulfillWithValue(todo.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState,
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
      state.todos.push(action.payload);
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
