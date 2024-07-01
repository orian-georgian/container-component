import { LightColors } from "../../enums";
import { ContentWrapper, Section, Content } from "./MainContent.styles";

import Container from "../Container";

function MainContent() {
  return (
    <ContentWrapper data-testid="main-content">
      <Section $bgColor={LightColors.LightGray}>
        <Content>Section number 1</Content>
      </Section>
      <Section $bgColor={LightColors.LightRed}>
        <Content>Section number 2</Content>
      </Section>
      <Section id="blue-section" $bgColor={LightColors.LightBlue}>
        <Content>Section number 3</Content>
      </Section>
      <Section $bgColor={LightColors.LightGreen}>
        <Content>Section number 4</Content>
      </Section>
      <Container
        referenceElementId="blue-section"
        content={
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta
            pretium orci, a cursus magna mattis ac. Duis malesuada ultrices
            diam, quis cursus nibh blandit tempus. Vestibulum at leo sapien.
            Pellentesque aliquam dui a lorem commodo hendrerit. Fusce at lorem
            metus. Sed eu sollicitudin ipsum. Aenean sollicitudin malesuada
            eros, a efficitur libero vulputate vitae. Morbi pulvinar, sapien
            quis sagittis dignissim, dolor nunc iaculis neque, vitae
            pellentesque risus ligula in urna. Nulla vehicula ultricies
            dignissim. Praesent sed quam a dolor semper feugiat. Aenean at
            sollicitudin turpis, sed cursus mi. Aenean pellentesque finibus ex
            accumsan volutpat. Nunc eu elit vitae erat ullamcorper semper a quis
            tellus. Donec pharetra augue id est efficitur, sit amet ullamcorper
            urna venenatis.
          </div>
        }
      />
    </ContentWrapper>
  );
}

export default MainContent;
