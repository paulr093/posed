import React, { useRef, useState, useEffect, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Stage, OrbitControls, ContactShadows, Stats, useProgress, Html, CycleRaycast, Environment } from "@react-three/drei"
import { useRecoilState, useRecoilValue } from "recoil"
import { characterState, renderSettings } from "../recoil/states"

function FiberRender(props) {
   const ref = useRef()
   const [character, setCharacter] = useRecoilState(characterState)
   const settings = useRecoilValue(renderSettings)
   const [dpr, setDpr] = useState(null)
   const { progress } = useProgress()

   // TODO global state to control in sidepanel
   const [showStats, setShowStats] = useState(false)

   useEffect(() => {
      setDpr(window.devicePixelRatio)
   }, [])

   function Loading() {
      return <Html>{Math.floor(progress)}% Loading...</Html>
   }

   return (
      <div className='h-[100vh] w-[75vw]'>
         <Canvas gl={{ preserveDrawingBuffer: true, antialias: true }} camera={{ fov: 75 }} dpr={Math.max(dpr, 2)}>
            <OrbitControls makeDefault minDistance={1.25} />

            {settings.contactShadow.show && (
               <ContactShadows
                  opacity={settings.contactShadow.shadowOpacity}
                  scale={100}
                  blur={settings.contactShadow.shadowBlur}
                  far={settings.contactShadow.focalLength}
                  resolution={256}
                  position={[0, 0, 0.02]}
               />
            )}

            {showStats && <Stats showPanel={0} className='stats' {...props} />}

            <Suspense fallback={<Loading />}>
               <Stage
                  shadows={false}
                  contactShadow={false}
                  intensity={settings.scene.intensity}
                  controls={ref}
               >
                  {character.model}
               </Stage>
               <Environment path="/hdris/" files={settings.scene.environment} />
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
