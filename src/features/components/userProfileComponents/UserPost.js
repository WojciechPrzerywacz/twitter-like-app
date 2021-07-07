import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import PostReactionsBar from "./PostReactionsBar";
import "@fontsource/roboto";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  postbox: {
    margin: "0px 5px 0px 5px",
    backgroundColor: "white",
  },
  posttitlebox: {
    margin: "20px 200px 5px 10px",
    borderRadius: "10px",
    backgroundColor: "white",
    fontWeight: "bold",
    //fontStyle: "italic",
  },
}));

export default function UserPost(props) {
  const classes = useStyles();
  const { userName, postDate, postBody } = props;

  return (
    <Box>
      <Typography variant="h6" className={classes.posttitlebox} gutterBottom>
        {userName?.toUpperCase()} on : {postDate.substring(0, 10)}
      </Typography>
      <Typography className={classes.postbox}>POST: {postBody}</Typography>
      <PostReactionsBar />
    </Box>
  );
}
