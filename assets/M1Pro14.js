import React, { useEffect, useRef } from "react"
import { Html, useGLTF, useTexture } from "@react-three/drei"
import { activeModel, modelImage } from "../zustand/states"
import { setHexFromMaterial } from "../utils/setHexFromMaterial"
import { MaterialObj } from "../utils/materialObj"
import { useFilePicker } from "use-file-picker"

function M1Pro14() {
   const group = useRef()
   const { nodes, materials } = useGLTF("/glbs/M1Pro14.glb")

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

   const [texture] = useTexture([image])
   texture.flipY = false

   useEffect(() => {
      setColors(setHexFromMaterial(materials))
      setRoughness(MaterialObj(materials).roughness)
      setMetalness(MaterialObj(materials).metalness)
      setTemplate("/templates/MacbookTemplate.png")
      setShowImageSettings(true)
      setImage("/macbook.png")

      return () => setShowImageSettings(false)
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   return (
      <group ref={group} dispose={null}>
         <mesh castShadow receiveShadow geometry={nodes.screen.geometry} material={nodes.screen.material}>
            <meshStandardMaterial color={colors.Body} roughness={roughness.Body} metalness={metalness.Body} />
         </mesh>
         <mesh castShadow receiveShadow geometry={nodes.screen_1.geometry} material={nodes.screen_1.material}>
            <meshStandardMaterial
               color={colors.TrimKeys}
               roughness={roughness.TrimKeys}
               metalness={metalness.TrimKeys}
            />
         </mesh>
         <mesh castShadow receiveShadow geometry={nodes.screen_2.geometry} material={materials.screen}>
            <meshStandardMaterial
               color={colors.TrimKeys}
               roughness={roughness.TrimKeys}
               metalness={metalness.TrimKeys}
            />
         </mesh>
         <mesh castShadow receiveShadow geometry={nodes.screen_3.geometry} material={materials.screencontent}>
            <meshStandardMaterial
               color={colors.screencontent}
               roughness={roughness.screencontent}
               metalness={metalness.screencontent}
            />
         </mesh>
         <mesh castShadow receiveShadow geometry={nodes.body.geometry} material={nodes.body.material}>
            <meshStandardMaterial
               color={colors.TrimKeys}
               roughness={roughness.TrimKeys}
               metalness={metalness.TrimKeys}
            />
         </mesh>
         <mesh castShadow receiveShadow geometry={nodes.body_1.geometry} material={nodes.body_1.material}>
            <meshStandardMaterial color={colors.Body} roughness={roughness.Body} metalness={metalness.Body} />
         </mesh>
         <mesh castShadow receiveShadow geometry={nodes.body_2.geometry} material={materials.Trackpad}>
            <meshStandardMaterial color={colors.Body} roughness={roughness.Trackpad} metalness={metalness.Trackpad} />
         </mesh>
         <mesh castShadow receiveShadow geometry={nodes.body_3.geometry} material={materials.Metal}>
            <meshStandardMaterial color={colors.Metal} roughness={roughness.Metal} metalness={metalness.Metal} />
         </mesh>
         <mesh castShadow receiveShadow geometry={nodes.body_4.geometry} material={materials["Charger Prong"]}>
            <meshStandardMaterial
               color={colors["Charger Prong"]}
               roughness={roughness["Charger Prong"]}
               metalness={metalness["Charger Prong"]}
            />
         </mesh>
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.Keys.geometry}
            material={nodes.Keys.material}
            position={[0, -1.31, 1.76]}
         >
            <meshStandardMaterial
               color={colors.TrimKeys}
               roughness={roughness.TrimKeys}
               metalness={metalness.TrimKeys}
            />
         </mesh>
         <mesh castShadow receiveShadow geometry={nodes.Image.geometry} material={nodes.Image.material}>
            <meshStandardMaterial map={texture} transparent={true} roughness={0} />
         </mesh>
      </group>
   )
}

export default M1Pro14
