import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const theme = {
  colors: {
    headingColor: '#444',
    textColor: '#999',
    primaryColor: '#8d69f1',
    highlightColor: '#d13267',
    bgColor: '#f4f4f4',
  },
};

const GlobalStyle = createGlobalStyle`

body {
    font-family: Poppins, sans-serif;
    margin: 0;
    font-size: 1.1em;
    background: ${theme.colors.bgColor};
  }
  ul, li, p, h1, h2, h3, h4 {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style-type: none;
  }
`;

const Error = styled.div`
  color: red;
  background: pink;
  border: 1px solid red;
  border-radius: 4px;
  padding: 8px;
  margin: 10px 0;
`;

const StyledButton = styled.button`
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

const PageTitle = styled.h2`
  font-size: 1em;
  color: ${theme.colors.headingColor};
  display: inline-block;
`;

export { theme, GlobalStyle, StyledButton, Error, PageTitle };
