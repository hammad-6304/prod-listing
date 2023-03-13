import React, { useState } from "react";
import { CartApi, useGetCartQuery } from "../../api/CartApis";
import Button from "../../components/Button";
import CartItem from "../../components/CartItem";
import Dropdown from "../../components/Dropdown";
import { useAppDispatch } from "../../hooks/storeHooks";
import useFilters from "../../hooks/useFilters";
import { IProduct } from "../../types/Cart.types";
import Checkout from "../Checkout";
import { Container, FilterContainer, Heading } from "./index.styles";

const options = ["Black", "Stone", "Red"];

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

  // states

  const [selectedOption, setSelectedOption] = useState<string>();
  const [isCheckout, setCheckout] = useState<boolean>(false);

  const handleOptionSelected = (option: string) => {
    setSelectedOption(option);
    filterBy("colour", option);
  };

  // Filter Products
  const handleFilter = () => {
    filterBy("colour", "Red");
  };

  // Clear all filters
  const handleClearFilter = () => {
    setFilter(null);
    setSelectedOption("");
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

  // open checout
  const checkout = () => {
    setCheckout(true);
  };

  const handleUpdateQty = (id: number, qty: number) => {
    dispatch(
      CartApi.util.updateQueryData("getCart", undefined, (draft) => {
        return draft.map((item) =>
          item.id === id ? { ...item, quantity: qty } : item
        );
      })
    );
  };

  const handleBack = () => {
    setCheckout(false);
  };

  if (isLoading) {
    return <Heading>Loading...</Heading>;
  }

  if (isCheckout) {
    return <Checkout handleBack={handleBack} products={data} />;
  }
  return (
    <Container>
      <Heading>Shopping Cart</Heading>

      <FilterContainer>
        <Dropdown
          options={options}
          selectedOption={selectedOption}
          onOptionSelected={handleOptionSelected}
          placeholder="Filter by Colour"
        />
        <Button onClick={handleClearFilter}>remove filter</Button>
        <Button onClick={checkout}>checkout</Button>
      </FilterContainer>

      {/* Prods will be rendered here */}
      {filteredItems?.map((item: IProduct) => (
        <CartItem
          {...item}
          handleDelete={handleDelete}
          handleUpdateQty={handleUpdateQty}
          key={item.id}
        />
      ))}
    </Container>
  );
};

export default Cart;
