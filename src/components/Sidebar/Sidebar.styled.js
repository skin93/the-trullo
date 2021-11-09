import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledSidebar = styled.div`
  width: 300px;
  min-width: 300px;
  background: ${(props) => props.theme.colors.primaryColor};
  min-height: 100vh;
  box-sizing: border-box;
  position: relative;
  color: #fff;
`;

export const SidebarContent = styled.div`
  position: fixed;
  width: inherit;
`;

export const User = styled.div`
  font-weight: bold;
  text-align: center;
  letter-spacing: 1px;
  padding: 40px 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const Links = styled.nav`
  margin-top: 80px;
  margin-left: 20px;
`;

export const LinkItem = styled.li`
  margin-top: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  padding: 10px;
  text-decoration: none;
  width: 100%;
  color: #fff;
  box-sizing: border-box;

  & > img {
    margin-right: 10px;
    filter: invert(100%);
  }

  &.active {
    color: #555;
    background: ${(props) => props.theme.colors.bgColor};
    border-radius: 20px 0 0 20px;

    & > img {
      filter: invert(40%);
    }
  }
`;
