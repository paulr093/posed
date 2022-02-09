import { Disclosure } from "@headlessui/react"
import { ChevronRightIcon } from "@heroicons/react/outline"
import React from "react"
import { useRecoilState } from "recoil"
import { renderSettings } from "../../../recoil/states"
import Select from "react-select"

function Scene() {
   const [{ scene }, setScene] = useRecoilState(renderSettings)
   const upperCaseFirst = scene.environment.charAt(0).toUpperCase() + scene.environment.slice(1)
   const SELECTOPTIONS = [
      { value: "apartment", label: "Apartment" },
      { value: "city", label: "City" },
      { value: "dawn", label: "Dawn" },
      { value: "forest", label: "Forest" },
      { value: "lobby", label: "Lobby" },
      { value: "night", label: "Night" },
      { value: "park", label: "Park" },
      { value: "studio", label: "Studio" },
      { value: "sunset", label: "Sunset" },
      { value: "night", label: "Night" },
      { value: "warehouse", label: "Warehouse" },
   ]

   return (
      <Disclosure>
         {({ open }) => (
            <>
               <Disclosure.Button
                  className={`py-2 hover:bg-blue-500 rounded-lg hover:text-white duration-150 font-bold text-left flex w-full flex-row items-center justify-between p-1 ${
                     open ? "bg-blue-500 text-white" : ""
                  }`}
               >
                  Scene
                  <ChevronRightIcon className={`w-5 h-5 duration-150 ${open ? "transform rotate-90" : ""}`} />
               </Disclosure.Button>

               <Disclosure.Panel className='flex flex-col space-y-2 w-full p-2'>
                  <div className='flex flex-row w-full justify-between items-center'>
                     <h2 className='text-opacity-75 text-black text-sm'>Lighting Intensity</h2>
                     <input
                        type='number'
                        step={0.1}
                        min={0}
                        value={scene.intensity}
                        onChange={(event) =>
                           setScene((prev) => ({ ...prev, scene: { ...prev.scene, intensity: event.target.value } }))
                        }
                        className='w-12 rounded-md hover:ring-2 hover:ring-blue-500 duration-150'
                     />
                  </div>
                  <div className='flex flex-row justify-between items-center'>
                     <h2 className='text-opacity-75 text-black text-sm'>Environment</h2>
                     <Select
                        options={SELECTOPTIONS}
                        value={{
                           value: scene.environment,
                           label: upperCaseFirst,
                        }}
                        onChange={(event) =>
                           setScene((prev) => ({ ...prev, scene: { ...prev.scene, environment: event.value } }))
                        }
                        className="w-32"
                     />
                  </div>
               </Disclosure.Panel>
            </>
         )}
      </Disclosure>
   )
}

export default Scene
