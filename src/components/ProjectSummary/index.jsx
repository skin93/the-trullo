import Avatar from 'components/Avatar';
import { PageTitle } from 'styles/GlobalStyle';
import {
  AssignedUsers,
  Details,
  DueDate,
  StyledProjectSummary,
} from './ProjectSummary.styled';

const ProjectSummary = ({ project }) => {
  return (
    <div>
      <StyledProjectSummary>
        <PageTitle>{project.name}</PageTitle>
        <DueDate>
          Project due by {project.dueDate.toDate().toDateString()}
        </DueDate>
        <Details>{project.details}</Details>
        <h4>Project is assigned to:</h4>
        <AssignedUsers>
          {project.assignedUsersList.map((user) => (
            <div key={user.id}>
              <Avatar src={user.photoURL} alt={`${user.displayName} avatar`} />
            </div>
          ))}
        </AssignedUsers>
      </StyledProjectSummary>
    </div>
  );
};

export default ProjectSummary;
