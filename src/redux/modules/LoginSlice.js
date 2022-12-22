import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Cookies } from "react-cookie";

const instance = axios.create({
  baseURL: "http://13.125.129.177",
});

const cookie = new Cookies()
const getCookie = cookie.get("token");
instance.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${getCookie}`;
  return config;
});

export const __signUp = createAsyncThunk(
  "SIGNUP_TODO",
  async (signUpInfo, thunkAPI) => {
    try {
      const register = await instance.post("/user/register", {
        account: signUpInfo.account,
        nickname: signUpInfo.nickname,
        password: signUpInfo.password,
        confirm: signUpInfo.confirm,
      });
      if (register) {
        alert("회원가입 성공");
      }
      return thunkAPI.fulfillWithValue(register.data.msg);
    } catch (error) {
      const msg = error.response.data.msg;
      if (msg === "ID ALREADY EXISTS") {
        alert("아이디가 중복되었습니다.");
      } else if (msg === "NICKNAME ALREADY EXISTS") {
        alert("닉네임이 중복되었습니다.");
      } else {
        alert("알 수 없는 오류입니다.");
      }
      return thunkAPI.rejectWithValue(msg);
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
      });
      const accessToken = login.data.accessToken;
      cookie.set("token", accessToken);
      if (login.status === 200) {
        alert("로그인 성공");
      }
      return thunkAPI.fulfillWithValue(login);
    } catch (error) {
      if (error.response.status === 400) {
        alert("아이디와 비밀번호를 다시 입력해주세요.");
      } else if (error.response.status === 401) {
        alert("아이디 또는 비밀번호가 틀렸습니다");
      }
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const __userInfo = createAsyncThunk(
  "USER_TODO",
  async (id, thunkAPI) => {
    try {
      const login = await instance.get(`/user/${id}`);
      return thunkAPI.fulfillWithValue(login.data.userInfo);
    } catch (error) {
      if (error.response.status === 400) {
        alert("비정상적인 접근입니다.");
      } else if (error.response.status === 401) {
        alert("존재하지 않는 계정입니다.");
      }
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const __neighborhood = createAsyncThunk(
  "NEIGHBOR_TODO",
  async (payload, thunkAPI) => {
    try {
      const neighbor = await instance.get(`/user/neighbor`);
      return thunkAPI.fulfillWithValue(neighbor.data.randomUsers);
    } catch (error) {
      if (error.response.status === 400) {
        alert("비정상적인 접근입니다.");
      }
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

// export const __mainRandom = createAsyncThunk(
//   "RANDOM_TODO",
//   async (payload, thunkAPI) => {
//     console.log('안녕')
//     try {
//       const random = await instance.get('/user/random');
//       console.log('안녕')
//       return thunkAPI.fulfillWithValue(console.log(random));
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.status);
//     }
//   }
// );


const initialState = {
  userId: "",
  user: {},
  neighbor: [],
  isLoading: false,
  status: "",
  tokenId: ""
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    tokenHandler: (state, action) => {
      console.log(action.payload)
      state.tokenId = action.payload;
    },
  },
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
        state.userId = action.payload.data.userId;
        state.status = action.payload.status;
      })
      .addCase(__login.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload;
      })

      .addCase(__userInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__userInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(__userInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload;
      })

      .addCase(__neighborhood.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__neighborhood.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        state.neighbor = action.payload;
      })
      .addCase(__neighborhood.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload;
      })
  },
});

export const { tokenHandler } = loginSlice.actions;

export default loginSlice.reducer;
