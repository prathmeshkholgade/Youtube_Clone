import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/app/appSlice";
import dataReducer from "../features/data/dataSlice";
import searchReducer from "../features/search/searchSlice";
const store = configureStore({
  reducer: {
    app: appReducer,
    data: dataReducer,
    search: searchReducer,
  },
});
export default store;
