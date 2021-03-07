import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Button from "@material-ui/core/Button";

const buttonsStyles = makeStyles({
  buttons: {
    height: "400px",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    marginTop: "1.5rem",
    margin: "1.5rem 1rem 0rem 1rem",
  },
  lastRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 2fr",
    margin: "1.5rem 1rem 0rem 1rem",
  },
  btn: {
    borderRadius: "50%",
    height: "3rem",
    width: "3rem",
    minWidth: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#ffd",
    },
  },
  btnGreen: {
    height: "3rem",
    width: "3rem",
    borderRadius: "50%",
    backgroundColor: "#55b562",
    padding: "0",
    color: "#fff",
    fontSize: "1rem",
    minWidth: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "#55b56f",
    },
  },
  btnEqual: {
    height: "3rem",
    width: "90%",
    borderRadius: "2.5rem",
    backgroundColor: "#55b562",
    color: "#fff",
    fontSize: "2rem",
  },
});

export default function Buttons(props) {
  const classes = buttonsStyles();
  return (
    <div className={classes.buttons}>
      <div className={classes.row}>
        <div className={classes.btnBox}>
          <Button
            className={classes.btnGreen}
            variant="contained"
            onClick={props.clearDisplay}
          >
            AC
          </Button>
        </div>
        <div className={classes.btnBox}>
          <Button
            className={classes.btnGreen}
            variant="contained"
            onClick={() => props.handleNumber("+/-")}
          >
            +/-
          </Button>
        </div>
        <div className={classes.btnBox}>
          <Button
            className={classes.btnGreen}
            variant="contained"
            onClick={() => props.handleOperator("%")}
          >
            %
          </Button>
        </div>
        <div className={classes.btnBox}>
          <Button
            className={classes.btnGreen}
            variant="contained"
            onClick={() => props.handleOperator("/")}
          >
            &#xf7;
          </Button>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.btnBox}>
          <Button
            className={classes.btn}
            variant="contained"
            onClick={() => props.handleNumber("7")}
          >
            7
          </Button>
        </div>
        <div className={classes.btnBox}>
          <Button
            className={classes.btn}
            variant="contained"
            onClick={() => props.handleNumber("8")}
          >
            8
          </Button>
        </div>
        <div className={classes.btnBox}>
          <Button
            className={classes.btn}
            variant="contained"
            onClick={() => props.handleNumber("9")}
          >
            9
          </Button>
        </div>
        <div className={classes.btnBox}>
          <Button
            className={classes.btnGreen}
            variant="contained"
            onClick={() => props.handleOperator("*")}
          >
            &#xd7;
          </Button>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.btnBox}>
          <Button
            className={classes.btn}
            variant="contained"
            onClick={() => props.handleNumber("4")}
          >
            4
          </Button>
        </div>
        <div className={classes.btnBox}>
          <Button
            className={classes.btn}
            variant="contained"
            onClick={() => props.handleNumber("5")}
          >
            5
          </Button>
        </div>
        <div className={classes.btnBox}>
          <Button
            className={classes.btn}
            variant="contained"
            onClick={() => props.handleNumber("6")}
          >
            6
          </Button>
        </div>
        <div className={classes.btnBox}>
          <Button
            className={classes.btnGreen}
            variant="contained"
            onClick={() => props.handleOperator("+")}
          >
            +
          </Button>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.btnBox}>
          <Button
            className={classes.btn}
            variant="contained"
            onClick={() => props.handleNumber("1")}
          >
            1
          </Button>
        </div>
        <div className={classes.btnBox}>
          <Button
            className={classes.btn}
            variant="contained"
            onClick={() => props.handleNumber("2")}
          >
            2
          </Button>
        </div>
        <div className={classes.btnBox}>
          <Button
            className={classes.btn}
            variant="contained"
            onClick={() => props.handleNumber("3")}
          >
            3
          </Button>
        </div>
        <div className={classes.btnBox}>
          <Button
            className={classes.btnGreen}
            variant="contained"
            onClick={() => props.handleOperator("-")}
          >
            &ndash;
          </Button>
        </div>
      </div>
      <div className={classes.lastRow}>
        <div className={classes.btnBox}>
          <Button
            className={classes.btn}
            variant="contained"
            onClick={() => props.handleNumber("0")}
          >
            0
          </Button>
        </div>
        <div className={classes.btnBox}>
          <Button
            className={classes.btn}
            variant="contained"
            onClick={() => props.handleNumber(".")}
          >
            .
          </Button>
        </div>
        <div className={classes.btnBoxEqual}>
          <Button
            className={classes.btnEqual}
            variant="contained"
            onClick={props.calculateResult}
          >
            =
          </Button>
        </div>
      </div>
    </div>
  );
}
