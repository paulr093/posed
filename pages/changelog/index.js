import Link from "next/link"
import React from "react"
import Header from "../../components/shared/Header"

function Home() {
   return (
      <div
         className={`flex flex-col px-4 md:px-28 bg-neutral-50 min-h-screen min-w-screen dark:bg-neutral-900 dark:text-white`}
      >
         <Header />
         <div className='flex-grow text-left space-y-5'>
            <h1 className='text-center font-extrabold text-xl'>Changelog</h1>

            <div className='flex flex-col space-y-2'>
               <div>
                  <h2 className='font-semibold text-xl'>v0.0.4</h2>
                  <h3 className='text-sm opacity-50'>February 16th, 2022</h3>
                  <p className='px-5'>
                     You can now change the roughness and metalness on every color, adding another layer of
                     customization. If you want to create an account with us you are now able to! There is not much you
                     can do with your account right now but we have big plans for the future.
                  </p>
               </div>

               <div>
                  <h2 className='font-semibold text-xl'>v0.0.3</h2>
                  <h3 className='text-sm opacity-50'>February 15th, 2022</h3>
                  <p className='px-5'>
                     Introducing the changelog! We handled some mobile and dark mode styles. Added a brand new, full
                     transformable
                     <Link href='/viewer/Low Poly Spaceman' passHref>
                        <span className='text-blue-500 hover:text-blue-700 cursor-pointer'> Low Poly Spaceman</span>
                     </Link>
                     ! We have also introduced Dynamic Routing so that you can share with your friends the link to a
                     specific model.
                  </p>
               </div>

               <div>
                  <h2 className='font-semibold text-xl'>v0.0.2</h2>
                  <h3 className='text-sm opacity-50'>February 13th, 2022</h3>
                  <p className='px-5'>
                     We switched to a more Three.js compatible global state manager. Models were previously being loaded
                     all at once and now will be loaded on request. Introduction of the homepage and changelog. Changed
                     some styles up 😎.
                  </p>
               </div>

               <div>
                  <h2 className='font-semibold text-xl'>v0.0.1</h2>
                  <h3 className='text-sm opacity-50'>February 12th, 2022</h3>
                  <p className='px-5'>Welcome to Posed! The site is live with 5 fully customizable models.</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Home
