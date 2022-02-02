import React from "react"
import { saveAs } from "file-saver"
import { useRecoilState } from "recoil"
import IconButton from "./shared/IconButton"
import Camera from "./icons/Camera"
import Cog from "./icons/Cog"
import User from "./icons/User"

function Screenshot() {
   let canvas = document.getElementsByTagName("canvas")[0].toDataURL("image/png")

   saveAs(canvas, "screenshot.png")
}

function Sidebar() {
   return (
      <div className='flex flex-grow flex-col items-center p-[3rem]'>
         <h1>Posed</h1>
         <div className='flex flex-row justify-between w-full'>
            <IconButton text={<Camera />} />
            <IconButton text={<User />} />
            <IconButton text={<Cog />} />
         </div>
         <button onClick={() => Screenshot()} className='bg-slate-300 p-2 rounded-md hover:bg-white'>
            Screenshot
         </button>
      </div>
   )
}

export default Sidebar
