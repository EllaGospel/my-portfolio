import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
  
    <Router>
      <div >
    <Nav/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/skill' element={<Skills/>}/>
       <Route path='/project' element={<Project/>}/>

       
    </Routes>
    <Footer/>
    
    
    </div>
    </Router>
    
    
  );
}

export default App;
