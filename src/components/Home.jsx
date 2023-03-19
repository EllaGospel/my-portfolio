// import { Link } from "react-router-dom"
import photo from './images/photo1.jpg'


function Home() {
  return ( 
    <>

      <div className="aside">
      <div className="person-div" >
      <img className="person" src={photo} alt="profile display" />
      </div>
      <div className="intro">
      <h1 className="head">HI, I'M GOSPEL EMMANUELA CHARLES</h1>
      <p className="personality">A frontend Developer focused on building  frontend user interface that leads to the success of overall product</p>
      {/* <Link to='/Project' className="project-link">projects</Link> */}
      </div>
      </div>
     
    
    </>
  )
}

export default Home
