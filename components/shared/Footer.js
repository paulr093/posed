import Link from "next/link"
import React from "react"

function Footer() {
   return (
      <footer>
         <div className='md:px-20 px-3 py-10 flex justify-between w-screen dark:text-white'>
            <div className='flex flex-col space-y-3'>
               <h3 className='text-left font-gugi text-xl '>Posed</h3>
               <p className='w-28 text-xs opacity-50'>
                  Fully customizable, production-ready models to snapshot and use within seconds.
               </p>
            </div>

            <div className='flex justify-between sm:px-12 w-3/4'>
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
                     <a href='https://www.twitter.com/paul_richan'>Twitter</a>
                  </h5>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer
