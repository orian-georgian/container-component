import styled from "styled-components";
import { LightColors } from "../../enums";

const ContentWrapper = styled.main`
  width: 100%;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 30px;
`;

const Section = styled.section<{ bgColor: LightColors }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  color: var(--dark-gray);
  min-height: 600px;
  background-color: ${({ bgColor }) => `var(--${bgColor})`};
`;
function MainContent() {
  return (
    <ContentWrapper>
      <Section bgColor={LightColors.LightGray}>
        <Content>Section number 1</Content>
      </Section>
      <Section bgColor={LightColors.LightRed}>
        <Content>Section number 2</Content>
      </Section>
      <Section bgColor={LightColors.LightBlue}>
        <Content>Section number 3</Content>
      </Section>
    </ContentWrapper>
  );
}

export default MainContent;
