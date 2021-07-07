import { configureStore } from "@reduxjs/toolkit";
import usersListReducer from "../features/components/usersListSlice";
import userProfile from "../features/components/userProfileComponents/userProfileSlice";

export const store = configureStore({
  reducer: {
    userslist: usersListReducer,
    userProfileReducer: userProfile,
  },
});
