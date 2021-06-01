import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  "default": false,
  "success": false
};

const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openDefault: state => {
      state.default = true;
    },
    openSuccess: state => {
      state.success = true;
      state.default = false;
    },
    closeDefault: state => {
      state.default = false;
    },
    closeSuccess: state => {
      state.success = false;
    }
  }
});

export const { openDefault, openSuccess, closeDefault, closeSuccess } = modalSlice.actions;

export default modalSlice.reducer;
