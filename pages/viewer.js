import Head from "next/head"
import FiberRender from "../components/FiberRender"
import Sidebar from "../components/Sidebar"
import getPaths from "../utils/getPaths"

export async function getServerSideProps() {
   const paths = await getPaths()

   return {
      props: {
         urls: paths,
      },
   }
}

export default function Home({ urls }) {
   return (
      <>
         <Head>
            <title>Posed - Viewer</title>
         </Head>

         <div>
            <div className={`min-h-screen max-h-screen flex bg-neutral-100 dark:bg-neutral-800 dark:text-white`}>
               <div className={`overflow-y-auto w-full `}>
                  <Sidebar />
               </div>
               <div className={`bg-neutral-50 dark:bg-neutral-700`}>

               <FiberRender />
               </div>
            </div>
         </div>
      </>
   )
}
