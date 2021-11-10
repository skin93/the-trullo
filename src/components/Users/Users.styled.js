import styled from 'styled-components';

export const UserList = styled.div`
  width: 250px;
  min-width: 250px;
  padding: 30px;
  box-sizing: border-box;
  background: #fbfbfb;
  color: ${(props) => props.theme.colors.headingColor};

  & > h2 {
    text-align: right;
    margin-bottom: 40px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
    font-size: 1.2em;
  }
`;

export const UserListItem = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 20px auto;

  & > div {
    margin-left: 10px;
    width: 40px;
    height: 40px;
  }
`;

export const UserOnline = styled.span`
  display: inline-block;
  margin-right: 10px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #0ebb50;
  margin-top: 2px;
`;
