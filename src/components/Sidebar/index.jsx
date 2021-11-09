import DashboardIcon from 'assets/dashboard_icon.svg';
import AddIcon from 'assets/add_icon.svg';

import {
  LinkItem,
  Links,
  SidebarContent,
  StyledSidebar,
  User,
  StyledNavLink,
} from './Sidebar.styled';

const Sidebar = () => {
  return (
    <StyledSidebar>
      <SidebarContent>
        <User>
          {/* TODO: avatar and user */}
          <p>Hey user</p>
        </User>
        <Links>
          <ul>
            <LinkItem>
              <StyledNavLink to='/'>
                <img src={DashboardIcon} alt='Dashboard icon' />
                <span>Dashboard</span>
              </StyledNavLink>
            </LinkItem>
            <LinkItem>
              <StyledNavLink to='/create'>
                <img src={AddIcon} alt='Add project icon' />
                <span>New Project</span>
              </StyledNavLink>
            </LinkItem>
          </ul>
        </Links>
      </SidebarContent>
    </StyledSidebar>
  );
};

export default Sidebar;
