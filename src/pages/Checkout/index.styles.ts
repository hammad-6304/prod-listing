import styled from "styled-components";

export const Container = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f5f5f5",
  });
  
  export const Heading = styled.h2({
    fontSize: "30px",
    fontWeight: "bold",
    margin: "20px 0",
    color: "#333",
  });
  
  export const ProductContainer = styled.div({
    display: "grid",
    gridTemplateColumns: "120px auto 120px 120px 120px",
    gridGap: "10px",
    width: "100%",
    marginBottom: "10px",
    padding: "10px",
    backgroundColor: "#fff",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
    alignItems: "center",
    borderRadius: "10px",
  });
  
  export const Image = styled.img({
    width: "60px",
    height: "60px",
    objectFit: "cover",
    marginRight: "10px",
    borderRadius: "10px",
  });
  
  export const ColumnHeading = styled.p({
    fontWeight: "bold",
    color: "#1877f2",
  });
  
  export const Price = styled.p({
    color: "#333",
  });
  
  export const Quantity = styled.p({
    textAlign: "center",
    color: "#333",
    fontWeight: "bold",
  });
  
  export const TotalPrice = styled.p({
    fontSize: "22px",
    fontWeight: "bold",
    marginTop: "20px",
    color: "#333",
  });