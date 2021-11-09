import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  margin: 24px auto;

  & > span {
    display: block;
    margin-bottom: 6px;
  }
`;

export const Input = styled.input`
  padding: 8px 6px;
  font-size: 1em;
  color: #777;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  min-height: 160px;
  ${Input}
`;

export const Error = styled.div`
  color: red;
  background: pink;
  border: 1px solid red;
  border-radius: 4px;
  padding: 8px;
  margin: 10px 0;
`;
