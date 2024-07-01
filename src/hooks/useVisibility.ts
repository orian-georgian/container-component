import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { debounce } from "ts-debounce";

function useVisibility(
  referenceElementId: string,
): [boolean, React.RefObject<HTMLDivElement>] {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const referenceElementRef = useRef<HTMLElement | null>(null);

  const checkVisibility = useCallback(() => {
    if (referenceElementRef.current && containerRef.current) {
      const referenceRect = referenceElementRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();

      const open =
        containerRect.top + containerRect.height >= referenceRect.top &&
        containerRect.bottom <= referenceRect.bottom + containerRect.height &&
        containerRect.left + containerRect.width >= referenceRect.left &&
        containerRect.right <= referenceRect.right + containerRect.width;

      setIsOpen(open);
    }
  }, []);

  const handleScrollResize = useMemo(
    () => debounce(checkVisibility, 100),
    [checkVisibility],
  );

  useEffect(() => {
    const referenceElement = document.getElementById(referenceElementId);
    if (!referenceElement) return undefined;

    referenceElementRef.current = referenceElement;

    const handleEvent = () => {
      handleScrollResize();
    };

    window.addEventListener("scroll", handleEvent);
    window.addEventListener("resize", handleEvent);

    checkVisibility();

    return () => {
      window.removeEventListener("scroll", handleEvent);
      window.removeEventListener("resize", handleEvent);
    };
  }, [referenceElementId, checkVisibility, handleScrollResize]);

  return [isOpen, containerRef];
}

export default useVisibility;
