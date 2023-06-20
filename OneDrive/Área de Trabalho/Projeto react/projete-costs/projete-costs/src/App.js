import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import Newproject from './components/pages/NewProject';
import Navbar from './components/layout/Navbar';
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import Projects from './components/pages/Projects';



function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} > </Route>
        </Routes>
        <Routes>
          <Route path="/Projects" element={<Projects />} > </Route>
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
      <Footer/>
    </Router>
    


  
  );
}

export default App
