import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import Newproject from './components/pages/NewProject';

import Container from './components/layout/Container';




function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contato</Link>
        <Link to="/Company">Empresa</Link>
        <Link to="/Newproject">Novo projeto</Link>
      </div>
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} > </Route>
        </Routes>
        <Routes>
          <Route path="/Company" element={<Company />} > </Route>
        </Routes>
        <Routes>
         <Route path="/Contact" element={<Contact />} > </Route>
        </Routes>
        <Routes>
          <Route path="/Newproject" element={<Newproject />} > </Route>
        </Routes>
        </Container>
      <p>Footer</p>
    </Router>
    


  
  );
}

export default App
