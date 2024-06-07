import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/app/appSlice";
import dataReducer from "../features/data/dataSlice";
import searchReducer from "../features/search/searchSlice";
import messageReducer from "../features/Chat/ChatSlice";
const store = configureStore({
  reducer: {
    app: appReducer,
    data: dataReducer,
    search: searchReducer,
    message: messageReducer,
  },
});
export default store;
