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
    <div data-testid="product-card">
      <CardContainer>
        <CardBackground backgroundImage={img} />
        <TitleContainer>
          <Title>{name}</Title>
        </TitleContainer>
      </CardContainer>
    </div>
  );
};

export default ProductCard;
