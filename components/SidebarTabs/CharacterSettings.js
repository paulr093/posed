import { useGLTF } from "@react-three/drei"
import React, { useEffect, useState } from "react"
import { Range } from "react-range"
import { useRecoilState } from "recoil"
import LowPolyRocket from "../../assets/LowPolyRocket"
import LowPolyRocketNoSmoke from "../../assets/LowPolyRocketNoSmoke"
import { characterState } from "../../recoil/states"
import Select from "react-select"
import { Disclosure, Popover } from "@headlessui/react"
import { ChevronRightIcon } from "@heroicons/react/outline"
import Phone from "../../assets/Phone"
import DecimalToRGB from "../../utils/decimalToRGB"
import RGBtoDecimal from "../../utils/rgbToDecimal"
import { HexColorInput, RgbColorPicker } from "react-colorful"
import rgbToHex from "../../utils/rgbToHex"
import hexToRgb from "../../utils/hexToRGB"
import CryptoCoin from "../../assets/CryptoCoin"
import SodaCan from "../../assets/SodaCan"

const SELECTOPTIONS = [
   { value: <LowPolyRocket />, label: "Low Poly Rocket", path: "/glbs/LowPolyRocket.glb" },
   { value: <LowPolyRocketNoSmoke />, label: "Low Poly Rocket No Smoke", path: "/glbs/LowPolyRocket_NoSmoke.glb" },
   { value: <Phone />, label: "Phone", path: "/glbs/Phone.glb" },
   { value: <CryptoCoin />, label: "Crypto Coin", path: "/glbs/CryptoCoin.glb" },
   { value: <SodaCan />, label: "Soda Can", path: "/glbs/SodaCan.glb" },
]

function CharacterSettings() {
   const [activeModel, setActiveModel] = useRecoilState(characterState)
   const { materials } = useGLTF(activeModel.path)
   const [colorPicker, setColorPicker] = useState(materials)

   useEffect(() => {
      setColorPicker(materials)
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [activeModel.path])

   return (
      <div className='flex flex-col flex-grow space-y-3 w-full py-2 dark:text-white'>
         <h1 className='font-bold'>Active Model</h1>
         <Select
            options={SELECTOPTIONS}
            placeholder={activeModel.label ?? "Select"}
            value={{ value: activeModel.model, label: activeModel.label }}
            onChange={(option) => setActiveModel({ model: option.value, path: option.path, label: option.label })}
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
                     {Object.entries(materials).map((material, id) => (
                        <div key={id} className='flex justify-between items-center'>
                           {material[0] && (
                              <h3 key={id} className='text-opacity-75 text-sm'>
                                 {material[0]}
                              </h3>
                           )}
                           <Popover className='relative'>
                              {material[0] && (
                                 <Popover.Button
                                    className={`h-6 w-16 rounded-lg shadow-md hover:ring-2 hover:ring-blue-500 duration-150`}
                                    style={{
                                       backgroundColor: DecimalToRGB(
                                          materials[material[0]].color.r,
                                          materials[material[0]].color.g,
                                          materials[material[0]].color.b,
                                          true
                                       ),
                                    }}
                                 ></Popover.Button>
                              )}

                              <Popover.Panel className='absolute z-10 right-0'>
                                 <RgbColorPicker
                                    color={DecimalToRGB(material[1].color.r, material[1].color.g, material[1].color.b)}
                                    onChange={(event) => {
                                       const materialName = material[0]
                                       materials[material[0]].color = RGBtoDecimal(event.r, event.g, event.b)
                                       setColorPicker({
                                          ...colorPicker,
                                          materialName: {
                                             ...materialName,
                                             color: RGBtoDecimal(event.r, event.g, event.b),
                                          },
                                       })
                                    }}
                                 />
                                 <HexColorInput
                                    color={rgbToHex(
                                       DecimalToRGB(material[1].color.r, material[1].color.g, material[1].color.b).r,
                                       DecimalToRGB(material[1].color.r, material[1].color.g, material[1].color.b).g,
                                       DecimalToRGB(material[1].color.r, material[1].color.g, material[1].color.b).b
                                    )}
                                    onChange={(event) => {
                                       const materialName = material[0]
                                       setTimeout(() => {
                                          materials[material[0]].color = RGBtoDecimal(
                                             hexToRgb(event).r,
                                             hexToRgb(event).g,
                                             hexToRgb(event).b
                                          )
                                          setColorPicker({
                                             ...colorPicker,
                                             materialName: {
                                                ...materialName,
                                                color: RGBtoDecimal(
                                                   hexToRgb(event).r,
                                                   hexToRgb(event).g,
                                                   hexToRgb(event).b
                                                ),
                                             },
                                          })
                                       }, 250)
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
