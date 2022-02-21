import { Disclosure } from "@headlessui/react"
import { ChevronRightIcon } from "@heroicons/react/outline"
import React, { useEffect } from "react"
import { useFilePicker } from "use-file-picker"
import { modelImage } from "../../../zustand/states"

function ImageSettings() {
   const image = modelImage((state) => state.image)
   const setImage = modelImage((state) => state.setImage)
   const template = modelImage((state) => state.template)

   const [openFileSelector, { filesContent, loading }] = useFilePicker({
      accept: ".png",
      readAs: "DataURL",
      multiple: false,
   })
   useEffect(() => {
      if (filesContent[0]?.content) {
         setImage(filesContent[0]?.content)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [filesContent])

   return (
      <Disclosure>
         {({ open }) => (
            <>
               <Disclosure.Button
                  className={`py-2 px-3 hover:bg-blue-500 rounded-lg hover:text-white duration-150 font-bold text-left flex flex-row items-center justify-between p-1 ${
                     open ? "bg-blue-500 text-white hover:bg-blue-400 hover:text-neutral-50" : ""
                  }`}
               >
                  Image
                  <ChevronRightIcon className={`w-5 h-5 duration-150 ${open ? "transform rotate-90" : ""}`} />
               </Disclosure.Button>
               <Disclosure.Panel className={`space-y-2 flex flex-col items-center justify-center`}>
                  <a
                     href={template}
                     download
                     className='min-h-8 p-2 rounded-md  bg-neutral-200 font-medium hover:bg-blue-500 hover:text-white duration-150'
                  >
                     Download Template
                  </a>
                  <div className='flex flex-row justify-between space-x-2 items-center'>
                     <div className='text-sm flex bg-white rounded-lg p-2 h-8 items-center justify-center dark:bg-neutral-700'>
                        <h2>{image.slice(1, 25)}</h2>
                     </div>
                     <button
                        onClick={() => openFileSelector()}
                        className='ring-2 rounded-md ring-blue-500 text-sm p-1 hover:bg-blue-500 hover:text-white duration-150'
                     >
                        Choose Image
                     </button>
                  </div>
               </Disclosure.Panel>
            </>
         )}
      </Disclosure>
   )
}

export default ImageSettings
