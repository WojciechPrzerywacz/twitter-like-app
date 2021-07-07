import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { setSelectedUser } from "./usersListSlice";
import { purple } from "@material-ui/core/colors";

export default function RenderUserToList(props) {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((store) => store.userslist);
  const { id, name, style } = props;
  return (
    <ListItem
      button
      style={style}
      key={id}
      selected={selectedUser === id}
      onClick={() => {
        dispatch(setSelectedUser(id));
      }}
    >
      <AccountCircleIcon
        fontSize="large"
        style={{ color: purple[400], marginRight: "15px" }}
      />
      <ListItemText primary={`${name}`} />
    </ListItem>
  );
}
