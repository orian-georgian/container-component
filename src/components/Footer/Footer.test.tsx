import { render, screen } from "@testing-library/react";
import Footer from ".";

describe("Footer Component", () => {
  test("renders footer with correct text content and styles", () => {
    render(<Footer />);
    const footerElement = screen.getByTestId("footer");

    expect(footerElement).toBeInTheDocument();

    const footerText = screen.getByText("© Developed by Georgian, 2024");

    expect(footerText).toBeInTheDocument();
    expect(footerElement).toHaveStyle(`
      width: 100%;
      text-align: center;
      padding: 20px 30px;
      font-size: 13px;
      background-color: var(--dark-gray);
      color: var(--true-white);
    `);
  });
});
