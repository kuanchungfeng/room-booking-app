import "./App.css";

import CustomInputNumber from "./components/CustomInputNumber";
import React from "react";

const App = () => {
  const logNameAndValue = (event) => {
    console.log(`Event.target.name :${event?.target?.name}`);
    console.log(`Event.target.value:${event?.target?.value}`);
  };
  const onChangeHandler = (event) => {
    logNameAndValue(event);
  };

  const onBlurHandler = (event) => {
    logNameAndValue(event);
  };

  return (
    <div>
      <section id="app-form">
        <CustomInputNumber
          min={2}
          max={50}
          step={2}
          name={"number-input"}
          value={3}
          disabled={false}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
        />
        <CustomInputNumber
          min={2}
          max={50}
          step={4}
          name={"number-input"}
          value={3}
          disabled={false}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
        />
        <CustomInputNumber
          min={2}
          max={50}
          step={10}
          name={"number-input"}
          value={3}
          disabled={false}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
        />
      </section>
    </div>
  );
};

export default App;
