import styled from "styled-components";

export const CartItemContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "5px 0",
  border: "1px solid grey",
  borderRadius: "8px",
  boxShadow: "2px 2px 8px grey",
});
export const ActionContainer = styled.div({
  textAlign: "center",
  marginRight: "10px",
  "& .removeBtn": {
    background: "teal",
    marginTop: "10px",
    borderRadius: "8px",
    fontWeight: "bold",
    color: "black",
    border: "1px solid grey",
    cursor: "pointer",
    transition: ".1s all ease-in",
    "&:hover": {
      color: "white",
    },
  },
});
