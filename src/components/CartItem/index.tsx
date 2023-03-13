import { IProduct } from "../../types/Cart.types";
import ProductCard from "../ProductCard";
import QuantityCounter from "../QuantityCounter/Index";
import { ActionContainer, CartItemContainer } from "./index.styles";

interface CartItemProps extends IProduct {
  handleDelete: (id: number) => void;
  handleUpdateQty?: (id: number, qty: number) => void;
}
const CartItem: React.FC<CartItemProps> = ({
  handleDelete,
  handleUpdateQty,
  ...item
}) => {
  const handleUpdate = (value: number) => {
    handleUpdateQty && handleUpdateQty(item.id, value);
  };
  return (
    <CartItemContainer>
      <ProductCard {...item} data-testid="product-card" />
      <ActionContainer>
        <QuantityCounter
          data-testid="quantity-counter"
          initialValue={item.quantity || 1}
          onChange={handleUpdate}
        />
        <div
          data-tesetid="removeBtn"
          className="removeBtn"
          onClick={() => handleDelete(item.id)}
        >
          Remove
        </div>
      </ActionContainer>
    </CartItemContainer>
  );
};

export default CartItem;
