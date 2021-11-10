import { useParams } from 'react-router-dom';
import { useDocument } from 'hooks/useDocument';
import { Error } from 'styles/GlobalStyle';
import ProjectSummary from 'components/ProjectSummary';
import { ProjectDetails } from 'components/ProjectSummary/ProjectSummary.styled';
import ProjectComments from 'components/ProjectComments';

const Project = () => {
  const { id } = useParams();
  const { error, document } = useDocument('projects', id);

  if (error) return <Error>{error}</Error>;
  if (!document) return <div>Loading...</div>;

  return (
    <ProjectDetails>
      <ProjectSummary project={document} />
      <ProjectComments project={document} />
    </ProjectDetails>
  );
};

export default Project;
