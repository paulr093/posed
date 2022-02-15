import { Disclosure } from "@headlessui/react"
import { ChevronRightIcon } from "@heroicons/react/outline"
import React from "react"
import { modelTransforms } from "../../../zustand/states"
import TransformSlider from "./TransformSlider"

function Transforms() {
   // Head transforms
   const headTransform = modelTransforms((state) => state.head)
   const setHead = modelTransforms((state) => state.setHead)

   // Body transforms
   const bodyTransform = modelTransforms((state) => state.body)
   const setBody = modelTransforms((state) => state.setBody)

   // upperArmL
   const upperArmLTransform = modelTransforms((state) => state.upperArmL)
   const setUpperArmL = modelTransforms((state) => state.setUpperArmL)

   //    lowerArmL
   const lowerArmLTransform = modelTransforms((state) => state.lowerArmL)
   const setLowerArmL = modelTransforms((state) => state.setLowerArmL)

   //    upperArmR
   const upperArmRTransform = modelTransforms((state) => state.upperArmR)
   const setUpperArmR = modelTransforms((state) => state.setUpperArmR)

   //    lowerArmR
   const lowerArmRTransform = modelTransforms((state) => state.lowerArmR)
   const setLowerArmR = modelTransforms((state) => state.setLowerArmR)

   //    upperLegL
   const upperLegLTransform = modelTransforms((state) => state.upperLegL)
   const setUpperLegL = modelTransforms((state) => state.setUpperLegL)

   //    lowerLegL
   const lowerLegLTransform = modelTransforms((state) => state.lowerLegL)
   const setLowerLegL = modelTransforms((state) => state.setLowerLegL)

   //    upperLegR
   const upperLegRTransform = modelTransforms((state) => state.upperLegR)
   const setUpperLegR = modelTransforms((state) => state.setUpperLegR)

   //    lowerLegR
   const lowerLegRTransform = modelTransforms((state) => state.lowerLegR)
   const setLowerLegR = modelTransforms((state) => state.setLowerLegR)

   return (
      <Disclosure>
         {({ open }) => (
            <>
               <Disclosure.Button
                  className={`py-2 px-3 hover:bg-blue-500 rounded-lg hover:text-white duration-150 font-bold text-left flex flex-row items-center justify-between p-1 ${
                     open ? "bg-blue-500 text-white hover:bg-blue-400 hover:text-neutral-50" : ""
                  }`}
               >
                  Transforms
                  <ChevronRightIcon className={`w-5 h-5 duration-150 ${open ? "transform rotate-90" : ""}`} />
               </Disclosure.Button>
               <Disclosure.Panel className={`space-y-2`}>
                  {/* Head */}
                  <Disclosure>
                     {({ open: openHead }) => (
                        <>
                           <Disclosure.Button className='bg-neutral-200 dark:bg-neutral-700 items-center hover:dark:bg-neutral-600 rounded-md w-full flex justify-between font-medium p-1 hover:bg-neutral-50 duration-150'>
                              Head
                              <ChevronRightIcon
                                 className={`w-5 h-5 duration-150 ${openHead ? "transform rotate-90" : ""}`}
                              />
                           </Disclosure.Button>
                           <Disclosure.Panel>
                              <TransformSlider boneTransform={headTransform} setTransform={setHead} />
                           </Disclosure.Panel>
                        </>
                     )}
                  </Disclosure>

                  {/* Body */}
                  <Disclosure>
                     {({ open: openBody }) => (
                        <>
                           <Disclosure.Button className='bg-neutral-200 dark:bg-neutral-700 items-center hover:dark:bg-neutral-600 rounded-md w-full flex justify-between font-medium p-1 hover:bg-neutral-50 duration-150'>
                              Body
                              <ChevronRightIcon
                                 className={`w-5 h-5 duration-150 ${openBody ? "transform rotate-90" : ""}`}
                              />
                           </Disclosure.Button>
                           <Disclosure.Panel>
                              <TransformSlider boneTransform={bodyTransform} setTransform={setBody} />
                           </Disclosure.Panel>
                        </>
                     )}
                  </Disclosure>

                  {/* Left Arm */}
                  <Disclosure>
                     {({ open: openLeftArm }) => (
                        <>
                           <Disclosure.Button className='bg-neutral-200 dark:bg-neutral-700 items-center hover:dark:bg-neutral-600 rounded-md w-full flex justify-between font-medium p-1 hover:bg-neutral-50 duration-150'>
                              Left Arm
                              <ChevronRightIcon
                                 className={`w-5 h-5 duration-150 ${openLeftArm ? "transform rotate-90" : ""}`}
                              />
                           </Disclosure.Button>
                           <Disclosure.Panel>
                              <h4>Upper Left Arm</h4>
                              <TransformSlider boneTransform={upperArmLTransform} setTransform={setUpperArmL} />
                              <h4>Lower Left Arm</h4>
                              <TransformSlider boneTransform={lowerArmLTransform} setTransform={setLowerArmL} />
                           </Disclosure.Panel>
                        </>
                     )}
                  </Disclosure>

                  {/* Right Arm */}
                  <Disclosure>
                     {({ open: openRightArm }) => (
                        <>
                           <Disclosure.Button className='bg-neutral-200 dark:bg-neutral-700 items-center hover:dark:bg-neutral-600 rounded-md w-full flex justify-between font-medium p-1 hover:bg-neutral-50 duration-150'>
                              Right Arm
                              <ChevronRightIcon
                                 className={`w-5 h-5 duration-150 ${openRightArm ? "transform rotate-90" : ""}`}
                              />
                           </Disclosure.Button>
                           <Disclosure.Panel>
                              <h4>Upper Right Arm</h4>
                              <TransformSlider boneTransform={upperArmRTransform} setTransform={setUpperArmR} />
                              <h4>Lower Right Arm</h4>
                              <TransformSlider boneTransform={lowerArmRTransform} setTransform={setLowerArmR} />
                           </Disclosure.Panel>
                        </>
                     )}
                  </Disclosure>

                  {/* Left Leg */}
                  <Disclosure>
                     {({ open: openLeftLeg }) => (
                        <>
                           <Disclosure.Button className='bg-neutral-200 dark:bg-neutral-700 items-center hover:dark:bg-neutral-600 rounded-md w-full flex justify-between font-medium p-1 hover:bg-neutral-50 duration-150'>
                              Left Leg
                              <ChevronRightIcon
                                 className={`w-5 h-5 duration-150 ${openLeftLeg ? "transform rotate-90" : ""}`}
                              />
                           </Disclosure.Button>
                           <Disclosure.Panel>
                              <h4>Upper Left Leg</h4>
                              <TransformSlider boneTransform={upperLegLTransform} setTransform={setUpperLegL} />
                              <h4>Lower Left Leg</h4>
                              <TransformSlider boneTransform={lowerLegLTransform} setTransform={setLowerLegL} />
                           </Disclosure.Panel>
                        </>
                     )}
                  </Disclosure>

                  {/* Right Leg */}
                  <Disclosure>
                     {({ open: openRightLeg }) => (
                        <>
                           <Disclosure.Button className='bg-neutral-200 dark:bg-neutral-700 items-center hover:dark:bg-neutral-600 rounded-md w-full flex justify-between font-medium p-1 hover:bg-neutral-50 duration-150'>
                              Right Leg
                              <ChevronRightIcon
                                 className={`w-5 h-5 duration-150 ${openRightLeg ? "transform rotate-90" : ""}`}
                              />
                           </Disclosure.Button>
                           <Disclosure.Panel>
                              <h4>Upper Right Leg</h4>
                              <TransformSlider boneTransform={upperLegRTransform} setTransform={setUpperLegR} />
                              <h4>Lower Right Leg</h4>
                              <TransformSlider boneTransform={lowerLegRTransform} setTransform={setLowerLegR} />
                           </Disclosure.Panel>
                        </>
                     )}
                  </Disclosure>
               </Disclosure.Panel>
            </>
         )}
      </Disclosure>
   )
}

export default Transforms
