import { makeStyles } from "@material-ui/core/styles";
import CalculatorApp from "./CalculatorApp";

const appStyles = makeStyles({
  app: {
    width: "100vw",
    height: "100vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: "#4F5463"
  },
});

function App() {
  const classes = appStyles();
  return (
    <div className={classes.app}>
      <CalculatorApp />
    </div>
  );
}

export default App;
