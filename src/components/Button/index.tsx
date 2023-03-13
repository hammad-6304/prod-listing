import React from "react";
import styled from "styled-components";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  testId?: string;
}

const Button = styled.button<ButtonProps>({
    padding: "12px 16px",

  fontSize: 16,
  lineHeight: 1,
  
  color: "#333",
  borderRadius: 4,
  backgroundColor: "transparent",
  border: "1px solid rgba(0, 0, 0, 0.23)",
  cursor: "pointer",
  transition: "background-color 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "#f5f5f5",
  },
});

const ExampleButton: React.FC<ButtonProps> = ({
  onClick,
  children,
  testId = "example-button",
}) => {
  return (
    <Button data-testid={testId} onClick={onClick}>
      {children}
    </Button>
  );
};

export default ExampleButton;
