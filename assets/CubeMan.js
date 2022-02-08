import { useGLTF } from "@react-three/drei"
import React, { useEffect, useRef } from "react"
import useGui from "../utils/useGui"
import GUI from 'lil-gui'

function CubeMan(props) {
   const group = useRef()
   const { nodes, materials } = useGLTF("/CubeMan.glb")
   const bodyRotation = nodes.Body.rotation
   const headRotation = nodes.Head_1.rotation

   const gui = new GUI()
   const headFolder = gui.addFolder("Head Rotation")
   const bodyFolder = gui.addFolder("Body Rotation")
   const axis = ["x", "y", "z"]

   const reset = {
      bodyReset: () => bodyFolder.reset(),
      headReset: () => headFolder.reset(),
   }

   //    main title
   gui.title("Modify Character")

   //    default close all tabs
   gui.close(true)
   headFolder.close(true)
   bodyFolder.close(true)

   //    reset each folder
   bodyFolder.add(reset, "bodyReset")
   headFolder.add(reset, "headReset")

   //    vector 3 mapping
   axis.map((ele) => {
      headFolder.add(headRotation, ele, -1.5, 1.5)
      bodyFolder.add(bodyRotation, ele, -5, 5)
   })

   //    edit skin color
   gui.addColor(materials.YellowSkin, "color")

   return (
      <group ref={group} {...props} dispose={null}>
         <group position={[0, 0, 0]} scale={[0.2, 0.2, 0.2]}>
            <primitive object={nodes.Body} />
            <primitive object={nodes.hipL} />
            <primitive object={nodes.hipR} />
            <skinnedMesh
               geometry={nodes.CubeMan.geometry}
               material={nodes.CubeMan.material}
               skeleton={nodes.CubeMan.skeleton}
            />
            <skinnedMesh
               geometry={nodes.Plane.geometry}
               material={materials.GlassesPlastic}
               skeleton={nodes.Plane.skeleton}
            />
            <skinnedMesh
               geometry={nodes.Plane_1.geometry}
               material={materials.GlassesLense}
               skeleton={nodes.Plane_1.skeleton}
            />
            <skinnedMesh geometry={nodes.Head.geometry} material={nodes.Head.material} skeleton={nodes.Head.skeleton} />
            <skinnedMesh
               geometry={nodes.Mustache.geometry}
               material={materials.Mustache}
               skeleton={nodes.Mustache.skeleton}
            />
         </group>
      </group>
   )
}

useGLTF.preload("/CubeMan.glb")

export default CubeMan
