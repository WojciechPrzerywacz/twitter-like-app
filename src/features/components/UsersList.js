import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import RenderUserToList from "./RenderUserToList";
import { fetchUsersList } from "./usersListSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#4b5c69",
    color: "white",
    borderRadius: "0px 20px 20px 0px",
    marginRight: "20px",
  },
}));

export default function UsersList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { usersListJson } = useSelector((store) => store.userslist);

  useEffect(() => {
    dispatch(fetchUsersList(`https://gorest.co.in/public-api/users`));
  }, [dispatch]);

  return (
    <Box>
      <List
        component="nav"
        aria-label="main mailbox folders"
        className={classes.root}
      >
        {usersListJson.map((value, index) => (
          <RenderUserToList
            key={index}
            id={value?.id}
            name={value?.name}
          ></RenderUserToList>
        ))}
      </List>
    </Box>
  );
}
