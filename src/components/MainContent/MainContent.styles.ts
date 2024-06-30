import styled from "styled-components";
import { LightColors } from "../../enums";

interface SectionProps {
  $bgColor?: LightColors;
}

export const ContentWrapper = styled.main`
  width: 100%;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 30px;
`;

export const Section = styled.section<SectionProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  color: var(--dark-gray);
  min-height: 600px;
  background-color: ${({ $bgColor }) => `var(--${$bgColor})`};
`;
