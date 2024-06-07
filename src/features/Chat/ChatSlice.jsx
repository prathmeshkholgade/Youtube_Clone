import { createSlice } from "@reduxjs/toolkit";
const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMsg: (state, action) => {
        state.messages.splice(25,1)
      state.messages.unshift(action.payload);
    },
  },
});

export const { addMsg } = chatSlice.actions;
export default chatSlice.reducer;
