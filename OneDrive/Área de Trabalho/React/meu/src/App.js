import {BrowserRouter as Router, Switch, Route, Link, Routes} from 'react-router-dom'
import Home from './pages/Home';
function App() {
  
  return (
    <Routes>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/empresa">Empresa</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
      <Switch>
    <Routes>
      <Route path="/"element={<Home />}/>
    </Routes>
      </Switch>
    </Routes>  
    
    
  )  
}


export default App;
