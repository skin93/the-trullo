import styled from 'styled-components';

export const StyledButton = styled.button`
  background: #fff;
  padding: 8px 12px;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.primaryColor};
  cursor: pointer;
  font-size: 1em;
  border: 1px solid ${(props) => props.theme.colors.primaryColor};

  &:hover {
    color: #fff;
    background-color: ${(props) => props.theme.colors.primaryColor};
  }
`;
