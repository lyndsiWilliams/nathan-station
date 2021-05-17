import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: black;
  position: relative;
  z-index: 1;

  a {
    color: lightgray;
    font-size: 1.2em;
    padding: .5% 0;

    &:hover {
      color: gray;
    }
  }
`;

const NavBar = () => {
  return (
    <StyledNavBar>
      <Link to='/'>Nathan Station</Link>
      <Link to='/keith'>Keith Apicary</Link>
      <Link to='/dad'>Dad</Link>
    </StyledNavBar>
  )
};

export default NavBar;