import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const appStyles = makeStyles({
  
});

export default function App() {
  const classes = appStyles();
  return <div className={classes.app}>
  </div>;
}

