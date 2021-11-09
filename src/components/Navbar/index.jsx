import Temple from 'assets/temple.svg';
import { StyledButton } from 'styles/Button.styled';
import { Logo, NavItems, StyledLink, StyledNavbar } from './Navbar.styled';

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavItems>
        <Logo>
          <img src={Temple} alt='Trullo logo' />
          <span>The Trullo</span>
        </Logo>
        <li>
          <StyledLink to='/login'>Login</StyledLink>
        </li>
        <li>
          <StyledLink to='/signup'>Signup</StyledLink>
        </li>
        <li>
          <StyledButton>Logout</StyledButton>
        </li>
      </NavItems>
    </StyledNavbar>
  );
};

export default Navbar;
