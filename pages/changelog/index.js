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
                  <h2 className='font-semibold text-xl'>v0.0.2</h2>
                  <h3 className='text-sm opacity-50'>February 13th, 2022</h3>
                  <p className='px-5'>
                     We switched to a more Three.js compatible global state manager. Models were previously being loaded
                     all at once and now will be loaded on request. Introduction of the homepage and changelog. Changed some styles up 😎.
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
