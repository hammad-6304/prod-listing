import React, { useState } from "react";
import { ICounter } from "../../types/Cart.types";
import {
  Count,
  CounterContainer,
  DecrementButton,
  IncrementButton,
} from "./index.styles";

const QuantityCounter: React.FC<ICounter> = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <CounterContainer>
      <DecrementButton onClick={handleDecrement} disabled={count === 1}>
        -
      </DecrementButton>
      <Count>{count}</Count>
      <IncrementButton onClick={handleIncrement}>+</IncrementButton>
    </CounterContainer>
  );
};

export default QuantityCounter;
