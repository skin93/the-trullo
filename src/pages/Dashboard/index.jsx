import { useState } from 'react';

import { useCollection } from 'hooks/useCollection';
import { useAuthContext } from 'hooks/useAuthContext';
import { Error, PageTitle } from 'styles/GlobalStyle';

import ProjectFilter from 'components/Project/ProjectFilter';
import ProjectList from 'components/Project/ProjectList';

const Dashboard = () => {
  const { user } = useAuthContext();
  const [currentFilter, setCurrentFilter] = useState('all');
  const { documents, error } = useCollection('projects');

  const changeFilter = (filter) => {
    setCurrentFilter(filter);
  };

  const projects =
    documents &&
    documents.filter((document) => {
      switch (currentFilter) {
        case 'all':
          return true;
        case 'mine':
          let assignedToMe = false;
          document.assignedUsersList.forEach((u) => {
            if (user.uid === u.id) {
              assignedToMe = true;
            }
          });
          return assignedToMe;
        case 'development':
        case 'design':
        case 'sales':
        case 'marketing':
          console.log(document.category, currentFilter);
          return document.category === currentFilter;
        default:
          return true;
      }
    });

  return (
    <div>
      <PageTitle>Dashboard</PageTitle>
      {error && <Error>{error}</Error>}
      {documents && (
        <ProjectFilter
          currentFilter={currentFilter}
          changeFilter={changeFilter}
        />
      )}
      {projects && <ProjectList projects={projects} />}
    </div>
  );
};

export default Dashboard;
