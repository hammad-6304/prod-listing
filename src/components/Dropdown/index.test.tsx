import { render, fireEvent, screen } from "@testing-library/react";
import Dropdown from "./index";

describe("Dropdown", () => {
  const options = ["Black", "Stone", "Red"];
  const placeholder = "Select an option";
  const selectedOption = "Black";
  const onOptionSelected = jest.fn();
  const testId = "dropdown";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders with placeholder when no option is selected", () => {
    render(
      <Dropdown
        options={options}
        placeholder={placeholder}
        onOptionSelected={onOptionSelected}
        testId={testId}
      />
    );
    expect(screen.getByTestId(`${testId}-header`)).toHaveTextContent(
      placeholder
    );
  });

  it("renders with selected option when an option is selected", () => {
    render(
      <Dropdown
        options={options}
        selectedOption={selectedOption}
        onOptionSelected={onOptionSelected}
        testId={testId}
      />
    );
    expect(screen.getByTestId(`${testId}-header`)).toHaveTextContent(
      selectedOption
    );
  });

  it("opens and closes the dropdown on header click", () => {
    render(
      <Dropdown
        options={options}
        placeholder={placeholder}
        onOptionSelected={onOptionSelected}
        testId={testId}
      />
    );
    const header = screen.getByTestId(`${testId}-header`);
    fireEvent.click(header);
    expect(screen.getByTestId(`${testId}-list`)).toBeInTheDocument();
    fireEvent.click(header);
    expect(screen.queryByTestId(`${testId}-list`)).not.toBeInTheDocument();
  });
});
