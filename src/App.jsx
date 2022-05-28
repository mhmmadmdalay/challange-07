import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom' ;
import Home from './pages/Home';
import Search from './pages/Search/Index';
// import {Navbar, Container, Nav, NavDropdown, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/Search' element = {<Search />} /> 
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;