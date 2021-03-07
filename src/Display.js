import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const displayStyles = makeStyles({
  display: {
    height: "200px",
  },
});

export default function Display(props) {
  const classes = displayStyles();
  return (
  <div className={classes.display}>
      <div className={classes.userInput}></div>
      <div className={classes.result}></div>
  </div>
  )
}
