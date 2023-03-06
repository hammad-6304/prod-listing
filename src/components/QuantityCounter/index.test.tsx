import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import QuantityCounter from './Index';

describe('QuantityCounter', () => {
  it('renders with an initial count value', () => {
    const { getByTestId } = render(<QuantityCounter initialValue={5} />);
    const countElement = getByTestId('quantity-counter-count');
    expect(countElement.textContent).toBe('5');
  });

  it('increments the count when the increment button is clicked', () => {
    const { getByTestId } = render(<QuantityCounter initialValue={2} />);
    const incrementButton = getByTestId('quantity-counter-increment');
    const countElement = getByTestId('quantity-counter-count');
    fireEvent.click(incrementButton);
    expect(countElement.textContent).toBe('3');
  });

  it('decrements the count when the decrement button is clicked', () => {
    const { getByTestId } = render(<QuantityCounter initialValue={2} />);
    const decrementButton = getByTestId('quantity-counter-decrement');
    const countElement = getByTestId('quantity-counter-count');
    fireEvent.click(decrementButton);
    expect(countElement.textContent).toBe('1');
  });

  it('does not decrement the count below 0', () => {
    const { getByTestId } = render(<QuantityCounter initialValue={0} />);
    const decrementButton = getByTestId('quantity-counter-decrement');
    const countElement = getByTestId('quantity-counter-count');
    fireEvent.click(decrementButton);
    expect(countElement.textContent).toBe('0');
  });

  it('disables the decrement button when the count is 1', () => {
    const { getByTestId } = render(<QuantityCounter initialValue={1} />);
    const decrementButton = getByTestId('quantity-counter-decrement');
    expect(decrementButton).toBeDisabled();
  });
});
