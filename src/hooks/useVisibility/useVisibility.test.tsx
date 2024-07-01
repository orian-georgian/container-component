import { render } from "@testing-library/react";
import useVisibility from ".";

jest.mock("ts-debounce", () => ({
  debounce: (fn: any) => fn,
}));

describe("useVisibility hook", () => {
  test("should correctly determine visibility", () => {
    function TestComponent({
      referenceElementId,
    }: {
      referenceElementId: string;
    }) {
      const [isOpen, containerRef] = useVisibility(referenceElementId);

      return (
        <div>
          <div ref={containerRef}>Container</div>
          <div id={referenceElementId}>Reference Element</div>
          {isOpen ? <p>Visible</p> : <p>Not Visible</p>}
        </div>
      );
    }

    const { getByText } = render(
      <TestComponent referenceElementId="reference-element" />,
    );

    expect(getByText("Visible")).toBeInTheDocument();
  });
});
