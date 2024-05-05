
import './App.css';
import Projects from './Pages/Projects';
import CVpage from './Pages/CVpage';
import ProjectSite from './Pages/ProjectSite';

import NavbarHeader from './Components/NavBarHeader';
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header>
        <NavbarHeader />
      </header>
      <div style={{ marginTop: '100px' }}>
        <Routes>
          <Route path="/" element={<CVpage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projectsite" element={<ProjectSite />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
