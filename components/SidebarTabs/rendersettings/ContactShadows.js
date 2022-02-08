import { Disclosure, Switch } from "@headlessui/react"
import { ChevronRightIcon } from "@heroicons/react/outline"
import React from "react"
import { useRecoilState } from "recoil"
import { renderSettings } from "../../../recoil/states"

function ContactShadows() {
   const [settings, setSettings] = useRecoilState(renderSettings)

   return (
      <Disclosure>
         {({ open }) => (
            <>
               <Disclosure.Button
                  className={`py-2 hover:bg-blue-500 rounded-lg hover:text-white w-full duration-150 font-bold text-left flex flex-row items-center justify-between p-1 ${
                     open ? "bg-blue-500 text-white" : ""
                  }`}
               >
                  ContactShadows
                  <ChevronRightIcon className={`w-5 h-5 duration-100 ${open ? "transform rotate-90" : ""}`} />
               </Disclosure.Button>
               <Disclosure.Panel className='space-y-3 w-full'>
                  <div className='flex flex-row justify-between items-center'>
                     <h1 className='text-opacity-75 text-black text-sm'>Show Shadows</h1>
                     <Switch
                        checked={settings.contactShadow.show}
                        onChange={(e) =>
                           setSettings({ ...settings, contactShadow: { ...settings.contactShadow, show: e } })
                        }
                        className={`${
                           settings.contactShadow.show ? "bg-blue-500" : "bg-gray-200"
                        } relative inline-flex items-center h-6 rounded-full w-11`}
                     >
                        <span className='sr-only'>Enable contact shadows</span>
                        <span
                           className={`${
                              settings.contactShadow.show ? "translate-x-6" : "translate-x-1"
                           } inline-block w-4 h-4 transform bg-white rounded-full`}
                        />
                     </Switch>
                  </div>
                  <div className='flex flex-row justify-between items-center'>
                     <h1 className='text-opacity-75 text-black text-sm'>Blur</h1>
                     <input
                        value={settings.contactShadow.shadowBlur}
                        onChange={(e) =>
                           setSettings({
                              ...settings,
                              contactShadow: { ...settings.contactShadow, shadowBlur: parseInt(e.target.value) },
                           })
                        }
                        type='number'
                        className='w-1/4 p-1 bg-white bg-opacity-75 rounded-md appearance-none outline-none focus:ring-2 focus:ring-blue-500 duration-150'
                     />
                  </div>
                  <div className='flex flex-row justify-between items-center'>
                     <h1 className='text-opacity-75 text-black text-sm'>Opacity</h1>
                     <input
                        value={settings.contactShadow.shadowOpacity}
                        onChange={(e) =>
                           setSettings({
                              ...settings,
                              contactShadow: { ...settings.contactShadow, shadowOpacity: parseInt(e.target.value) },
                           })
                        }
                        type='number'
                        step={0.1}
                        min={0}
                        max={1}
                        className='w-1/4 p-1 bg-white bg-opacity-75 rounded-md appearance-none outline-none focus:ring-2 focus:ring-blue-500 duration-150'
                     />
                  </div>
                  <div className='flex flex-row justify-between items-center'>
                     <h1 className='text-opacity-75 text-black text-sm'>Resolution</h1>
                     <input
                        value={settings.contactShadow.shadowRes}
                        onChange={(e) =>
                           setSettings({
                              ...settings,
                              contactShadow: { ...settings.contactShadow, shadowRes: parseInt(e.target.value) },
                           })
                        }
                        type='number'
                        step={settings.contactShadow.shadowRes * 2}
                        min={0}
                        max={4096}
                        className='w-1/4 p-1 bg-white bg-opacity-75 rounded-md appearance-none outline-none focus:ring-2 focus:ring-blue-500 duration-150'
                     />
                  </div>
                  <div className='flex flex-row justify-between items-center'>
                     <h1 className='text-opacity-75 text-black text-sm'>Focal Length</h1>
                     <input
                        value={settings.contactShadow.focalLength}
                        onChange={(e) =>
                           setSettings({
                              ...settings,
                              contactShadow: { ...settings.contactShadow, focalLength: parseInt(e.target.value) },
                           })
                        }
                        type='number'
                        className='w-1/4 p-1 bg-white bg-opacity-75 rounded-md appearance-none outline-none focus:ring-2 focus:ring-blue-500 duration-150'
                     />
                  </div>
               </Disclosure.Panel>
            </>
         )}
      </Disclosure>
   )
}

export default ContactShadows
