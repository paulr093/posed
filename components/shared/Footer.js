import Link from "next/link"
import React from "react"

function Footer() {
   return (
      <footer>
         <div className='md:px-20 px-3 py-10 grid grid-cols-1 md:flex justify-between w-screen dark:text-white'>
            <div className='flex flex-col w-screen md:w-1/4 items-center space-y-3'>
               <h4 className='text-left font-gugi text-xl mb-8 md:mb-0'>Posed</h4>
               <p className='w-28 text-xs opacity-50 hidden md:block'>
                  Fully customizable, production-ready models to snapshot and use within seconds.
               </p>
            </div>

            <div className='flex w-screen items-start justify-between px-10 mb-3 md:w-3/4'>
               <div className='flex flex-col space-y-3'>
                  <h4 className='font-medium'>Explore</h4>
                  <Link href='/viewer/Low Poly Rocket' passHref>
                     <h5 className='text-sm opacity-50 hover:text-blue-500 cursor-pointer'>3D Viewer</h5>
                  </Link>
                  <Link href='/changelog' passHref>
                     <h5 className='text-sm opacity-50 hover:text-blue-500 cursor-pointer'>Changelog</h5>
                  </Link>
               </div>

               <div className='flex flex-col space-y-3'>
                  <h4 className='font-medium'>Suggest</h4>
                  <h5 className='text-sm opacity-50 hover:text-blue-500 cursor-pointer'>Suggest a Model</h5>
               </div>

               <div className='flex flex-col space-y-3'>
                  <h4 className='font-medium'>Follow</h4>
                  <h5 className='text-sm opacity-50 hover:text-blue-500 cursor-pointer'>
                     <a href='https://www.instagram.com/posed.dev'>Instagram</a>
                  </h5>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer
