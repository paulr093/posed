import React, { useEffect, useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { activeModel, modelTransforms } from "../zustand/states"
import { setHexFromMaterial } from "../utils/setHexFromMaterial"

export default function LowPolySpaceman(props) {
   const group = useRef()
   const { nodes, materials } = useGLTF("/glbs/LowPolySpaceman.glb")

   const setShowTransforms = modelTransforms((state) => state.setShow)
   const headTransforms = modelTransforms((state) => state.head)
   const bodyTransforms = modelTransforms((state) => state.body)
   const upperArmLTransforms = modelTransforms((state) => state.upperArmL)
   const lowerArmLTransforms = modelTransforms((state) => state.lowerArmL)
   const upperArmRTransforms = modelTransforms((state) => state.upperArmR)
   const lowerArmRTransforms = modelTransforms((state) => state.lowerArmR)
   const upperLegLTransforms = modelTransforms((state) => state.upperLegL)
   const lowerLegLTransforms = modelTransforms((state) => state.lowerLegL)
   const upperLegRTransforms = modelTransforms((state) => state.upperLegR)
   const lowerLegRTransforms = modelTransforms((state) => state.lowerLegR)

   const setColors = activeModel((state) => state.setColors)
   const colors = activeModel((state) => state.colors)

   // Head
   nodes.Head.rotation.x = headTransforms.x
   nodes.Head.rotation.y = headTransforms.y
   nodes.Head.rotation.z = headTransforms.z

   // Body
   nodes.Body_1.rotation.x = bodyTransforms.x
   nodes.Body_1.rotation.y = bodyTransforms.y
   nodes.Body_1.rotation.z = bodyTransforms.z

   //    Arms
   nodes.UpperArmL.rotation.x = upperArmLTransforms.x
   nodes.UpperArmL.rotation.y = upperArmLTransforms.y
   nodes.UpperArmL.rotation.z = upperArmLTransforms.z

   nodes.LowerArmL.rotation.x = lowerArmLTransforms.x
   nodes.LowerArmL.rotation.y = lowerArmLTransforms.y
   nodes.LowerArmL.rotation.z = lowerArmLTransforms.z

   nodes.UpperArmR.rotation.x = upperArmRTransforms.x
   nodes.UpperArmR.rotation.y = upperArmRTransforms.y
   nodes.UpperArmR.rotation.z = upperArmRTransforms.z

   nodes.LowerArmR.rotation.x = lowerArmRTransforms.x
   nodes.LowerArmR.rotation.y = lowerArmRTransforms.y
   nodes.LowerArmR.rotation.z = lowerArmRTransforms.z

   // Legs
   nodes.UpperLegL.rotation.x = upperLegLTransforms.x
   nodes.UpperLegL.rotation.y = upperLegLTransforms.y
   nodes.UpperLegL.rotation.z = upperLegLTransforms.z

   nodes.LowerLegL.rotation.x = lowerLegLTransforms.x
   nodes.LowerLegL.rotation.y = lowerLegLTransforms.y
   nodes.LowerLegL.rotation.z = lowerLegLTransforms.z

   nodes.UpperLegR.rotation.x = upperLegRTransforms.x
   nodes.UpperLegR.rotation.y = upperLegRTransforms.y
   nodes.UpperLegR.rotation.z = upperLegRTransforms.z

   nodes.LowerLegR.rotation.x = lowerLegRTransforms.x
   nodes.LowerLegR.rotation.y = lowerLegRTransforms.y
   nodes.LowerLegR.rotation.z = lowerLegRTransforms.z

   useEffect(() => {
      setColors(setHexFromMaterial(materials))
      setShowTransforms(true)

      return () => {
         setShowTransforms(false)
      }
   }, [])

   return (
      <group ref={group} {...props} dispose={null}>
         <group position={[0, 5.15, 0]}>
            <primitive object={nodes.Body_1} />
            <primitive object={nodes.UpperLegL} />
            <primitive object={nodes.UpperLegR} />
            <skinnedMesh geometry={nodes.body.geometry} material={nodes.body.material} skeleton={nodes.body.skeleton}>
               <meshStandardMaterial color={colors.DarkGrey} />
            </skinnedMesh>
            <skinnedMesh
               geometry={nodes.body_1.geometry}
               material={nodes.body_1.material}
               skeleton={nodes.body_1.skeleton}
            >
               <meshStandardMaterial color={colors.White} />
            </skinnedMesh>
            <skinnedMesh
               geometry={nodes.body_2.geometry}
               material={nodes.body_2.material}
               skeleton={nodes.body_2.skeleton}
            >
               <meshStandardMaterial color={colors.Red} />
            </skinnedMesh>
            <skinnedMesh
               geometry={nodes.body001.geometry}
               material={nodes.body001.material}
               skeleton={nodes.body001.skeleton}
            >
               <meshStandardMaterial color={colors.White} />
            </skinnedMesh>
            <skinnedMesh
               geometry={nodes.body001_1.geometry}
               material={nodes.body001_1.material}
               skeleton={nodes.body001_1.skeleton}
            >
               <meshStandardMaterial color={colors.DarkGrey} />
            </skinnedMesh>
            <skinnedMesh
               geometry={nodes.body001_2.geometry}
               material={nodes.body001_2.material}
               skeleton={nodes.body001_2.skeleton}
            >
               <meshStandardMaterial color={colors.Red} />
            </skinnedMesh>
            <skinnedMesh
               geometry={nodes.helmet.geometry}
               material={nodes.helmet.material}
               skeleton={nodes.helmet.skeleton}
            >
               <meshStandardMaterial color={colors.White} />
            </skinnedMesh>
            <skinnedMesh
               geometry={nodes.helmet_1.geometry}
               material={nodes.helmet_1.material}
               skeleton={nodes.helmet_1.skeleton}
            >
               <meshStandardMaterial color={colors.DarkGrey} />
            </skinnedMesh>
            <skinnedMesh
               geometry={nodes.helmet_2.geometry}
               material={nodes.helmet_2.material}
               skeleton={nodes.helmet_2.skeleton}
            >
               <meshStandardMaterial color={colors.Red} />
            </skinnedMesh>
            <skinnedMesh
               geometry={nodes.HelmetLense.geometry}
               material={materials.Lense}
               skeleton={nodes.HelmetLense.skeleton}
            >
               <meshStandardMaterial color={colors.Lense} roughness={0} metalness={1} />
            </skinnedMesh>
         </group>
      </group>
   )
}
