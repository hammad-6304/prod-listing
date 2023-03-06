import styled from "styled-components";

export const CounterContainer = styled.div({
  display: "flex",
  alignItems: "center",
});

export const Button = styled.button({
  width: "24px",
  height: "24px",
  borderRadius: "50%",
  backgroundColor: "teal",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  margin: "0 8px",
});

export const Count = styled.div({
  fontSize: "24px",
  fontWeight: "bold",
  minWidth: "30px",
  textAlign: "center",
});

export const DecrementButton = styled(Button)(
  ({ disabled }: { disabled: boolean }) => ({
    opacity: disabled ? 0.7 : 1,
  })
);

export const IncrementButton = styled(Button)({});
