import { render } from "@testing-library/react";
import Checkout from "./index";

describe("Checkout", () => {
  const mockProducts = [
    {
      id: 1,
      name: "Product A",
      price: 10.0,
      quantity: 2,
      img: "https://example.com/product-a.jpg",
      colour: "red",
    },
    {
      id: 2,
      name: "Product B",
      price: 20.0,
      quantity: 1,
      img: "https://example.com/product-b.jpg",
      colour: "red",
    },
  ];

  test("renders checkout page with correct heading", () => {
    const { getByText } = render(<Checkout products={mockProducts} />);
    const heading = getByText(/checkout/i);
    expect(heading).toBeInTheDocument();
  });

  test("renders product details for each item in cart", () => {
    const { getByText, getAllByRole } = render(
      <Checkout products={mockProducts} />
    );

    mockProducts.forEach((product) => {
      const name = getByText(product.name);
      expect(name).toBeInTheDocument();

      const quantity = getByText(product.quantity);
      expect(quantity).toBeInTheDocument();
    });
  });

  test("calculates and displays total amount for all products", () => {
    const { getByText } = render(<Checkout products={mockProducts} />);
    const total = getByText(
      `Total Amount: $${mockProducts.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      )}`
    );
    expect(total).toBeInTheDocument();
  });
});
