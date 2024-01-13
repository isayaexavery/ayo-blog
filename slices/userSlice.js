import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarks: [],
};

const bookmarksSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addBookmark(state, action) {
      const newBookmark = action.payload;
      const existingBookmark = state.bookmarks.find(
        (itm) => itm.id === newBookmark.id
      );

      if (!existingBookmark) {
        state.bookmarks.push(newBookmark);
      }
    },
    removeBookmark(state, action) {
      const id = action.payload;
      const existingBookmark = state.bookmarks.find((itm) => itm.id == id);
      if (existingBookmark) {
        state.bookmarks = state.bookmarks.filter((itm) => itm.id !== id);
      }
    },

    emptyBookmark(state, action) {
      state.bookmarks = [];
    },
  },
});

// export const { addBookmark, removeBookmark, emptyBookmark } =
//   bookmarksSlice.actions;

export const bookmarkActions = bookmarksSlice.actions;

// export const selectBookmark = (state) => state.bookmarks.bookmarks;
// export const selectBookmarkById = (state, id) =>
//   state.bookmarks.bookmarks.filter((itm) => itm.id == id);

export default bookmarksSlice.reducer;
