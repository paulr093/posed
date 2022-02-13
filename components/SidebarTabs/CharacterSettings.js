import React, { useState } from "react"
import Select from "react-select"
import { Disclosure, Popover } from "@headlessui/react"
import { ChevronRightIcon } from "@heroicons/react/outline"
import { HexColorInput, HexColorPicker } from "react-colorful"
import { activeModel } from "../../zustand/states"

const SELECTOPTIONS = [
   { label: "Low Poly Rocket", path: "/glbs/LowPolyRocket.glb" },
   { label: "Low Poly Rocket No Smoke", path: "/glbs/LowPolyRocket_NoSmoke.glb" },
   { label: "Phone", path: "/glbs/Phone.glb" },
   { label: "Crypto Coin", path: "/glbs/CryptoCoin.glb" },
   { label: "Soda Can", path: "/glbs/SodaCan.glb" },
]

function CharacterSettings() {
   // ZUSTAND
   const colors = activeModel((state) => state.colors)
   const setColors = activeModel((state) => state.setColors)
   const activeModelLabel = activeModel((state) => state.label)
   const setLabel = activeModel((state) => state.setLabel)

   return (
      <div className='flex flex-col flex-grow space-y-3 w-full py-2 dark:text-white'>
         <h1 className='font-bold'>Active Model</h1>
         <Select
            options={SELECTOPTIONS}
            placeholder={activeModelLabel}
            value={{ value: activeModelLabel, label: activeModelLabel }}
            onChange={(option) => setLabel(option.label)}
         />
         <Disclosure defaultOpen={true}>
            {({ open }) => (
               <>
                  <Disclosure.Button
                     className={`py-2 px-3 hover:bg-blue-500 rounded-lg hover:text-white duration-150 font-bold text-left flex flex-row items-center justify-between p-1 ${
                        open ? "bg-blue-500 text-white hover:bg-blue-400 hover:text-slate-50" : ""
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

                              <Popover.Panel className='absolute z-10 right-0'>
                                 <HexColorPicker
                                    color={color[1]}
                                    onChange={(event) => setColors({ ...colors, [color[0]]: event })}
                                 />
                                 <HexColorInput color={color[1]} onChange={(event) => console.log(event)} />
                              </Popover.Panel>
                           </Popover>
                        </div>
                     ))}
                  </Disclosure.Panel>
               </>
            )}
         </Disclosure>
      </div>
   )
}

export default CharacterSettings
