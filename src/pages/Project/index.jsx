import { useParams } from 'react-router-dom';
import { useDocument } from 'hooks/useDocument';
import { Error } from 'styles/GlobalStyle';

const Project = () => {
  const { id } = useParams();
  const { error, document } = useDocument('projects', id);

  if (error) return <Error>{error}</Error>;
  if (!document) return <div>Loading...</div>;

  return (
    <div className='project-details'>
      <h1>{document.name}</h1>
    </div>
  );
};

export default Project;
