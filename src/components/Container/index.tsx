import React from "react";
import useVisibility from "../../hooks/useVisibility";
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
  const [isOpen, containerRef] = useVisibility(referenceElementId);

  return (
    <ContainerWrapper
      ref={containerRef}
      $isOpen={isOpen}
      $maxHeight={maxHeight}
    >
      {isOpen ? (
        <OpenedContent data-testid="opened-content">{content}</OpenedContent>
      ) : (
        <ClosedContent data-testid="closed-content">⤢</ClosedContent>
      )}
    </ContainerWrapper>
  );
}

export default Container;
