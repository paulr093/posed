import Link from "next/link"
import React from "react"

function Header() {
   return (
      <div className='flex w-full h-20 py-16 items-center justify-between'>
         <Link href='/' passHref>
            <h1 className='font-bold text-3xl font-gugi self-center select-none cursor-pointer'>POSED</h1>
         </Link>

         <div className='flex items-center text-sm space-x-3'>
            <Link href='/viewer/Low Poly Rocket' passHref>
               <p
                  className={`select-none cursor-pointer p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-md duration-150 font-medium`}
               >
                  3D Viewer
               </p>
            </Link>

            <Link href='/changelog' passHref>
               <p
                  className={`select-none cursor-pointer p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-md duration-150 font-medium`}
               >
                  Changelog
               </p>
            </Link>

            <button
               className={`p-5 bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-full font-medium duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-md`}
            >
               <p>Share</p>
            </button>
         </div>
      </div>
   )
}

export default Header
