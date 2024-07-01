import { render, fireEvent, screen } from "@testing-library/react";
import Container from ".";

describe("Container component", () => {
  const contentMock = (
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
  );

  const referenceElementId = "blue-section";

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test("renders ClosedContent initially", () => {
    render(
      <Container
        content={contentMock}
        referenceElementId={referenceElementId}
      />,
    );

    expect(screen.getByTestId("closed-content")).toBeInTheDocument();
    expect(screen.queryByTestId("opened-content")).not.toBeInTheDocument();
  });

  test("renders OpenedContent when scrolled to reference element", () => {
    render(
      <div>
        <div style={{ height: "600px" }}>Some filler content</div>
        <div id={referenceElementId} style={{ height: "600px" }}>
          Reference Element
        </div>
        <Container
          content={contentMock}
          referenceElementId={referenceElementId}
        />
      </div>,
    );

    const referenceElement = screen.getByText("Reference Element");
    fireEvent.click(referenceElement);

    jest.advanceTimersByTime(100);

    expect(screen.queryByTestId("closed-content")).not.toBeInTheDocument();
    expect(screen.getByTestId("opened-content")).toBeInTheDocument();
  });

  test("cleans up event listeners on unmount", () => {
    const removeEventListenerMock = jest.fn();
    window.removeEventListener = removeEventListenerMock;

    const { unmount } = render(
      <div>
        <div id={referenceElementId} style={{ height: "600px" }}>
          Reference Element
        </div>
        <Container
          content={contentMock}
          referenceElementId={referenceElementId}
        />
      </div>,
    );

    unmount();

    expect(removeEventListenerMock).toHaveBeenCalledTimes(2);
    expect(removeEventListenerMock).toHaveBeenCalledWith(
      "scroll",
      expect.any(Function),
    );
    expect(removeEventListenerMock).toHaveBeenCalledWith(
      "resize",
      expect.any(Function),
    );
  });
});
