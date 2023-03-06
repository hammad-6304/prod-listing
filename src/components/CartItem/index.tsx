import { IProduct } from "../../types/Cart.types";
import ProductCard from "../ProductCard";
import QuantityCounter from "../QuantityCounter/Index";
import { ActionContainer, CartItemContainer } from "./index.styles";

interface CartItemProps extends IProduct {
  handleDelete: (id: number) => void;
}
const CartItem: React.FC<CartItemProps> = ({ handleDelete, ...item }) => {
  return (
    <CartItemContainer>
      <ProductCard {...item} data-testid="product-card" />
      <ActionContainer>
        <QuantityCounter
          data-testid="quantity-counter"
          initialValue={item.quantity || 1}
        />
        <div data-tesetid="removeBtn" className="removeBtn" onClick={() => handleDelete(item.id)}>
          Remove
        </div>
      </ActionContainer>
    </CartItemContainer>
  );
};

export default CartItem;
