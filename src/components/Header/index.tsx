import { HeaderWrapper, HeaderContent } from "./Header.styles";

function Header() {
  return (
    <HeaderWrapper data-testid="header">
      <HeaderContent>My Container</HeaderContent>
    </HeaderWrapper>
  );
}

export default Header;
