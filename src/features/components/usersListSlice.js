import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedUser: -1,
  usersListJson: [],
};

export const usersListSlice = createSlice({
  name: "userslist",
  initialState,
  reducers: {
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    setUsersListJson: (state, action) => {
      state.usersListJson = action.payload;
    },
  },
});

const { setUsersListJson } = usersListSlice.actions;
export const { setSelectedUser } = usersListSlice.actions;

export const fetchUsersList = (request) => async (dispatch) => {
  const response = await fetch(request, {});
  const json = await response.json();
  dispatch(setUsersListJson(json.data));
};

export default usersListSlice.reducer;
