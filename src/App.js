
import './App.css';
import Projects from './Pages/Projects';
import CVpage from './Pages/CVpage';
import NavbarHeader from './Components/NavBarHeader';
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header>
        <NavbarHeader />
      </header>
      <Routes>
        <Route path="/" element={<CVpage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
