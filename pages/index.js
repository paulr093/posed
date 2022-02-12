import React from "react"
import Head from "next/head"
import Link from "next/link"

function Home() {
   return (
      <>
         <Head>
            <title>Posed - Home</title>
         </Head>

         <div
            className={`flex flex-col items-center px-28 bg-neutral-50 min-h-screen min-w-screen dark:bg-neutral-900 dark:text-white`}
         >
            {/* <Wave className='sticky top-0 backdrop-blur-sm' /> */}

            <div className='flex w-full h-20 py-16 items-center justify-between'>
               <h1 className='font-bold text-3xl font-gugi self-center'>POSED</h1>

               <div className='flex items-center text-sm space-x-3'>
                  <Link href='/viewer' passHref>
                     <p
                        className={`select-none cursor-pointer p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-md duration-150 font-medium`}
                     >
                        3D Viewer
                     </p>
                  </Link>

                  <Link href='/viewer' passHref>
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

            <div className='flex flex-col items-center pt-20 space-y-14'>
               <h1 className='w-1/2 text-center font-black text-4xl'>
                  Browse, customize, and screenshot from our library of 3D models
               </h1>
               <p className={`w-3/4 font-bold text-xl text-center opacity-50 leading-8`}>
                  Posed is a library of 3d models that are fully customizeable. When you have the model how you like it,
                  hit the screenshot button to export a .png and import it into your designs!
               </p>

               <Link href='/viewer' passHref>
                  <button className='p-5 rounded-full font-bold bg-gradient-to-r from-blue-500 to-emerald-500 text-white'>
                     Go to 3D viewer
                  </button>
               </Link>
            </div>

            <div className='flex items-center justify-center h-[600px] w-full rounded-xl bg-neutral-200 m-10'>
               <h1>Placeholder for showcase</h1>
            </div>
         </div>
      </>
   )
}

export default Home
