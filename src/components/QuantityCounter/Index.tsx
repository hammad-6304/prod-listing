import { on } from "events";
import React, { useState } from "react";
import { ICounter } from "../../types/Cart.types";
import {
  Count,
  CounterContainer,
  DecrementButton,
  IncrementButton,
} from "./index.styles";

const QuantityCounter: React.FC<ICounter> = ({ initialValue, onChange }) => {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    setCount(count + 1);
    onChange && onChange(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      onChange && onChange(count - 1);
    }
  };

  return (
    <div data-testid="quantity-counter">
      <CounterContainer>
        <DecrementButton onClick={handleDecrement} disabled={count === 1}>
          -
        </DecrementButton>
        <Count>{count}</Count>
        <IncrementButton onClick={handleIncrement}>+</IncrementButton>
      </CounterContainer>
    </div>
  );
};

export default QuantityCounter;
