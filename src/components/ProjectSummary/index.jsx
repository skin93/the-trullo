import { useFirestore } from 'hooks/useFirestore';
import { useAuthContext } from 'hooks/useAuthContext';
import { useNavigate } from 'react-router';
import Avatar from 'components/Avatar';
import { PageTitle, StyledButton } from 'styles/GlobalStyle';
import {
  AssignedUsers,
  Details,
  DueDate,
  StyledProjectSummary,
} from './ProjectSummary.styled';

const ProjectSummary = ({ project }) => {
  const { user } = useAuthContext();
  const { deleteDocument } = useFirestore('projects');
  const navigate = useNavigate();

  const handleClick = (e) => {
    deleteDocument(project.id);
    navigate('/');
  };

  return (
    <div>
      <StyledProjectSummary>
        <PageTitle>{project.name}</PageTitle>
        <p>By {project.createdBy.displayName}</p>
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
      {user.uid === project.createdBy.id && (
        <StyledButton onClick={handleClick}>Mark as Complete</StyledButton>
      )}
    </div>
  );
};

export default ProjectSummary;
