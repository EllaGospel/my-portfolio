import photo from './images/photo1.jpg'
import {Link} from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'




function Home() {
  return ( 
    <>
      <div name="home" className='bg-gradient-to-b  via-white from-orange-300 to-orange-300 h-full w-full pt-16 pb-16 lg:pt-20' >
            
            <div className='max-w-sreen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row lg:flex-row xl:flex-row 2xl:flex-row'>
            <div>
                <img src={photo} alt="profile" className="rounded-2xl  mx-auto w-[300px] " />
            </div>
                <div className='flex flex-col mt-4 h-full ml-2 mb-[10px} xl:justify-center'>
                    <h2 className='text-5xl sm:text-5xl font-bold ml-10 lg:ml-3'>I'm a frontend<br/> Developer</h2>
                    <p className='text-gray py-4 max-w-md ml-10 lg:ml-3'>A frontend Developer focused on building  frontend user interface that leads to the success of overall product</p>
                    <div>
                       <a href='#project' className=' w-fix w-[40%] p-6 my-2 flex items-center rounded-md bg-gradient-to-r from-purple to-pincolor-800 cursor-pointer active:scale-[.98] active:duration-50 transition-all hover:scale-[1.01]  ease-in-out  transform py-4 '>Projects  <span className='ml-2 font-medium'><FaArrowRight /></span></a>
                    
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Home


