import { render, screen } from "@testing-library/react";
import ProductCard from "./index";

const testProduct = {
  id: 1,
  colour: "Black",
  name: "Black Sheet Strappy Textured Glitter Bodycon Dress",
  price: 10,
  img: "http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024",
  quantity: 10,
};

describe("ProductCard component", () => {
  it("renders the product name", () => {
    render(<ProductCard {...testProduct} />);
    const titleElement = screen.getByText(testProduct.name);
    expect(titleElement).toBeInTheDocument();
  });
});
