import React, { useEffect, useRef } from "react"
import { useGLTF, useTexture } from "@react-three/drei"
import { activeModel } from "../zustand/states"
import { setHexFromMaterial } from "../utils/setHexFromMaterial"
import { MaterialObj } from "../utils/materialObj"

export default function CryptoCoin(props) {
   const group = useRef()
   const { nodes, materials } = useGLTF("/glbs/CryptoCoin.glb")
   // const [texture] = useTexture(["/crypto.jpg"])

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
      <group ref={group} {...props} dispose={null}>
         {/* <mesh castShadow receiveShadow geometry={nodes.Plane.geometry} material={materials.Stonks}>
            <meshStandardMaterial color={colors.Stonks} roughness={0.2} metalness={1} />
         </mesh> */}
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001.geometry}
            material={materials.OuterCoin}
            // rotation={[Math.PI / 2, 0, 0]}
         >
            <meshStandardMaterial color={colors.OuterCoin} roughness={roughness.OuterCoin} metalness={metalness.OuterCoin} />
         </mesh>
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            // material={materials.Coin}
            // rotation={[Math.PI / 2, 0, 0]}
         >
            <meshStandardMaterial color={colors.Coin} roughness={roughness.Coin} metalness={metalness.Coin} />
         </mesh>
      </group>
   )
}

// useGLTF.preload('/glbs/CryptoCoin.glb')
