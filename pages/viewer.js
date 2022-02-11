import FiberRender from "../components/FiberRender"
import Sidebar from "../components/Sidebar"
import { mainColor } from "../tailwind/colors"

export default function Home() {
   return (
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
   )
}
