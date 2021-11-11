import Avatar from 'components/Avatar';
import { Error } from 'styles/GlobalStyle';
import {
  AssignedTo,
  ProjectLink,
  StyledProjectList,
} from './ProjectList.style';

const ProjectList = ({ projects }) => {
  return (
    <StyledProjectList>
      {projects.length === 0 && <Error>No projects</Error>}
      {projects.map((project) => (
        <ProjectLink to={`/project/${project.id}`} key={project.id}>
          <h4>{project.name}</h4>
          <p>Due by {project.dueDate.toDate().toDateString()}</p>
          <AssignedTo>
            <ul>
              {project.assignedUsersList.map((user) => (
                <li key={user.photoURL}>
                  <Avatar src={user.photoURL} />
                </li>
              ))}
            </ul>
          </AssignedTo>
        </ProjectLink>
      ))}
    </StyledProjectList>
  );
};

export default ProjectList;
