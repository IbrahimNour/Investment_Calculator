import React, { useState } from "react";

import Header from "./components/header";
import UserInput from "./components/userInput";
import Results from "./components/results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestement: 1000,
    annualInvestement: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const onChangeInput = (identifer, val) => {
    setUserInput((prevState) => ({
      ...prevState,
      [identifer]: +val,
    }));
  };

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handelChange={onChangeInput} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
