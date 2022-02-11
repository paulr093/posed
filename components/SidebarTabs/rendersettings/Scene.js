import { Disclosure } from "@headlessui/react"
import { ChevronRightIcon } from "@heroicons/react/outline"
import React from "react"
import { useRecoilState } from "recoil"
import { renderSettings } from "../../../recoil/states"
import Select from "react-select"

function Scene() {
   const [{ scene }, setScene] = useRecoilState(renderSettings)
   const upperCaseFirst = scene.environment.charAt(1).toUpperCase() + scene.environment.slice(2)
   const SELECTOPTIONS = [
      { value: "/studio.hdr", label: "Studio" },
   ]

   return (
      <Disclosure defaultOpen={true}>
         {({ open }) => (
            <>
               <Disclosure.Button
                  className={`py-2 px-3 hover:bg-blue-500 rounded-lg hover:text-white duration-150 font-bold text-left flex w-full flex-row items-center justify-between p-1 ${
                     open ? "bg-blue-500 text-white hover:bg-blue-400 hover:text-slate-50" : ""
                  }`}
               >
                  Scene
                  <ChevronRightIcon className={`w-5 h-5 duration-150 ${open ? "transform rotate-90" : ""}`} />
               </Disclosure.Button>

               <Disclosure.Panel className='flex flex-col space-y-3 w-full'>
                  <div className='flex flex-row w-full justify-between items-center'>
                     <h2 className='text-opacity-75 text-sm'>Lighting Intensity</h2>
                     <input
                        type='number'
                        step={0.1}
                        min={0}
                        value={scene.intensity}
                        onChange={(event) =>
                           setScene((prev) => ({ ...prev, scene: { ...prev.scene, intensity: event.target.value } }))
                        }
                        className='w-20 rounded-md dark:bg-neutral-700 p-1 hover:ring-2 hover:ring-blue-500 duration-150'
                     />
                  </div>
                  <div className='flex flex-row justify-between items-center'>
                     <h2 className='text-opacity-75 text-sm'>Environment</h2>
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
