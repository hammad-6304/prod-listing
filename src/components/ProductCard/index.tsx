import React from "react";
import { IProduct } from "../../types/Cart.types";
import {
  CardBackground,
  CardContainer,
  Title,
  TitleContainer,
} from "./index.styles";

const ProductCard: React.FC<IProduct> = ({ img, name }) => {
  return (
    <CardContainer>
      <CardBackground backgroundImage={img} />
      <TitleContainer>
        <Title>{name}</Title>
      </TitleContainer>
    </CardContainer>
  );
};

export default ProductCard;
