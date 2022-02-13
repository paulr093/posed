import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"

export default function Jim(props) {
   const group = useRef()
   const { nodes, materials } = useGLTF("/Jim.glb")

   const bodyRotation = nodes.body.rotation
   const headRotation = nodes.head.rotation
   const leftArmRotation = {
      upper: nodes.upperArmL.rotation,
      lower: nodes.lowerArmL.rotation,
   }

   //    useGui(headRotation, bodyRotation, leftArmRotation.upper, leftArmRotation.lower, materials.YellowSkin)

   return (
      <group ref={group} {...props}>
         <group position={[0, 0, 0]} scale={[0.35, 0.35, 0.35]}>
            <primitive object={nodes.body} />
            <primitive object={nodes.upperLegL} />
            <primitive object={nodes.upperLegR} />
            <skinnedMesh
               geometry={nodes.Body_1.geometry}
               material={nodes.Body_1.material}
               skeleton={nodes.Body_1.skeleton}
            />
            <skinnedMesh geometry={nodes.Body_2.geometry} material={materials.Suit} skeleton={nodes.Body_2.skeleton} />
            <skinnedMesh
               geometry={nodes.Body_3.geometry}
               material={materials.DressShirt}
               skeleton={nodes.Body_3.skeleton}
            />
            <skinnedMesh
               geometry={nodes.Body013.geometry}
               material={materials.GlassesPlastic}
               skeleton={nodes.Body013.skeleton}
            />
            <skinnedMesh
               geometry={nodes.Body013_1.geometry}
               material={materials.GlassesLense}
               skeleton={nodes.Body013_1.skeleton}
            />
            <skinnedMesh geometry={nodes.Hair.geometry} material={materials.Hair} skeleton={nodes.Hair.skeleton} />
            <skinnedMesh geometry={nodes.Head.geometry} material={nodes.Head.material} skeleton={nodes.Head.skeleton} />
            <skinnedMesh
               geometry={nodes.Mustache.geometry}
               material={materials.Mustache}
               skeleton={nodes.Mustache.skeleton}
            />
            <skinnedMesh geometry={nodes.Tie.geometry} material={materials.Tie} skeleton={nodes.Tie.skeleton} />
         </group>
      </group>
   )
}

useGLTF.preload("/Jim.glb")
