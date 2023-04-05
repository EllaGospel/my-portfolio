import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill} from 'react-icons/bs'


function SocialMedia() {
        const links = [
         {
           id: 1,
           child:(
                      <>
                      LinkedIn <FaLinkedin size={30}/>
                      </>
           ),
           href:'https://www.linkedin.com/in/gospel-emmanuela-696ba41a9/',
           style: 'rounded-tr-md'
       
         },
         {
           id: 2,
           child:(
                      <>
                      Github <FaGithub size={30}/>
                      </>
           ),
           href:'https://github.com/EllaGospel',
       
       
         },
         {
           id: 3,
           child:(
                      <>
                      Mail <HiOutlineMail size={30}/>
                      </>
           ),
           href:'mailto:ella4real5@gmail.com',
         
         },
         {
           id: 4,
           child:(
                      <>
                      Resume <BsFillPersonLinesFill size={30}/>
                      </>
           ),
           href:'/resume.pdf',
           style: 'rounded-br-md',
           download: true
       
         }
        ]
    
       
      return (
    
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed xl:flex 2xl:flex'>
          <ul className='rounded-md'>
          {links.map(({ id, child, href, style, download }) => (
              <li key= {id}  className={
                "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-r from-orange-600 to-orange-700" +
                " " +
                style
              }>
               <a 
               href={href} className='flex justify-between items-center w-full text-white'
               download={download} 
               target="_blank"
               rel="noreferrer">
              {child}
               </a>
               </li>
            ))}
           
          </ul>
        </div>
      )
            }

export default SocialMedia



// import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import { HiOutlineMail } from 'react-icons/hi';
// import { BsFillPersonLinesFill} from 'react-icons/bs'


// function SocialMedia() {
//     // const SocialMediaLinks = () =>{
//         const links = [
//          {
//            id: 1,
//            child:(
//                       <>
//                       LinkedIn <FaLinkedin size={30}/>
//                       </>
//            ),
//            href:'https://www.linkedin.com/in/gospel-emmanuela-696ba41a9/',
//            style: 'rounded-tr-md'
       
//          },
//          {
//            id: 2,
//            child:(
//                       <>
//                       Github <FaGithub size={30}/>
//                       </>
//            ),
//            href:'https://github.com/EllaGospel',
       
       
//          },
//          {
//            id: 3,
//            child:(
//                       <>
//                       Mail <HiOutlineMail size={30}/>
//                       </>
//            ),
//            href:'ella4real5@gmail.com',
         
//          },
//          {
//            id: 4,
//            child:(
//                       <>
//                       Resume <BsFillPersonLinesFill size={30}/>
//                       </>
//            ),
//            href:'/resume.pdf',
//            style: 'rounded-br-md',
//            download: true
       
//          }
//         ]
    
       
//       return (
    
//         <div className='hidden lg:flex flex-col top-[35%] left-0 fixed xl:flex 2xl:flex'>
//           <ul className='rounded-md'>
//           {links.map(({ id, child, href, style, download }) => (
//               <li key= {id}  className={
//                 "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-r from-purple to-pincolor-800" +
//                 " " +
//                 style
//               }>
//                <a 
//                href={href} className='flex justify-between items-center w-full text-white'
//                download={download} 
//                target="_blank"
//                rel="noreferrer">
//               {child}
//                </a>
//                </li>
//             ))}
           
//           </ul>
//         </div>
//       )
//             }

// export default SocialMedia

