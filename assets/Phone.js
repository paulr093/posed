import React, { useEffect, useRef, useState } from "react"
import { Html, useCursor, useGLTF, useTexture } from "@react-three/drei"
import { useFilePicker } from "use-file-picker"
import { activeModel, modelImage } from "../zustand/states"
import { setHexFromMaterial } from "../utils/setHexFromMaterial"
import { MaterialObj } from "../utils/materialObj"

export default function Phone() {
   const group = useRef()
   const { nodes, materials } = useGLTF("/glbs/Phone.glb")

   const colors = activeModel((state) => state.colors)
   const setColors = activeModel((state) => state.setColors)
   const roughness = activeModel((state) => state.roughness)
   const setRoughness = activeModel((state) => state.setRoughness)
   const metalness = activeModel((state) => state.metalness)
   const setMetalness = activeModel((state) => state.setMetalness)

   const image = modelImage((state) => state.image)
   const setImage = modelImage((state) => state.setImage)
   const setTemplate = modelImage((state) => state.setTemplate)
   const setShowImageSettings = modelImage((state) => state.setShowImageSettings)

   useEffect(() => {
      setColors(setHexFromMaterial(materials))
      setRoughness(MaterialObj(materials).roughness)
      setMetalness(MaterialObj(materials).metalness)
      setTemplate("/templates/PhoneTemplate.png")
      setShowImageSettings(true)
      setImage("/phone.png")

      return () => setShowImageSettings(false)
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   const [texture] = useTexture([image])
   texture.flipY = false

   return (
      <>
         <group ref={group}>
            <mesh castShadow receiveShadow geometry={nodes.Cube002.geometry} material={materials.Screen}>
               <meshStandardMaterial color={colors.Screen} roughness={roughness.Screen} metalness={metalness.Screen} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.Cube002_1.geometry} material={materials.Bevel}>
               <meshStandardMaterial color={colors.Bevel} roughness={roughness.Bevel} metalness={metalness.Bevel} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.Cube002_2.geometry} material={nodes.Cube002_2.material}>
               <meshStandardMaterial color={colors.Ring} roughness={roughness.Ring} metalness={metalness.Ring} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.Cube002_3.geometry} material={materials.Back}>
               <meshStandardMaterial color={colors.Back} roughness={roughness.Back} metalness={metalness.Back} />
            </mesh>
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.LockButton.geometry}
               // material={nodes.LockButton.material}
               scale={[0.1375, 0.1375, 0.1375]}
            >
               <meshPhysicalMaterial color={colors.Ring} roughness={roughness.Ring} metalness={metalness.Ring} />
            </mesh>
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.VolumeButtons.geometry}
               // material={nodes.VolumeButtons.material}
               scale={[0.1375, 0.1375, 0.1375]}
            >
               <meshPhysicalMaterial
                  color={colors.Ring}
                  transparent={false}
                  roughness={roughness.Ring}
                  metalness={metalness.Ring}
               />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.CameraGlass.geometry} material={materials.CameraGlass}>
               <meshStandardMaterial
                  color={colors.CameraGlass}
                  transparent={true}
                  opacity={0.2}
                  roughness={roughness.CameraGlass}
                  metalness={metalness.CameraGlass}
               />
            </mesh>
            <group rotation={[Math.PI / 2, 0, 0]}>
               <mesh castShadow receiveShadow geometry={nodes.Cylinder.geometry} material={nodes.Cylinder.material}>
                  <meshPhysicalMaterial
                     color={colors.Ring}
                     transparent={false}
                     roughness={roughness.Ring}
                     metalness={metalness.Ring}
                  />
               </mesh>
               <mesh castShadow receiveShadow geometry={nodes.Cylinder_1.geometry} material={materials.Lense}>
                  <meshPhysicalMaterial
                     color={colors.Lense}
                     transparent={false}
                     roughness={roughness.Lense}
                     metalness={metalness.Lense}
                  />
               </mesh>
            </group>
            <mesh
               castShadow
               receiveShadow
               // onClick={() => openFileSelector()}
               // onPointerOver={(e) => {
               //    e.stopPropagation()
               //    setHover(true)
               // }}
               // onPointerOut={(e) => {
               //    //   e.stopPropagation()
               //    setHover(false)
               // }}
               geometry={nodes.Image.geometry}
               // material={nodes.Image.material}
               //    rotation={[300, 0, 0]}
            >
               <meshStandardMaterial map={texture} transparent={true} roughness={0} />
            </mesh>
         </group>
      </>
   )
}

// useGLTF.preload("/glbs/Phone.glb")
