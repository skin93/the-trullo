import styled from 'styled-components';

export const StyledProjectComments = styled.div`
  & > h4 {
    color: ${(props) => props.theme.colors.headingColor};
  }
`;

export const CommentItem = styled.li`
  padding: 16px;
  border-radius: 4px;
  border: 1px solid #f2f2f2;
  margin-top: 20px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.05);
  background: #fff;
`;

export const CommentAuthor = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.titleColor};

  & > div {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
`;

export const CommentDate = styled.div`
  color: ${(props) => props.theme.colors.textColor};
  font-size: 0.9em;
  margin: 4px 0 10px;
`;

export const CommentContent = styled.div`
  color: ${(props) => props.theme.colors.textColor};
`;
