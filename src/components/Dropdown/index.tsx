import React, { useState } from "react";
import { Container, Header, Icon, List, ListItem } from "./index.styles";

interface Props {
  options: string[];
  placeholder?: string;
  selectedOption?: string;
  onOptionSelected: (option: string) => void;
  testId?: string;
}

const Dropdown: React.FC<Props> = ({
  options,
  placeholder = "Select an option",
  selectedOption,
  onOptionSelected,
  testId = "dropdown",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHeaderClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelected = (option: string) => () => {
    onOptionSelected(option);
    setIsOpen(false);
  };

  return (
    <Container data-testid={testId}>
      <Header data-testid={`${testId}-header`} onClick={handleHeaderClick}>
        {selectedOption || placeholder}
        <Icon data-testid={`${testId}-icon`}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 9L12 15L18 9H6Z"
              fill="#333"
            />
          </svg>
        </Icon>
      </Header>
      {isOpen && (
        <List data-testid={`${testId}-list`}>
          {options.map((option) => (
            <ListItem
              data-testid={`${testId}-list-item-${option}`}
              key={option}
              onClick={handleOptionSelected(option)}
            >
              {option}
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default Dropdown;
