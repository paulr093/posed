import React, { useEffect, useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { activeModel } from "../zustand/states"
import { setHexFromMaterial } from "../utils/setHexFromMaterial"
import { MaterialObj } from "../utils/materialObj"

export default function LowPolyRocket() {
   const group = useRef()
   const { nodes, materials } = useGLTF("/glbs/LowPolyRocket.glb")

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

   // Go to https://gltf.pmnd.rs/ to export glb into JSX format
   //          {/* IMPORTANT: SET MATERIAL IN meshStandardMaterial WITH GLOBAL STATE */}
   // return (
   //    <group ref={group}>
   //       <mesh castShadow receiveShadow geometry={nodes.Cylinder.geometry} material={materials.BaseGrey}>
   //          <meshStandardMaterial
   //             color={colors.BaseGrey}
   //             roughness={roughness.BaseGrey}
   //             metalness={metalness.BaseGrey}
   //          />
   //       </mesh>
   //    </group>
   // )
}
