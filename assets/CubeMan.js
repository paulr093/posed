import { useGLTF } from "@react-three/drei"
import { folder, useControls } from "leva"
import React, { useRef } from "react"

function CubeMan(props) {
   const group = useRef()
   const { nodes, materials } = useGLTF("/CubeMan.glb")
   const bodyRotation = nodes.Body.rotation
   const headRotation = nodes.Head.rotation

   // Body GUI
   const { BodyX, BodyY, BodyZ, HeadX, HeadY, HeadZ } = useControls(
      "Rotation",
      {
         Body: folder({
            // BodyVectors: {
            //    x: bodyRotation.x,
            //    y: bodyRotation.y,
            //    z: bodyRotation.z,
            // },
            BodyX: { value: bodyRotation.x, min: 1.5, max: 5 },
            BodyY: { value: bodyRotation.y, min: -3, max: 3 },
            BodyZ: { value: bodyRotation.z, min: 1.5, max: 5 },
         }),
         Head: folder({
            // HeadVectors: {
            //     x: headRotation.x,
            //     y: headRotation.y,
            //     z: headRotation.z,
            //  },
            HeadX: { value: headRotation.x, min: -0.5, max: 0.5 },
            HeadY: { value: headRotation.y, min: -3, max: 3 },
            HeadZ: { value: headRotation.z, min: -0.5, max: 0.5 },
         }),
      },
      { collapsed: false }
   )

   bodyRotation.x = BodyX
   bodyRotation.y = BodyY
   bodyRotation.z = BodyZ

   headRotation.x = HeadX
   headRotation.y = HeadY
   headRotation.z = HeadZ

   return (
      <group ref={group} {...props} dispose={null}>
         <group position={[0, 0, 0]} scale={[0.2, 0.2, 0.2]}>
            <primitive object={nodes.Body} />
            <primitive object={nodes.hipL} />
            <primitive object={nodes.hipR} />
            <skinnedMesh
               geometry={nodes.Cube.geometry}
               material={materials["Material.001"]}
               skeleton={nodes.Cube.skeleton}
            />
            <skinnedMesh
               geometry={nodes.Cube_1.geometry}
               material={materials["Material.003"]}
               skeleton={nodes.Cube_1.skeleton}
            />
            <HatBase nodes={nodes} />
         </group>
      </group>
   )
}

function HatBase({nodes}) {
   return (
      <skinnedMesh
         geometry={nodes.CubeMan_hat.geometry}
         material={nodes.CubeMan_hat.material}
         skeleton={nodes.CubeMan_hat.skeleton}
      />
   )
}

useGLTF.preload("/CubeMan.glb")

export default CubeMan
