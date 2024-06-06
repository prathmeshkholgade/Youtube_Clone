import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    addChache: (state, action) => {
      return { ...action.payload, ...state };
    },
  },
});
export const { addChache } = searchSlice.actions;
export default searchSlice.reducer;
