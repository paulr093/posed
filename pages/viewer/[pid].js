import Head from "next/head"
import { useRouter } from "next/router"
import FiberRender from "../../components/FiberRender"
import Sidebar from "../../components/Sidebar"


export default function Home() {
    const router = useRouter()

   return (
      <>
         <Head>
            <title>Posed - Viewer</title>
         </Head>

         <div className={`max-h-screen flex bg-neutral-100 dark:bg-neutral-800 dark:text-white`}>
            <Sidebar />
            <FiberRender />
         </div>
      </>
   )
}