import Head from "next/head"
import FiberRender from "../components/FiberRender"
import Sidebar from "../components/Sidebar"

export default function Home() {

   return (
      <div>
         <Head>
            <title>Posed</title>
            <meta name='description' content='Snap photos of fully customizable 3d models!' />
            <link rel='icon' href='/favicon.ico' />
         </Head>

         <div className='min-h-screen max-h-screen flex bg-slate-100'>
            <div className='overflow-y-auto w-full'>
               <Sidebar />
            </div>
            <div className='bg-white'>
               <FiberRender />
            </div>
         </div>
      </div>
   )
}
