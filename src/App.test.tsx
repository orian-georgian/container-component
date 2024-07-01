import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("renders Header component", () => {
    render(<App />);
    const headerElement = screen.getByTestId("header");

    expect(headerElement).toBeInTheDocument();
  });

  test("renders MainContent component", () => {
    render(<App />);
    const mainContentElement = screen.getByTestId("main-content");

    expect(mainContentElement).toBeInTheDocument();
  });

  test("renders Footer component", () => {
    render(<App />);
    const footerElement = screen.getByTestId("footer");

    expect(footerElement).toBeInTheDocument();
  });
});
