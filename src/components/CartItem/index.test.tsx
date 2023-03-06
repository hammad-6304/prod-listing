import { render, screen, fireEvent } from "@testing-library/react";
import CartItem from "./index";

const mockProduct = {
  id: 1,
  colour: "Black",
  name: "Black Sheet Strappy Textured Glitter Bodycon Dress",
  price: 10,
  img: "http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024",
  quantity: 10,
};

describe("CartItem component", () => {
  test("renders product card with correct props", () => {
    render(<CartItem {...mockProduct} handleDelete={() => {}} />);
    const productCard = screen.getByTestId("product-card");
    expect(productCard).toBeInTheDocument();
    expect(productCard).toHaveTextContent(mockProduct.name);
  });

  test("renders quantity counter with correct initial value", () => {
    render(<CartItem {...mockProduct} handleDelete={() => {}} />);
    const quantityCounter = screen.getByText(mockProduct.quantity);
    expect(quantityCounter).toBeInTheDocument();
    expect(quantityCounter.textContent).toBe(`${mockProduct.quantity}`);
  });

  test("calls handleDelete function when remove button is clicked", () => {
    const handleDelete = jest.fn();
    render(<CartItem {...mockProduct} handleDelete={handleDelete} />);
    const removeButton = screen.getByText("Remove");
    fireEvent.click(removeButton);
    expect(handleDelete).toHaveBeenCalledTimes(1);
    expect(handleDelete).toHaveBeenCalledWith(mockProduct.id);
  });
});
