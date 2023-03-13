import styled from "styled-components";

export const CounterContainer = styled.div({
  display: "flex",
  alignItems: "center",
});

export const Button = styled.button({
  width: "24px",
  height: "24px",
  borderRadius: "50%",
  backgroundColor: "rgb(144, 202, 249)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  margin: "0 8px",
});

export const Count = styled.div.attrs({
  "data-testid": "quantity-counter-count",
})({
  fontSize: "24px",
  fontWeight: "bold",
  minWidth: "30px",
  textAlign: "center",
});

export const DecrementButton = styled(Button).attrs({
  "data-testid": "quantity-counter-decrement",
})(({ disabled }: { disabled: boolean }) => ({
  backgroundColor: disabled ? "lightGrey" : "rgb(144, 202, 249)",
}));

export const IncrementButton = styled(Button).attrs({
  "data-testid": "quantity-counter-increment",
})({});
