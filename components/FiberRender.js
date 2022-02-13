import React, { useRef, useState, useEffect, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import {
   Stage,
   OrbitControls,
   ContactShadows,
   Stats,
   useProgress,
   Html,
   CycleRaycast,
   Environment,
} from "@react-three/drei"
import LowPolyRocketNoSmoke from "../assets/LowPolyRocketNoSmoke"
import LowPolyRocket from "../assets/LowPolyRocket"
import Phone from "../assets/Phone"
import CryptoCoin from "../assets/CryptoCoin"
import SodaCan from "../assets/SodaCan"
import { activeModel, renderSettings } from "../zustand/states"

function FiberRender({ urls }) {
   const ref = useRef()
   const [dpr, setDpr] = useState(null)
   const { progress } = useProgress()

   // ZUSTAND
   const activeModelLabel = activeModel((state) => state.label)
   const contactShadow = renderSettings((state) => state.contactShadow)
   const scene = renderSettings((state) => state.scene)

   // TODO global state to control in sidepanel
   const [showStats, setShowStats] = useState(false)

   useEffect(() => {
      setDpr(window.devicePixelRatio)
   }, [])

   function setModel(label) {
      switch (label) {
         case "Low Poly Rocket No Smoke":
            return <LowPolyRocketNoSmoke />
         case "Low Poly Rocket":
            return <LowPolyRocket />
         case "Phone":
            return <Phone />
         case "Crypto Coin":
            return <CryptoCoin />
         case "Soda Can":
            return <SodaCan />
         default:
            return (
               <Html>
                  <h1>Error retrieving model</h1>
               </Html>
            )
      }
   }

   function Loading() {
      return <Html>{Math.floor(progress)}% Loading...</Html>
   }

   return (
      <div className='h-[100vh] w-[75vw]'>
         <Canvas gl={{ preserveDrawingBuffer: true, antialias: true }} camera={{ fov: 75 }} dpr={Math.max(dpr, 2)}>
            <OrbitControls makeDefault minDistance={1.25} />

            {contactShadow.show && (
               <ContactShadows
                  opacity={contactShadow.shadowOpacity}
                  scale={100}
                  blur={contactShadow.shadowBlur}
                  far={contactShadow.focalLength}
                  resolution={256}
                  position={[0, 0, 0.02]}
               />
            )}

            {showStats && <Stats showPanel={0} className='stats' />}

            <Suspense fallback={<Loading />}>
               <Stage
                  shadows={false}
                  contactShadow={false}
                  environment={null}
                  intensity={scene.intensity}
                  controls={ref}
               >
                  {setModel(activeModelLabel)}
               </Stage>
               <Environment path='/hdris/' files={scene.environment} />
            </Suspense>
            <CycleRaycast
               preventDefault={false}
               scroll={true}
               // onChange={(event) => console.log(event)}
            />
         </Canvas>
      </div>
   )
}

export default FiberRender
