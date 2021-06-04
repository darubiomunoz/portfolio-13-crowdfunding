import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_URL = "https://api.jsonbin.io/b/60b2d58344f488301b80b9e3/5";

const initialState = {
  info: [],
  status: "idle",
  error: null
};

export const fetchData = createAsyncThunk(
  "data/fetchData",
  async () => {
    const response = await fetch(API_URL);
    if(!response.ok) console.error(response.status);
    const data = response.json();
    return data;
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchData.pending]: state => {
      state.status = "pending";
    },
    [fetchData.fulfilled]: (state, action) => {
      const { payload } = action;

      state.status = "fulfilled";
      state.info = state.info.concat(payload);
    },
    [fetchData.rejected]: (state, action) => {
      const { error } = action;

      state.status = "rejected";
      state.error = error.message;
    }
  }
});

export default dataSlice.reducer;