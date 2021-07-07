import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExposurePlus1Icon from "@material-ui/icons/ExposurePlus1";
import ThumbUpAltTwoToneIcon from "@material-ui/icons/ThumbUpAltTwoTone";
import ThumbDownAltTwoToneIcon from "@material-ui/icons/ThumbDownAltTwoTone";
import CommentTwoToneIcon from "@material-ui/icons/CommentTwoTone";
import Grid from "@material-ui/core/Grid";
import { purple, deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  interactions: {
    borderRadius: "10px",
    backgroundColor: "#f9f7fa",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "70%",
    height: "30px",
    margin: "10px 100px 0px 10px",
  },
}));

export default function PostReactionsBar(props) {
  const classes = useStyles();

  return (
    <Grid className={classes.interactions}>
      <ThumbUpAltTwoToneIcon style={{ color: purple[500] }} color="primary" />
      <ThumbDownAltTwoToneIcon style={{ color: deepPurple[500] }} />
      <ExposurePlus1Icon style={{ color: purple[500] }} />
      <CommentTwoToneIcon style={{ color: purple[500] }} />
    </Grid>
  );
}
