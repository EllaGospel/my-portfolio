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
    <a href="https://ellagospel.github.io/review-app/" className='flex justify-center text-xl text-gray-800 bg-orange-300 rounded-md hover:bg-orange-600 cursor-pointer hover:text-white hover:w-[20%] hover:m-auto'>Link</a>
    </div>
      <div className='text-justfy text-lg lg:text-xl lg:mt-36'>
       This is a review app which customers can use to give feedback on the quaility of services and busness transactions carried out or experienced.
       
       <p>It is built with React,tailwind and daisyUi</p>
      </div>
    </div>
     <div className='flex gap-5 mb-10 '>
        <div className='text-justfy text-lg lg:text-xl lg:mt-28 text-gray-800 '>
          This is a Todo app that helps to outline activites to be carried out in order of preference. it helps to articulate thought, keep track and recollect upcoming event.
          <p>It is built with HTML,CSS and JavaScript.</p>
        </div>
          <div>
      <p className='text-xl lg:text-2xl mt-10'>Todo App</p>
      <img src={todo} alt="todo-app" className='w-[80%]'/>
      <a href="https://ellagospel.github.io/Todo_App/" className='flex justify-center text-xl text-orange-600 w-[80%] bg-pink-200 lg:text-2xl  rounded-md hover:bg-orange-600 cursor-pointer hover:text-white hover:w-[20%] hover:m-auto '>Link</a>
          </div>
     </div>
     <div className='flex py-10'>
       <div className='lg:ml-7 ml-2'>
      <p className=' text-xl mt-5'>Sign up page</p>
      <img src={signup} alt="sign-up" className='w-[60%]' />
      <a href="https://ellagospel.github.io/new_signup_page/" className='flex justify-center text-xl text-gray-800 bg-gray-400 rounded-md hover:bg-orange-600 cursor-pointer hover:text-white hover:w-[20%] hover:m-auto hover:ml-14 w-[60%]'>Link</a>
      </div>
      <div className='text-justfy lg:mt-28 mr-20 text-xl text-gray-800 '>
        This is a signup page built with HTML, CSS and JavaScript.
        <p>This Portfolio your viewing was built using react, tailwind and daisyUi.</p>
      </div>
     </div>
    </div>
    </section>
  )
}

export default Project



