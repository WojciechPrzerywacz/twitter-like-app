import React from "react";
import UsersList from "./features/components/UsersList";
import UserProfile from "./features/components/userProfileComponents/UserProfile";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  paper: {
    height: "100vh",
    width: "50%",
    backgroundColor: theme.palette.background.paper,
  },
  userslist: {
    height: "500px",
    width: "50%",
    backgroundColor: theme.palette.background.paper,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Grid container direction="row" alignItems="baseline">
      <UsersList className={classes.userslist} />
      <Paper elevation={6} className={classes.paper}>
        <UserProfile />
      </Paper>
    </Grid>
  );
}

export default App;
