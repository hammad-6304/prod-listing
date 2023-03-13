import styled from "styled-components";

export const Container = styled.div({
  position: "relative",
  display: "inline-block",
  fontFamily: "Roboto, sans-serif",
  fontSize: 14,
});

export const Header = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "8px 16px",
  border: "1px solid rgba(0, 0, 0, 0.23)",
  borderRadius: 4,
  cursor: "pointer",
  backgroundColor: "#fff",
  color: "#333",
  minWidth: 120,
  "&:hover": {
    backgroundColor: "#f5f5f5",
  },
});

export const Icon = styled.span({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 24,
  height: 24,
});

export const List = styled.ul({
  position: "absolute",
  top: "100%",
  left: 0,
  width: "100%",
  padding: "8px 0",
  margin: 0,
  listStyle: "none",
  backgroundColor: "#fff",
  border: "1px solid rgba(0, 0, 0, 0.23)",
  borderRadius: 4,
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
  zIndex: 1,
});

export const ListItem = styled.li({
  padding: "8px 16px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#f5f5f5",
  },
  "&:last-child": {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
});
