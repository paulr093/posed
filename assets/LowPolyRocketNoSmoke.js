import React, { useEffect, useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { activeModel } from "../zustand/states"
import { setHexFromMaterial } from "../utils/setHexFromMaterial"
import { MaterialObj } from "../utils/materialObj"

export default function LowPolyRocketNoSmoke(props) {
   const group = useRef()
   const { nodes, materials } = useGLTF("/glbs/LowPolyRocket_NoSmoke.glb")

   const colors = activeModel((state) => state.colors)
   const setColors = activeModel((state) => state.setColors)
   const roughness = activeModel((state) => state.roughness)
   const setRoughness = activeModel((state) => state.setRoughness)
   const metalness = activeModel((state) => state.metalness)
   const setMetalness = activeModel((state) => state.setMetalness)

   useEffect(() => {
      setColors(setHexFromMaterial(materials))
      setRoughness(MaterialObj(materials).roughness)
      setMetalness(MaterialObj(materials).metalness)
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   return (
      <group ref={group} {...props}>
         <mesh castShadow receiveShadow geometry={nodes.Cylinder.geometry} material={materials.BaseGrey}>
            <meshStandardMaterial color={colors.BaseGrey} roughness={roughness.BaseGrey} metalness={metalness.BaseGrey} />
         </mesh>
         <mesh castShadow receiveShadow geometry={nodes.Cylinder_1.geometry} material={materials.DarkGrey}>
            <meshStandardMaterial color={colors.DarkGrey} roughness={roughness.DarkGrey} metalness={metalness.DarkGrey} />
         </mesh>
         <mesh castShadow receiveShadow geometry={nodes.Cylinder_2.geometry} material={nodes.Cylinder_2.material}>
            <meshStandardMaterial color={colors.Red} roughness={roughness.Red} metalness={metalness.Red} />
         </mesh>
         <mesh castShadow receiveShadow geometry={nodes.Fins.geometry} material={nodes.Fins.material}>
            <meshStandardMaterial color={colors.Red} roughness={roughness.Red} metalness={metalness.Red} />
         </mesh>
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.Fins001.geometry}
            material={nodes.Fins001.material}
            rotation={[0, Math.PI / 2, 0]}
         >
            <meshStandardMaterial color={colors.Red} roughness={roughness.Red} metalness={metalness.Red} />
         </mesh>
         <mesh castShadow receiveShadow geometry={nodes.Cylinder002.geometry} material={materials.WindowBorder}>
            <meshStandardMaterial color={colors.WindowBorder} roughness={roughness.WindowBorder} metalness={metalness.WindowBorder} />
         </mesh>
         <mesh castShadow receiveShadow geometry={nodes.Cylinder002_1.geometry} material={materials.Window}>
            <meshPhysicalMaterial color={colors.Window} roughness={roughness.Window} metalness={metalness.Window} />
         </mesh>
      </group>
   )
}

// useGLTF.preload("/glbs/LowPolyRocket_NoSmoke.glb")
