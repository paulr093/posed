import { Disclosure, Switch } from "@headlessui/react"
import { useRecoilState } from "recoil"
import { renderSettings } from "../../recoil/states"
import ContactShadows from "./rendersettings/ContactShadows"

export default function RenderSettings() {
   return (
      <>
         <div className='flex flex-grow flex-col w-full max-h-screen space-y-2 items-start'>
            <ContactShadows />
         </div>
      </>
   )
}
