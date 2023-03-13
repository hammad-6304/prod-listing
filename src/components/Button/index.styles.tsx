import styled from "styled-components";

interface ButtonProps {
  color?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
}

export const Button = styled.button<ButtonProps>(({ size = "small", color }) => ({
  // Colour Variants
  backgroundColor:
    color === "primary"
      ? "#007bff"
      : color === "secondary"
      ? "#6c757d"
      : "transparent",
  color: color ? "#fff" : "#212529",
  border: color ? "none" : "1px solid #6c757d",
  borderRadius: "4px",
  // Based on button Sizes
  fontSize: size === "small" ? "16px" : size === "medium" ? "20px" : "24px",
  // Based on button Sizes
  padding:
    size === "small"
      ? "8px 16px"
      : size === "medium"
      ? "12px 24px"
      : "16px 32px",
  cursor: "pointer",
}));

