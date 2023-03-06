import React from "react";
import { CartApi, useGetCartQuery } from "../../api/CartApis";
import CartItem from "../../components/CartItem";
import { useAppDispatch } from "../../hooks/storeHooks";
import useFilters from "../../hooks/useFilters";
import { IProduct } from "../../types/Cart.types";
import { Container, FilterContainer, Heading } from "./index.styles";

const Cart: React.FC = () => {
  // dispatch hook
  const dispatch = useAppDispatch();

  // rtkQuery for getting all the products
  const { data, isLoading } = useGetCartQuery();

  // Generic hook which can be used everywhere for filtering
  const { filteredItems, setFilter, filterBy } = useFilters(
    data || [],
    "colour"
  );

  // Filter Products
  const handleFilter = () => {
    filterBy("colour", "Red");
  };

  // Clear all filters
  const handleClearFilter = () => {
    setFilter(null);
  };

  // Delete an item from cart
  const handleDelete = (id: number) => {
    // we're using utils provided by RTK to invalidate cache directly
    dispatch(
      CartApi.util.updateQueryData("getCart", undefined, (products) => {
        let refined = products.filter((item) => item.id !== id);
        return refined;
      })
    );
  };

  if(isLoading){
    return <Heading>Loading...</Heading>
  }
  return (
    <Container>
      <Heading>Shopping Cart</Heading>

      <FilterContainer>
        <button onClick={handleFilter}> filter by red color</button>
        <button onClick={handleClearFilter}> remove filter</button>
      </FilterContainer>

      {/* Prods will be rendered here */}
      {filteredItems?.map((item: IProduct) => (
        <CartItem {...item} handleDelete={handleDelete} key={item.id} />
      ))}
    </Container>
  );
};

export default Cart;
