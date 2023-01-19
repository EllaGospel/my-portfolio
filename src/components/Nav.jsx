import {Link} from 'react-router-dom'
function Nav() {
  return (
    <nav className="navmain">
        
        <ul className="navbar">
            <p className="name ">GC</p>
           <Link to='/' className="navlink">
                Home
                </Link>
            
             <Link to='/about' className="navlink">
                About
                </Link>
                <Link to='/project' className="navlink">
                Project
                </Link>
                <Link to='/contact' className="navlink">
                Contact
                </Link>


                
            {/* <a className="navlink">
                <li href="#project">Project</li>
            </a>
            <a className="navlink contact-link">
                <li href="#contact">Contact</li>
            </a> */}
            </ul>
    </nav>
  )
}

export default Nav




