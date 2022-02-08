import React, { useRef, useState, useEffect, Suspense } from "react"
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber"
// import { OrbitControls } from "../addons/OrbitControls"
import { GLTFLoader } from "../addons/GLTFLoader"
import { useGLTF, Sky, Stage, Center, OrbitControls, ContactShadows, Stats, useProgress, Html } from "@react-three/drei"
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
         <Canvas gl={{ preserveDrawingBuffer: true, antialias: true }} dpr={Math.max(dpr, 2)}>
            <OrbitControls makeDefault minDistance={1.25} />

            {settings.contactShadow.show && (
               <ContactShadows
                  opacity={settings.contactShadow.shadowOpacity}
                  scale={100}
                  blur={settings.contactShadow.shadowBlur}
                  far={settings.contactShadow.focalLength}
                  resolution={256}
                  position={[0, -0.38, 0]}
               />
            )}

            {showStats && <Stats showPanel={0} className='stats' {...props} />}

            <Suspense fallback={<Loading />}>
               <Stage shadows={false} contactShadow={false} intensity={0.5} controls={ref}>
                  {character.model}
               </Stage>
            </Suspense>
         </Canvas>
      </div>
   )
}

export default FiberRender
