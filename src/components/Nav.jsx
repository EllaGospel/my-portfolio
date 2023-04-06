
function Nav() {
  return (
    
    <nav className='h-16'>
      <ul>
      <div className='flex justify-around '>  
        <div>
        <div className=" hidden lg:flex md:flex xl:flex 2xl:flex  cursor-pointer capitalize font-normal hover:scale-105 duration-200"> 
        <p className="bg-orange-400 mt-2 w-10 h-10 py-2 px-2 rounded-full text-white  block sm:inline-block ">GC</p>  
        <span className=" mt-4 ml-2 font-bold block sm:inline-block">Gospel Emmanuela Dibia</span></div>
        </div>
        
        <div className='flex flex-wrap lg:flex-nowrap gap-3 lg:gap-5 mt-4 cursor-pointer'>
      <a href="#home">
        <li>
        Home
        </li>
        </a>
        <a href="#about">
        <li>
        About
        </li>
        </a>
        <a href="#skills">
        <li>
        Skills
        </li>
        </a>
        <a href="#project">
        <li>
        Project
        </li>
        </a>
        <a href="#contact">
        <li className="bg-orange-500 px-5 py-2 text-white rounded-lg">
        Contact
        </li>
        </a>
     </div>
     </div>
      </ul>
    </nav>
      
      
 
  )
}

export default Nav












