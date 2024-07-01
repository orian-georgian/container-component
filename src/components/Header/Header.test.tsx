import { render, screen } from "@testing-library/react";
import Header from ".";

describe("Header Component", () => {
  test("renders header with correct text content", () => {
    render(<Header />);
    const headerElement = screen.getByTestId("header");
    expect(headerElement).toBeInTheDocument();

    const headerText = screen.getByText("My Container");
    expect(headerText).toBeInTheDocument();

    expect(headerText).toHaveStyle(`
      max-width: 1200px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      gap: 30px;
      padding: 0 30px;
      font-size: 36px;
      font-weight: 700;
    `);
  });
});
