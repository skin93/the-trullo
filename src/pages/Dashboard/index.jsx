import ProjectList from 'components/ProjectList';
import { useCollection } from 'hooks/useCollection';
import { Error, PageTitle } from 'styles/GlobalStyle';

const Dashboard = () => {
  const { documents, error } = useCollection('projects');
  return (
    <div>
      <PageTitle>Dashboard</PageTitle>
      {error && <Error>{error}</Error>}
      {documents && <ProjectList projects={documents} />}
    </div>
  );
};

export default Dashboard;
