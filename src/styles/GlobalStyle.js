import { createGlobalStyle } from 'styled-components';

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
  
  /* layout */
  .page-title {
    font-size: 1em;
    color: ${theme.colors.headingColor};
    display: inline-block;
  }
  .btn {
    background: #fff;
    padding: 8px 12px;
    border-radius: 4px;
    color: ${theme.colors.primaryColor};
    cursor: pointer;
    font-size: 1em;
    border: 1px solid ${theme.colors.primaryColor};
  }
  .btn:hover {
    color: #fff;
    background-color: ${theme.colors.primaryColor};
  }
  
  /* forms */
  label {
    display: block;
    margin: 24px auto;
  }
  label span {
    display: block;
    margin-bottom: 6px;
  }
  input, textarea {
    padding: 8px 6px;
    font-size: 1em;
    color: #777;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  textarea {
    min-height: 160px;
  }
  .error {
    color: red;
    background: pink;
    border: 1px solid red;
    border-radius: 4px;
    padding: 8px;
    margin: 10px 0;
  }
`;

export { theme, GlobalStyle };
