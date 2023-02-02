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
    <div className='flex justify-between w-full h-screen flex-col'>  
      <Nav/>
      <main>
      
        <Routes>
        
        <Route path='/my-portfolio' element={<Home/>}/> 
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/project' element={<Project/>}/>
        </Routes>
     </main>
     <Footer/>
    </div>
     </Router>
    
    
  );
}

export default App;
