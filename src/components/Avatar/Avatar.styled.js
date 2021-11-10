import styled from 'styled-components';

export const StyledAvatar = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%50px;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
  }
`;
