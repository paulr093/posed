import React, { useRef, useState, useEffect, Suspense } from "react"
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber"
// import { OrbitControls } from "../addons/OrbitControls"
import { GLTFLoader } from "../addons/GLTFLoader"
import { useGLTF, Sky, Stage, Center, OrbitControls } from "@react-three/drei"
import { useControls, folder } from "leva"
import CubeMan from "../assets/CubeMan"

// const CameraController = () => {
//    const { camera, gl } = useThree()
//    useEffect(() => {
//       const controls = new OrbitControls(camera, gl.domElement)

//       camera.fov = 60

//       controls.minDistance = 3
//       controls.maxDistance = 20
//       return () => {
//          controls.dispose()
//       }
//    }, [camera, gl])
//    return null
// }

function FiberRender() {
   const ref = useRef()
   const [model, setModel] = useState(<CubeMan />)

   return (
      <div className='h-[100vh] w-[75vw]'>
         <Canvas gl={{ preserveDrawingBuffer: true }} dpr={[1, 1.5]} shadows>
            <OrbitControls makeDefault minDistance={1.25} />

            {/* <directionalLight />
            <ambientLight /> */}

            <Suspense fallback={null}>
               <Stage adjustCamera controls={ref}>
                  {model}
               </Stage>
            </Suspense>
         </Canvas>
      </div>
   )
}

export default FiberRender
