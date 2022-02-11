import React, { useEffect, useRef, useState } from "react"
import { Html, useCursor, useGLTF, useTexture } from "@react-three/drei"
import { useFilePicker } from "use-file-picker"

export default function Phone() {
   const group = useRef()
   const { nodes, materials } = useGLTF("/glbs/Phone.glb")

   const [hover, setHover] = useState(false)
   const [openFileSelector, { filesContent, loading }] = useFilePicker({
      accept: ".png",
      readAs: "DataURL",
      multiple: false,
   })
   const [imagePath, setImagePath] = useState("/logoipsum.png")
   const [texture] = useTexture([imagePath])
   texture.flipY = false

   useCursor(hover)

   useEffect(() => {
      if (filesContent[0]?.content) {
         setImagePath(filesContent[0]?.content)
      }
   }, [filesContent])

   if (loading) {
      return <Html>Loading...</Html>
   }

   return (
      <>
         <Html center as='div' position={[0, 3.75, 0]}>
            <div
               style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "300px",
                  opacity: 0.5,
                  userSelect: "none",
               }}
            >
               <h1>Click the screen to change the image!</h1>
               {/* <br /> */}
               <h2>Dimensions: 850 x 1850</h2>
            </div>
         </Html>
         <group ref={group}>
            <mesh castShadow receiveShadow geometry={nodes.Cube002.geometry} material={materials.Screen} />
            <mesh castShadow receiveShadow geometry={nodes.Cube002_1.geometry} material={materials.Bevel} />
            <mesh castShadow receiveShadow geometry={nodes.Cube002_2.geometry} material={nodes.Cube002_2.material} />
            <mesh castShadow receiveShadow geometry={nodes.Cube002_3.geometry} material={materials.Back} />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.LockButton.geometry}
               material={nodes.LockButton.material}
               scale={[0.1375, 0.1375, 0.1375]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.VolumeButtons.geometry}
               material={nodes.VolumeButtons.material}
               scale={[0.1375, 0.1375, 0.1375]}
            />
            <mesh castShadow receiveShadow geometry={nodes.CameraGlass.geometry} material={materials.CameraGlass}>
               <meshStandardMaterial color={"black"} transparent={true} opacity={0.2} roughness={0} />
            </mesh>
            <group rotation={[Math.PI / 2, 0, 0]}>
               <mesh castShadow receiveShadow geometry={nodes.Cylinder.geometry} material={nodes.Cylinder.material} />
               <mesh castShadow receiveShadow geometry={nodes.Cylinder_1.geometry} material={materials.Lense} />
            </group>
            <mesh
               castShadow
               receiveShadow
               onClick={() => openFileSelector()}
               onPointerOver={(e) => {
                  e.stopPropagation()
                  setHover(true)
               }}
               onPointerOut={(e) => {
                  //   e.stopPropagation()
                  setHover(false)
               }}
               geometry={nodes.Image.geometry}
               // material={nodes.Image.material}
               //    rotation={[300, 0, 0]}
            >
               <meshStandardMaterial map={texture} transparent={true} opacity={hover ? 0.5 : 1} roughness={0} />
            </mesh>
         </group>
      </>
   )
}

useGLTF.preload("/glbs/Phone.glb")
