import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Cookies } from "react-cookie";

const instance = axios.create({
  baseURL: "http://13.125.129.177"
})

const cookie = new Cookies()

export const __signUp = createAsyncThunk(
  "SIGNUP_TODO",
  async (signUpInfo, thunkAPI) => {
    try {
      const register = await instance.post(
        "/user/register", {
        account: signUpInfo.account,
        nickname: signUpInfo.nickname,
        password: signUpInfo.password,
        confirm: signUpInfo.confirm
      })
      if (register) {
        alert('회원가입 성공')
      }
      return thunkAPI.fulfillWithValue(register.data.msg)
    } catch (error) {
      const msg = error.response.data.msg
      console.log(msg)
      if (msg === 'ID ALREADY EXISTS') {
        alert('아이디가 중복되었습니다.')
      } else if (msg === 'NICKNAME ALREADY EXISTS') {
        alert('닉네임이 중복되었습니다.')
      } else {
        alert('알 수 없는 오류입니다.')
      }
      return thunkAPI.rejectWithValue(msg)
    }
  }
);

export const __login = createAsyncThunk(
  "LOGIN_TODO",
  async (loginInfo, thunkAPI) => {
    try {
      const login = await instance.post("/user/login", {
        account: loginInfo.account,
        password: loginInfo.password,
      })
      const accessToken = login.data.accessToken
      cookie.set('token', accessToken)
      if (login.status === 200) {
        alert('로그인 성공')
      }
      return thunkAPI.fulfillWithValue(login)
    } catch (error) {
      if (error.response.status === 400) {
        alert('일치하는 정보가 없습니다.')
      } else if (error.response.status === 401) {
        alert('아이디 또는 비밀번호가 틀렸습니다')
      }
      return thunkAPI.rejectWithValue(error.response.status)
    }
  }
);

const initialState = {
  userId: "",
  isLoading: false,
  status: "",
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
        state.status = action.payload;
      })
      .addCase(__signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload;
      })

      .addCase(__login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__login.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload)
        state.userId = action.payload.data.userId
        state.status = action.payload.status;
      })
      .addCase(__login.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload;
      })
  }
})

export default loginSlice.reducer;
