import { useState, Fragment } from "react";

import CalculatorForm from "./components/CalculatorForm.jsx";
import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [ userInput, setUserInput ] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue         //Change the newValue into an int
      }
    });
  }

  return (
    <Fragment>
      <Header />
      <CalculatorForm userInput={userInput} onChangeInput={handleChange} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <Results input={userInput} />}
    </Fragment>
  )
}

export default App
