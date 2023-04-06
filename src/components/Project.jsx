import review from './images/reviewapp.jpeg'
import todo from './images/todoapp.jpeg'
import signup from './images/signup.jpeg'

function Project() {
  return (
    <section id='project'>
    <div className=' mt-10 lg:ml-16 bg-gradient-to-b  via-orange-200 from-orange-200 to-orange-300'>
         <div className='flex justify-center text-2xl'>
         <p>PROJECTS</p>
         </div>
      <div  className='flex gap-5 mb-5'>
         <div>
    <p className='text-center text-xl'>Review App</p>
    <img src={review} alt="review-app"  />
    <a href="https://ellagospel.github.io/review-app/" className='flex justify-center text-xl text-gray-800 bg-orange-300 rounded-md hover:bg-orange-600 cursor-pointer hover:text-white hover:w-[20%] hover:m-auto '>Link</a>
    </div>
      <div className='text-justfy text-lg lg:text-2xl lg:mt-28'>
       This is a review app which customers can use to give feedback on the quaility of services and busness transactions carried out or experienced.
       
       <p>It is built with React,tailwind and daisyUi</p>
      </div>
    </div>
     <div className='flex gap-5 mb-10 '>
     <div>
      <p className='text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl mt-10 ml-14 lg:ml-40 xl:ml-40 2xl:ml-40 md:ml-32'>Todo App</p>
      <img src={todo} alt="todo-app" className='w-[80%] lg:w-[60%] xl:w-[60%] 2xl:w-[60%] ml-14 lg:ml-32 xl:ml-32 2xl:ml-32'/>
      <a href="https://ellagospel.github.io/Todo_App/" className='flex justify-center text-xl text-orange-600  bg-pink-200 lg:text-2xl xl:text-2xl 2xl:text-2xl rounded-md hover:bg-orange-600 cursor-pointer hover:text-white hover:w-[20%] hover:m-auto lg:w-[60%] xl:w-[60%] 2xl:w-[60%]  lg:ml-32  xl:ml-32 2xl:ml-32 md:w-[80%] md:ml-12 md:text-2xl w-[80%] ml-14 '>Link</a>
          </div>
     </div>
        <div className='text-justfy text-lg lg:text-2xl xl:text-2xl 2xl:text-2xl md:text-2xl lg:mt-8 xl:mt-8 2xl:mt-8 text-gray-800 ml-16 md:ml-16'>
          This is a Todo app that helps to outline activites to be carried out in order of preference. it helps to articulate thought, keep track and recollect upcoming event.
          <p>It is built with HTML,CSS and JavaScript.</p>
        </div>
          
     <div className='lg:flex md:flex xl:flex 2xl:flex py-10'>
       <div className='lg:ml-7 xl:ml-7 2xl:ml-7 ml-2'>
      <p className=' text-xl mt-5 ml-14 md:ml-16 md:text-2xl'>Sign up page</p>
      <img src={signup} alt="sign-up" className='w-[80%] ml-10' />
      <a href="https://ellagospel.github.io/new_signup_page/" className='flex justify-center text-xl text-gray-800 bg-gray-400 rounded-md hover:bg-orange-600 cursor-pointer hover:text-white hover:w-[20%] hover:m-auto hover:ml-14 w-[80%] ml-10'>Link</a>
      </div>
      <div className='text-justify lg:mt-28  xl:mt-28 2xl:mt-28 md:mt-24 text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl text-gray-800 ml-16 '>
        This is a signup page built with HTML, CSS and JavaScript.
        <p> This Portfolio your viewing was built using react, tailwind and daisyUi.</p>
      </div>
     </div>
    </div>
    </section>
  )
}

export default Project



