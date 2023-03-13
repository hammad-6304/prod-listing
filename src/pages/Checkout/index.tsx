import { FC } from "react";
import { Button } from "../../components/Button/index.styles";
import { IProduct } from "../../types/Cart.types";
import {
  ColumnHeading,
  Container,
  Heading,
  Image,
  Price,
  ProductContainer,
  Quantity,
  TotalPrice,
} from "./index.styles";

interface ICheckoutProps {
  products?: IProduct[];
  handleBack?: () => void;
}

const Checkout: FC<ICheckoutProps> = ({ products = [], handleBack }) => {
  const totalAmount = products.reduce(
    (total, product) => total + product.price * (product.quantity || 1),
    0
  );

  return (
    <Container>
      <Heading>Checkout</Heading>
      <ProductContainer>
        <ColumnHeading>Product</ColumnHeading>
        <ColumnHeading>Name</ColumnHeading>
        <ColumnHeading>Price</ColumnHeading>
        <ColumnHeading>Quantity</ColumnHeading>
        <ColumnHeading>Total Price</ColumnHeading>
      </ProductContainer>
      {products.map((product: IProduct) => {
        let qty = product.quantity || 1;
        return (
          <ProductContainer key={product.id}>
            <Image src={product.img} alt={product.name} />
            <Price>{product.name}</Price>
            <Price>${product.price}</Price>
            <Quantity>{qty}</Quantity>
            <TotalPrice>${product.price * qty}</TotalPrice>
          </ProductContainer>
        );
      })}
      <TotalPrice>Total Amount: ${totalAmount}</TotalPrice>
      <Button onClick={handleBack}>Go Back</Button>
    </Container>
  );
};

export default Checkout;
