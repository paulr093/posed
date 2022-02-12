import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"

export default function LowPolyRocketNoSmoke(props) {
   const group = useRef()
   const { nodes, materials } = useGLTF("/glbs/LowPolyRocket_NoSmoke.glb")

   return (
      <group ref={group} {...props}>
         <mesh castShadow receiveShadow geometry={nodes.Cylinder.geometry} material={materials.BaseGrey} />
         <mesh castShadow receiveShadow geometry={nodes.Cylinder_1.geometry} material={materials.DarkGrey} />
         <mesh castShadow receiveShadow geometry={nodes.Cylinder_2.geometry} material={nodes.Cylinder_2.material} />
         <mesh castShadow receiveShadow geometry={nodes.Fins.geometry} material={nodes.Fins.material} />
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.Fins001.geometry}
            material={nodes.Fins001.material}
            rotation={[0, Math.PI / 2, 0]}
         />
         <mesh castShadow receiveShadow geometry={nodes.Cylinder002.geometry} material={materials.WindowBorder} />
         <mesh castShadow receiveShadow geometry={nodes.Cylinder002_1.geometry} material={materials.Window} />
      </group>
   )
}

useGLTF.preload("/glbs/LowPolyRocket_NoSmoke.glb")