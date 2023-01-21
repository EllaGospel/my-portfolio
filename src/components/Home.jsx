import { Link } from "react-router-dom"

function Home() {
  return ( 
    <>

      <div className="aside">
      <div className="person-div" >
      <img className="person" src="https://res.cloudinary.com/oziomadibia/image/upload/v1673692911/IMG-202220715-WA0001_yckice.jpg" alt="profile picture" />
      </div>
      <div className="intro">
      <h1 className="head">HI, I'M GOSPEL EMMANUELA CHARLES</h1>
      <p className="personality">A frontend Developer focused on building  frontend user interface that leads to  success overall product</p>
      <Link to='/Project' className="project-link">projects</Link>
      </div>
      </div>
    
    
    </>
  )
}

export default Home
