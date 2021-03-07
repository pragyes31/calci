import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import Buttons from "./Buttons";

const calculatorStyles = makeStyles({
  cal: {
    width: "350px",
    height: "600px",
    borderRadius: "3rem",
    border: "1px solid #595e6d",
  },
  display: {
    height: "200px",
    margin: "0 1rem 1rem 1rem",
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "flex-end",
  },
  result: {
    marginTop: "4rem",
  },
});

export default function CalculatorApp(props) {
  const classes = calculatorStyles();
  const [firstOperand, setFirstOperand] = useState(0);
  const [secondOperand, setSecondOperand] = useState(0);
  const [operator, setOperator] = useState();
  const [result, setResult] = useState(0);
  const [formulaChain, setChain] = useState("");

  useEffect(() => {
    clearDisplay();
  }, []);

  useEffect(() => {
    setFirstOperand(result);
    setSecondOperand(0);
  }, [result])

  let clearDisplay = () => {
    setFirstOperand(0);
    setSecondOperand(0);
    setOperator();
    setResult(0);
    setChain("")
  };

  let handleNumber = (num) => {
    operator === undefined
      ? setFirstOperand(firstOperand + num)
      : setSecondOperand(secondOperand + num);
    setChain(`${formulaChain} ${num} `);
  };
  let handleOperator = (ope) => {
    if (firstOperand && operator && secondOperand) {
      calculateResult();
    }
    setOperator(ope);
    let operators = ["+", "-", "*", "/", "%"];
    let isOperator = operators.includes(formulaChain[formulaChain.length - 2]);
    let updatedOperator = formulaChain.split("").slice(-2);
    setChain(`${formulaChain} ${isOperator ? updatedOperator : ope}`);
  };
  console.log(firstOperand, operator, secondOperand);
  let calculateResult = () => {
    let firstValue = parseInt(firstOperand);
    let secondValue = parseInt(secondOperand);
    switch (operator) {
      case "+":
        setResult(firstValue + secondValue);
        break;
      case "-":
        setResult(firstValue - secondValue);
        break;
      case "*":
        setResult(firstValue * secondValue);
        break;
      case "/":
        setResult(Math.floor((firstValue / secondValue) * 100) / 100);
        break;
      case "%":
        setResult(firstValue / (secondValue * 100));
        break;
    }
  };
  console.log(firstOperand, operator, secondOperand);
  return (
    <div className={classes.cal}>
      <div className={classes.display}>
        <div className={classes.userInput}>
          {formulaChain}
        </div>
        <div className={classes.result}>{result}</div>
      </div>
      <Buttons
        handleNumber={handleNumber}
        handleOperator={handleOperator}
        calculateResult={calculateResult}
        clearDisplay={clearDisplay}
      />
    </div>
  );
}
