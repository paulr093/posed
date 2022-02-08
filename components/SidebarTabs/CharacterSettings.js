import { useGLTF } from "@react-three/drei"
import React, { useState } from "react"
import { Range } from "react-range"
import { useRecoilState } from "recoil"
import LowPolyRocket from "../../assets/LowPolyRocket"
import LowPolyRocketNoSmoke from "../../assets/LowPolyRocketNoSmoke"
import { characterState } from "../../recoil/states"
import RangeSlider from "../shared/RangeSlider"
import Select from "react-select"
import Jim from "../../assets/Jim"
import { Disclosure, Popover, Transition } from "@headlessui/react"
import { ChevronRightIcon } from "@heroicons/react/outline"
import { ChromePicker } from "react-color"
import { Color } from "three"

const SELECTOPTIONS = [
   { value: <LowPolyRocket />, label: "Low Poly Rocket", path: "/LowPolyRocket.glb" },
   { value: <LowPolyRocketNoSmoke />, label: "Low Poly Rocket No Smoke", path: "/LowPolyRocket_NoSmoke.glb" },
   // { value: <Jim />, label: "Jim", path: "/Jim.glb" },
]

function CharacterSettings() {
   const [rangeVal, setRangeVal] = useState(0)
   const [activeModel, setActiveModel] = useRecoilState(characterState)
   const { nodes, materials } = useGLTF(activeModel.path)
   const [colorPicker, setColorPicker] = useState(materials)

   function DecimalToRGB(r, g, b) {
      r = r * 256
      g = g * 256
      b = b * 256
      var rgb = "rgb(" + r + "," + g + "," + b + ")"
      // rgb = rgb.split("(")[1].split(")")[0]
      // rgb = rgb.split(",")

      // var b = rgb.map(function (x) {
      //    //For each array element
      //    x = parseInt(x).toString(16) //Convert to a base16 string
      //    return x.length == 1 ? "0" + x : x //Add zero if we get only one character
      // })
      // b = "#" + b.join("")

      return rgb
   }

   function RGBtoDecimal(r, g, b) {
      r = r / 256
      g = g / 256
      b = b / 256
      var rgbDecimal = { r: r, g: g, b: b }

      return rgbDecimal
   }

   return (
      <div className='flex flex-col flex-grow space-y-3 w-full py-2'>
         <h1 className='font-bold'>Active Model</h1>
         <Select
            options={SELECTOPTIONS}
            placeholder={activeModel.label ?? "Select"}
            value={{value: activeModel.model, label: activeModel.label}}
            onChange={(option) => setActiveModel({ model: option.value, path: option.path, label: option.label })}
         />
         <Disclosure>
            {({ open }) => (
               <>
                  <Disclosure.Button
                     className={`py-2 hover:bg-blue-500 rounded-lg hover:text-white duration-150 font-bold text-left flex flex-row items-center justify-between p-1 ${
                        open ? "bg-blue-500 text-white" : ""
                     }`}
                  >
                     Colors
                     <ChevronRightIcon className={`w-5 h-5 duration-150 ${open ? "transform rotate-90" : ""}`} />
                  </Disclosure.Button>
                  <Disclosure.Panel className={`space-y-2`}>
                     <h2 className='text-gray-500 text-sm text-center'>Click on the color below to change it</h2>
                     {Object.entries(materials).map((material, id) => (
                        <div key={id} className='flex justify-between items-center'>
                           <h3 key={id}>{material[0]}</h3>
                           <Popover className='relative'>
                              <Popover.Button
                                 className={`h-6 w-8 rounded-lg shadow-md hover:ring-2 hover:ring-blue-500 duration-150`}
                                 style={{
                                    backgroundColor: DecimalToRGB(
                                       material[1].color.r,
                                       material[1].color.g,
                                       material[1].color.b
                                    ),
                                 }}
                              ></Popover.Button>

                              <Popover.Panel className='absolute z-10 right-3'>
                                 <ChromePicker
                                    color={DecimalToRGB(
                                       colorPicker[material[0]].color.r,
                                       colorPicker[material[0]].color.g,
                                       colorPicker[material[0]].color.b
                                    )}
                                    onChange={(event) => {
                                       const toDecimal = RGBtoDecimal(event.rgb.r, event.rgb.g, event.rgb.b)
                                       const materialName = material[0]
                                       materials[material[0]].color = toDecimal
                                       setColorPicker({ ...colorPicker, materialName: toDecimal })
                                    }}
                                 />
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
