import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FaceIcon from "@material-ui/icons/Face";
import "@fontsource/roboto";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  profilebox: {
    backgroundColor: "#4b5c69",
    color: "#ffffff",
    height: "70px",
  },
  button: {
    marginLeft: "50%",
    borderRadius: "100px",
    color: "#4b5c69",
    border: "2px solid #a74db0",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "#a74db0",
      color: "white",
    },
  },
}));

export default function UserData(props) {
  const classes = useStyles();
  const [state, setstate] = useState(false);
  const { userName } = props;

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="space-around"
      className={classes.profilebox}
    >
      <FaceIcon
        fontSize="large"
        style={{ marginRight: "20px", marginLeft: "5%" }}
      />
      <Typography>{userName}</Typography>
      <Button
        className={classes.button}
        variant="outlined"
        style={{
          backgroundColor: !state ? "white" : "#a74db0",
          color: !state ? "#4b5c69" : "white",
        }}
        onClick={() => setstate(!state)}
      >
        Follow
      </Button>
    </Grid>
  );
}
