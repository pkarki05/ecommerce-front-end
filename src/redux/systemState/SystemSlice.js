import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalShow: false,
};

const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setModalShow: (state, action) => {
      state.modalShow = action.payload; // Ensure the payload is a boolean
    },
  },
});

const { actions, reducer } = systemSlice;
export const { setModalShow } = actions;
export default reducer;
