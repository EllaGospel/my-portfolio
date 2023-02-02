import {Link} from 'react-router-dom'

function Nav() {
  return (
    <nav className="navmain">
        
        <ul className="navbar">
            
           <Link to='/my-portfolio' className="navlink">
                Home
                </Link>
            
             <Link to='/about' className="navlink">
                About
                </Link>
                <Link to='/project' className="navlink project-on-navlink">
                Project
                </Link>
                <Link to='/contact' className="navlink">
                Contact
                </Link>
                <Link to='/skills' className="navlink">
                Skills
                </Link>


            </ul>
    </nav>
  )
}

export default Nav




