import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { debounce } from "ts-debounce";

import {
  ContainerWrapper,
  OpenedContent,
  ClosedContent,
} from "./Container.styles";

interface ContainerProps {
  content: React.ReactNode;
  referenceElementId: string;
}

const maxHeight = 300;

function Container({ content, referenceElementId }: ContainerProps) {
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
    if (referenceElement) {
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
    }

    return undefined;
  }, [referenceElementId, checkVisibility, handleScrollResize]);

  return (
    <ContainerWrapper
      ref={containerRef}
      $isOpen={isOpen}
      $maxHeight={maxHeight}
    >
      {isOpen ? (
        <OpenedContent>{content}</OpenedContent>
      ) : (
        <ClosedContent>⤢</ClosedContent>
      )}
    </ContainerWrapper>
  );
}

export default Container;
