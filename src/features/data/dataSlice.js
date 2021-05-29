import { createSlice } from '@reduxjs/toolkit';

const API_URL = "https://api.jsonbin.io/b/60b2cbcd44f488301b80b256";

const initialState = {
  data: [],
  status: "idle",
  error: null
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: {}
});

export default dataSlice.reducer;