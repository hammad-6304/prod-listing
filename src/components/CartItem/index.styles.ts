import styled from "styled-components";

export const CartItemContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "20px 0",
  // border: "1px solid grey",
  borderRadius: "8px",
  boxShadow: "#575555c2 1px 3px 11px 1px",
  background: "rgb(214 214 214)",
});
export const ActionContainer = styled.div({
  textAlign: "center",
  marginRight: "10px",
  "& .removeBtn": {
    background: "rgb(144, 202, 249)",
    marginTop: "10px",
    borderRadius: "8px",
    fontWeight: "bold",
    color: "black",
    border:'1px solid transparent',
    padding: "2px",
    cursor: "pointer",
    transition: ".2s all ease-in",
    "&:hover": {
      color: "white",
      boxShadow:"#a9b3b9 3px 6px 5px 1px"
    },
  },
});
