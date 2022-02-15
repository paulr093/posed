import { Disclosure, Popover } from "@headlessui/react"
import { ChevronRightIcon } from "@heroicons/react/outline"
import React from "react"
import { HexColorInput, HexColorPicker } from "react-colorful"
import { activeModel } from "../../../zustand/states"

function Colors() {
   const colors = activeModel((state) => state.colors)
   const setColors = activeModel((state) => state.setColors)

   return (
      <Disclosure defaultOpen={true}>
         {({ open }) => (
            <>
               <Disclosure.Button
                  className={`py-2 px-3 hover:bg-blue-500 rounded-lg hover:text-white duration-150 font-bold text-left flex flex-row items-center justify-between p-1 ${
                     open ? "bg-blue-500 text-white hover:bg-blue-400 hover:text-neutral-50" : ""
                  }`}
               >
                  Colors
                  <ChevronRightIcon className={`w-5 h-5 duration-150 ${open ? "transform rotate-90" : ""}`} />
               </Disclosure.Button>
               <Disclosure.Panel className={`space-y-2`}>
                  <h2 className='text-neutral-500 text-sm text-center'>Click on the color below to change it</h2>
                  {Object.entries(colors).map((color, id) => (
                     <div key={id} className='flex justify-between items-center'>
                        {color[0] && <h3 className='text-opacity-75 text-sm'>{color[0]}</h3>}
                        <Popover className='relative'>
                           {color[0] && (
                              <Popover.Button
                                 className={`h-6 w-16 rounded-lg shadow-md hover:ring-2 hover:ring-blue-500 duration-150`}
                                 style={{
                                    backgroundColor: color[1],
                                 }}
                              ></Popover.Button>
                           )}

                           <Popover.Panel className='absolute z-10 right-0 flex flex-col space-y-2 items-center'>
                              <HexColorPicker
                                 color={color[1]}
                                 onChange={(event) => setColors({ ...colors, [color[0]]: event })}
                              />
                              <HexColorInput
                                 color={color[1]}
                                 className='ring-2 rounded-md p-1 ring-neutral-500 hover:ring-blue-600 focus:ring-blue-600 duration-150 dark:bg-neutral-700 outline-none'
                                 onChange={(event) => setColors({ ...colors, [color[0]]: event })}
                              />
                           </Popover.Panel>
                        </Popover>
                     </div>
                  ))}
               </Disclosure.Panel>
            </>
         )}
      </Disclosure>
   )
}

export default Colors
