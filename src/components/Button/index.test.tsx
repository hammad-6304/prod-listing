import { render, fireEvent } from "@testing-library/react";
import Button from "./index";

describe("ExampleButton", () => {
  test("renders children", () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText("Click me")).toBeInTheDocument();
  });

  test("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Button onClick={handleClick} testId="example-button">
        Click me
      </Button>
    );
    fireEvent.click(getByTestId("example-button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
