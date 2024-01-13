import { configureStore } from "@reduxjs/toolkit";
import bookmarksSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    bookmark: bookmarksSlice,
  },
});
export default store;
