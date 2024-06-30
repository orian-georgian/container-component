import styled from "styled-components";

export const ContainerWrapper = styled.div<{
  isOpen: boolean;
  maxHeight: number;
}>`
  position: fixed;
  bottom: 40px;
  right: 40px;
  max-width: ${({ isOpen }) => (isOpen ? "400px" : "50px")};
  height: ${({ isOpen, maxHeight }) => (isOpen ? `${maxHeight}px` : "50px")};
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: height 0.2s ease;
  border-radius: 6px;
  overflow: hidden;

  @media (max-width: 480px) {
    bottom: 10px;
    right: 10px;
    max-width: ${({ isOpen }) => (isOpen ? "90vw" : "50px")};
    height: ${({ isOpen }) => (isOpen ? "60vh" : "50px")};
  }
`;

export const OpenedContent = styled.div`
  padding: 20px;
  height: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: var(--true-white);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--light-gray);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--dark-gray);
  }

  scrollbar-width: thin;
  scrollbar-color: var(--light-gray) var(--true-white);
`;

export const ClosedContent = styled.div`
  min-width: 50px;
  height: 100%;
  font-size: 24px;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
`;
