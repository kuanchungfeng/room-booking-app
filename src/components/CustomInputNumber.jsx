import React, { useRef, useState } from "react";

import styled from "styled-components";

const STEP_INTERVAL = 200;

const STEP_DELAY = 500;

const Input = styled.input`
  width: 48px;
  height: 48px;
  font-size: 16px;
  text-align: center;
  border: solid 1px black;
  border-radius: 5px;
`;

const SpanButton = styled.button`
  width: 48px;
  height: 48px;
  text-align: center;
  padding: 0px;
  margin: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #54b4d3;
  background: none;
  border: solid 1px #54b4d3;
  border-radius: 5px;

  &:hover {
    outline: none;
    background: #54b4d3;
    border-color: white;
    color: white;
  }
`;

const CustomInputNumber = ({
  min,
  max,
  step,
  name,
  value,
  onChange,
  onBlur,
  disabled,
}) => {
  const [enteredValue, setEnteredValue] = useState(value);
  const stepTimeoutRef = useRef();
  const inputRef = useRef();
  step = step ? step : 1;

  const onBlurHandler = (event) => {
    onBlur?.(event);
  };

  const onChangeHandler = (event) => {
    const value = event.target.value;
    if ((!isNaN(+value) && value >= min && value <= max) || value === "") {
      setEnteredValue(value);
    } else {
      event.target.value = +enteredValue;
    }
    onChange?.(event);
  };

  const changeNumber = (isPlus) => {
    if (isPlus) {
      if (
        +enteredValue + step >= max ||
        +inputRef.current.value + step >= max
      ) {
        return;
      }
      setEnteredValue((prev) => prev + step);
    } else {
      if (
        +enteredValue - step <= min ||
        +inputRef.current.value - step <= min
      ) {
        return;
      }
      setEnteredValue((prev) => prev - step);
    }
  };

  const onClickButton = (event, isPlus) => {
    event.preventDefault();
    changeNumber(isPlus);
  };

  const onStepMouseDown = (event, isPlus) => {
    event.preventDefault();

    // Loop step for interval
    function loopStep(isPlus) {
      changeNumber(isPlus);

      stepTimeoutRef.current = setTimeout(
        () => loopStep(isPlus),
        STEP_INTERVAL
      );
    }

    stepTimeoutRef.current = setTimeout(() => loopStep(isPlus), STEP_DELAY);
  };

  const onStopStep = () => {
    clearTimeout(stepTimeoutRef.current);
  };

  return (
    <div>
      <SpanButton
        onClick={(event) => onClickButton(event, false)}
        onMouseDown={(event) => onStepMouseDown(event, false)}
        onMouseUp={onStopStep}
      >
        -
      </SpanButton>
      <Input
        ref={inputRef}
        min={min}
        max={max}
        name={name}
        value={enteredValue}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        step={step}
        disabled={disabled}
      />
      <SpanButton
        onClick={(event) => onClickButton(event, true)}
        onMouseDown={(event) => onStepMouseDown(event, true)}
        onMouseUp={onStopStep}
      >
        +
      </SpanButton>
    </div>
  );
};

export default CustomInputNumber;
