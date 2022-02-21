import React from "react"
import Head from "next/head"
import Link from "next/link"
import Header from "../components/shared/Header"
import Footer from "../components/shared/Footer"

function Home() {
   return (
      <>
         <Head>
            <title>Posed - Home</title>
         </Head>

         <div
            className={`flex flex-col overflow-x-hidden items-center px-4 md:px-28 bg-neutral-50 min-h-screen min-w-screen dark:bg-neutral-900 dark:text-white`}
         >
            <Header />

            <div className='flex flex-col items-center pt-20 space-y-14'>
               <h1 className='md:w-1/2 text-center font-black text-4xl'>
                  Browse, customize, and screenshot from our library of 3D models
               </h1>
               <p className={`md:w-3/4 font-bold text-xl text-center opacity-50 leading-8`}>
                  Posed is a library of 3d models that are fully customizeable. When you have the model how you like it,
                  hit the screenshot button to export a .png and import it into your designs!
               </p>

               <Link href='/viewer/Low Poly Rocket' passHref>
                  <button className='p-5 rounded-full font-bold bg-gradient-to-r from-blue-500 to-emerald-500 text-white'>
                     Go to 3D viewer
                  </button>
               </Link>
            </div>

            <div className='flex items-center justify-center h-[600px] w-full rounded-xl bg-neutral-200 m-10'>
               <h1>Placeholder for showcase</h1>
            </div>

            <Footer />
         </div>
      </>
   )
}

export default Home
