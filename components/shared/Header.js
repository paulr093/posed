import Link from "next/link"
import React from "react"
import { UserIcon } from "@heroicons/react/outline"
import { Popover, Transition } from "@headlessui/react"
import Auth from "./Auth"

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

            <Popover>
               <Popover.Button
                  className={`p-5 bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-full flex items-center justify-center font-medium duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-md`}
               >
                  <UserIcon className='h-6 w-6' />
               </Popover.Button>

               <Transition
                  enter='transition duration-100 ease-out'
                  enterFrom='transition opacity-0'
                  enterTo='transition opacity-100'
                  leave='transition duration-75 ease-out'
                  leaveFrom='transition opacity-100'
                  leaveTo='transition opacity-0'
               >
                  <Popover.Panel className='absolute z-10 right-28 mt-3 '>
                     <div className='bg-neutral-200 dark:bg-neutral-800 min-w-40 min-h-40 px-5 py-3 flex flex-col items-center space-y-2 rounded-md backdrop-blur-md'>
                        <Auth />
                     </div>
                  </Popover.Panel>
               </Transition>
            </Popover>
         </div>
      </div>
   )
}

export default Header
