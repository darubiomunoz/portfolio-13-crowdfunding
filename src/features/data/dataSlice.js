import { createSlice } from '@reduxjs/toolkit';

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