import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { useAuthContext } from 'hooks/useAuthContext';

import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import Create from 'pages/Create';
import Dashboard from 'pages/Dashboard';
import Login from 'pages/Login';
import Project from 'pages/Project';
import Signup from 'pages/Signup';

import styled from 'styled-components';

const Main = styled.main`
  display: flex;
`;

const Container = styled.div`
  flex-grow: 1;
  padding: 0 60px;
`;

const App = () => {
  const { user, authIsReady } = useAuthContext();
  return (
    <Main>
      {authIsReady && (
        <Router>
          {user && <Sidebar />}
          <Container>
            <Navbar />
            <Routes>
              <Route
                path='/'
                element={user ? <Dashboard /> : <Navigate to='/login' />}
              />
              <Route
                path='/create'
                element={user ? <Create /> : <Navigate to='/login' />}
              />
              <Route
                path='/project/:id'
                element={user ? <Project /> : <Navigate to='/login' />}
              />
              <Route
                path='/login'
                element={user ? <Navigate to='/' /> : <Login />}
              />
              <Route
                path='/signup'
                element={user ? <Navigate to='/' /> : <Signup />}
              />
            </Routes>
          </Container>
        </Router>
      )}
    </Main>
  );
};

export default App;
