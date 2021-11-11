import styled from 'styled-components';

export const ProjectDetails = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  align-items: flex-start;
  grid-gap: 60px;
`;

export const StyledProjectSummary = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 4px;

  & + button {
    margin-top: 20px;
  }

  & > h4 {
    color: ${(props) => props.theme.colors.textColor};
    font-size: 0.9em;
  }
`;

export const DueDate = styled.p`
  margin: 30px 0;
  color: ${(props) => props.theme.colors.titleColor};
`;

export const Details = styled.p`
  margin: 30px 0;
  color: ${(props) => props.theme.colors.textColor};
  line-height: 1.8em;
  font-size: 0.9em;
`;

export const AssignedUsers = styled.div`
  display: flex;
  margin-top: 20px;

  & > div {
    margin-right: 10px;
  }
`;
