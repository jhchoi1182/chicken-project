import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __signUp = createAsyncThunk(
  "LOGIN_TODO",
  async (signUpInfo, thunkAPI) => {
    try {
      await axios.post("http://localhost:3001/login", signUpInfo);
      return thunkAPI.fulfillWithValue(signUpInfo);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  user: [],
  message: "",
  isLoading: false,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__signUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = [...state.user, action.payload];
      })
      .addCase(__signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default loginSlice.reducer;
