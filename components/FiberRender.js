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
   Bounds,
} from "@react-three/drei"
import { renderSettings } from "../zustand/states"
import setModel from "../utils/setModel"
import { useRouter } from "next/router"

function FiberRender() {
   const ref = useRef()
   const [dpr, setDpr] = useState(null)
   const { progress } = useProgress()
   const router = useRouter()
   const {pid} = router.query

   // ZUSTAND
   const contactShadow = renderSettings((state) => state.contactShadow)
   const scene = renderSettings((state) => state.scene)

   // TODO global state to control in sidepanel
   // const [showStats, setShowStats] = useState(false)

   useEffect(() => {
      setDpr(window.devicePixelRatio)
   }, [])

   function Loading() {
      return <Html>{Math.floor(progress)}% Loading...</Html>
   }

   return (
      <>
         <div className='h-[100vh] w-3/4 bg-neutral-50 dark:bg-neutral-700'>
            <Canvas gl={{ preserveDrawingBuffer: true, antialias: true }} camera={{ fov: 75, near: 0.01 }} dpr={Math.max(dpr, 2)}>
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

               {/* {showStats && <Stats showPanel={0} className='stats' />} */}

               <Suspense fallback={<Loading />}>
                  <Stage
                     shadows={false}
                     contactShadow={false}
                     environment={null}
                     intensity={scene.intensity}
                     controls={ref}
                  >
                     {setModel(pid)}
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
      </>
   )
}

export default FiberRender
