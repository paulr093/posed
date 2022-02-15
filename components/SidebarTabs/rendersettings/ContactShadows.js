import { Disclosure, Switch } from "@headlessui/react"
import { ChevronRightIcon } from "@heroicons/react/outline"
import React from "react"
import { renderSettings } from "../../../zustand/states"

function ContactShadows() {
   const settings = renderSettings((state) => state.contactShadow)
   const setSettings = renderSettings((state) => state.setContactShadow)

   return (
      <Disclosure defaultOpen={true}>
         {({ open }) => (
            <>
               <Disclosure.Button
                  className={`py-2 px-3 hover:bg-blue-500 rounded-lg hover:text-white w-full duration-150 font-bold text-left flex flex-row items-center justify-between p-1 ${
                     open ? "bg-blue-500 text-white hover:bg-blue-400 hover:text-slate-50" : ""
                  }`}
               >
                  ContactShadows
                  <ChevronRightIcon className={`w-5 h-5 duration-100 ${open ? "transform rotate-90" : ""}`} />
               </Disclosure.Button>
               <Disclosure.Panel className='space-y-3 w-full'>
                  <div className='flex flex-row justify-between items-center'>
                     <h1 className='text-opacity-75 text-sm'>Show Shadows</h1>
                     <Switch
                        checked={settings.show}
                        onChange={(e) => setSettings({ ...settings, show: e })}
                        className={`${
                           settings.show ? "bg-blue-500" : "bg-gray-200"
                        } relative inline-flex items-center h-6 rounded-full w-11`}
                     >
                        <span className='sr-only'>Enable contact shadows</span>
                        <span
                           className={`${
                              settings.show ? "translate-x-6" : "translate-x-1"
                           } inline-block w-4 h-4 transform bg-white rounded-full`}
                        />
                     </Switch>
                  </div>
                  <div className='flex flex-row justify-between items-center text-neutral-900 dark:text-white'>
                     <h1 className='text-opacity-75 text-sm'>Blur</h1>
                     <input
                        value={settings.shadowBlur}
                        step={0.5}
                        min={0}
                        max={10}
                        onChange={(e) =>
                           setSettings({
                              ...settings,
                              shadowBlur: e.target.value,
                           })
                        }
                        type='number'
                        className='w-20 rounded-md dark:bg-neutral-700 p-1 hover:ring-2 hover:ring-blue-500 duration-150'
                     />
                  </div>
                  <div className='flex flex-row justify-between items-center'>
                     <h1 className='text-opacity-75 text-sm'>Opacity</h1>
                     <input
                        value={settings.shadowOpacity}
                        onChange={(e) =>
                           setSettings({
                              ...settings,
                              shadowOpacity: e.target.value,
                           })
                        }
                        type='number'
                        step={0.1}
                        min={0}
                        max={1}
                        className='w-20 rounded-md dark:bg-neutral-700 p-1 hover:ring-2 hover:ring-blue-500 duration-150'
                     />
                  </div>
                  <div className='flex flex-row justify-between items-center'>
                     <h1 className='text-opacity-75 text-sm'>Resolution</h1>
                     <input
                        value={settings.shadowRes}
                        onChange={(e) =>
                           setSettings({
                              ...settings,
                              shadowRes: parseInt(e.target.value),
                           })
                        }
                        type='number'
                        step={settings.shadowRes * 2}
                        min={0}
                        max={4096}
                        className='w-20 rounded-md dark:bg-neutral-700 p-1 hover:ring-2 hover:ring-blue-500 duration-150'
                     />
                  </div>
                  <div className='flex flex-row justify-between items-center'>
                     <h1 className='text-opacity-75 text-sm'>Focal Length</h1>
                     <input
                        value={settings.focalLength}
                        onChange={(e) =>
                           setSettings({
                              ...settings,
                              focalLength: parseInt(e.target.value),
                           })
                        }
                        type='number'
                        className='w-20 rounded-md dark:bg-neutral-700 p-1 hover:ring-2 hover:ring-blue-500 duration-150'
                     />
                  </div>
               </Disclosure.Panel>
            </>
         )}
      </Disclosure>
   )
}

export default ContactShadows
