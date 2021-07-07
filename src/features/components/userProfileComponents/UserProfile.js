import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserData, fetchUserProfile } from "./userProfileSlice";
import UserData from "./UserData";
import UserPost from "./UserPost";
import Grid from "@material-ui/core/Grid";

export default function UserProfile() {
  const dispatch = useDispatch();
  const { userPosts, userData } = useSelector(
    (store) => store.userProfileReducer
  );
  const { selectedUser } = useSelector((store) => store.userslist);

  useEffect(() => {
    dispatch(
      fetchUserData(`https://gorest.co.in/public-api/users/${selectedUser}`)
    );
    dispatch(
      fetchUserProfile(
        `https://gorest.co.in/public-api/users/${selectedUser}/posts`
      )
    );
  }, [dispatch, selectedUser]);

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="felx-start"
    >
      <UserData userName={userData.name} />
      {userPosts.map((value, index) => (
        <UserPost
          key={index}
          index={index}
          userName={userData.name}
          postDate={value?.created_at}
          postBody={value?.body}
        />
      ))}
    </Grid>
  );
}
