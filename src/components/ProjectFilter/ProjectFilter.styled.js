import styled from 'styled-components';

export const StyledProjectFilter = styled.div`
  margin: 30px auto;
`;

export const Filters = styled.nav`
  display: flex;
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
  & > p {
    font-size: 0.9em;
    margin-right: 10px;
  }
`;

export const FilterButton = styled.button.attrs((props) => ({
  active: props.active || '',
}))`
  background: transparent;
  border: 0;
  font-family: inherit;
  font-weight: bold;
  color: ${(props) =>
    props.active
      ? props.theme.colors.primaryColor
      : props.theme.colors.textColor};
  cursor: pointer;
  border-right: 1px solid #e4e4e4;
  font-size: 0.9em;

  &:last-child {
    border: 0;
  }
`;
