import styled from "styled-components";

const HeaderWrapper = styled.header`
  height: 90px;
  width: 100%;
  background-color: var(--dark-gray);
  color: var(--true-white);
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 0 30px;
  font-size: 36px;
  font-weight: 700;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>Container Component</HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
