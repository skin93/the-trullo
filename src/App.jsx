import Create from 'pages/Create';
import Dashboard from 'pages/Dashboard';
import Login from 'pages/Login';
import Project from 'pages/Project';
import Signup from 'pages/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
`;

const Container = styled.div`
  flex-grow: 1;
  padding: 0 60px;
`;

const App = () => {
  return (
    <Main>
      <Router>
        <Container>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/create' element={<Create />} />
            <Route path='/project/:id' element={<Project />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </Container>
      </Router>
    </Main>
  );
};

export default App;
