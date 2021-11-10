import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledProjectList = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 20px;
`;

export const ProjectLink = styled(Link)`
  background-color: #fff;
  padding: 16px;
  border-radius: 6px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.05);
  text-decoration: none;
  color: inherit;

  & > h4 {
    font-size: 0.9em;
    color: ${(props) => props.theme.colors.headingColor};
  }

  & > p {
    font-size: 0.9em;
    color: ${(props) => props.theme.colors.textColor};
  }
`;

export const AssignedTo = styled.div`
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px solid #eee;

  & > ul {
    margin: 10px 0;
    display: flex;

    & > li {
      margin-right: 10px;

      & > div {
        width: 30px;
        height: 30px;
      }
    }
  }
`;
