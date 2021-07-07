import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
  userPosts: [],
};

export const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    setUserPosts: (state, action) => {
      state.userPosts = action.payload;
    },
    setCurrentId: (state, action) => {
      state.currentId = action.payload;
    },
    setCurrentUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setCurrentId } = userProfileSlice.actions;
const { setUserPosts, setCurrentUserData } = userProfileSlice.actions;

export const fetchUserProfile = (request) => async (dispatch) => {
  const response = await fetch(request, {});
  const json = await response.json();
  dispatch(setUserPosts(json.data));
};

export const fetchUserData = (request) => async (dispatch) => {
  const response = await fetch(request, {});
  const json = await response.json();
  dispatch(setCurrentUserData(json.data));
};

export default userProfileSlice.reducer;
