import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Cookies } from "react-cookie";

const instance = axios.create({
  baseURL: "http://13.125.129.177"
})

const cookie = new Cookies()
const getCookie = cookie.get('token')
instance.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${getCookie}`
  return config
}
)

export const __signUp = createAsyncThunk(
  "LOGIN_TODO",
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
      if (msg === "REGISTER COMPLETE") {
        alert('회원가입 성공!')
      } else if (msg === 'ID ALREADY EXISTS') {
        alert('아이디가 중복되었습니다.')
      } else if (msg === 'NICKNAME ALREADY EXISTS') {
        alert('닉네임이 중복되었습니다.')
      } else {
        alert('알 수 없는 오류입니다.')
      }
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

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

      return thunkAPI.fulfillWithValue(alert('로그인 성공'))
    } catch (error) {
      if (error.response.status === 400) {
        alert('일치하는 정보가 없습니다.')
      } else if (error.response.status === 401) {
        alert('아이디 또는 비밀번호가 틀렸습니다')
      }
      return thunkAPI.rejectWithValue(error.response)
    }
  }
)

const initialState = {
  user: [],
  isLoading: false,
  message: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //회원가입
      .addCase(__signUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(__signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
    //로그인
    // .addCase(__login.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(__login.fulfilled, (state, action) => {
    //   state.isLoading = false;
    // })
    // .addCase(__login.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // })
  }
})

export default loginSlice.reducer;