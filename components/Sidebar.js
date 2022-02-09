import React, { useState } from "react"
import IconButton from "./shared/IconButton"
import RenderSettings from "./SidebarTabs/RenderSettings"
import CharacterSettings from "./SidebarTabs/CharacterSettings"
import { PhotographIcon, CameraIcon, CogIcon } from "@heroicons/react/outline"
import {saveAs} from "file-saver"
import { characterState } from "../recoil/states"
import { useRecoilValue } from "recoil"

function Sidebar() {
   const [tab, setTab] = useState({
      render: true,
      character: false,
      settings: false,
   })
   const {label: label} = useRecoilValue(characterState)

   function Screenshot() {
      const canvas = document.getElementsByTagName("canvas")[0].toDataURL("image/png")
      const downloadTitle = label.replace(/\s/g, '') + ".png"

      saveAs(canvas, downloadTitle)
   }

   return (
      <div className='flex flex-grow flex-col h-full space-y-4 items-center p-3 font-montserrat font-medium'>
         <h1 className='font-bold text-3xl font-gugi'>Posed</h1>
         <div className='flex flex-row justify-evenly w-full'>
            <IconButton
               active={tab.render}
               text={<CameraIcon className='h-8 w-8' />}
               onClick={() => setTab({ render: true, character: false, settings: false })}
            />
            <IconButton
               active={tab.character}
               text={<PhotographIcon className='h-8 w-8' />}
               onClick={() => setTab({ render: false, character: true, settings: false })}
            />
            {/* <IconButton
               active={tab.settings}
               text={<CogIcon className='h-8 w-8'/>}
               onClick={() => setTab({ render: false, character: false, settings: true })}
            /> */}
         </div>

         {tab.render && <RenderSettings />}
         {tab.character && <CharacterSettings />}

         <button
            onClick={() => Screenshot()}
            className='bg-slate-200 p-2 rounded-md hover:bg-blue-500 hover:text-white duration-150'
         >
            Screenshot
         </button>
      </div>
   )
}

export default Sidebar
