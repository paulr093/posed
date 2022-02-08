import { useProgress } from "@react-three/drei"
import GUI from "lil-gui"
import { useEffect } from "react"

function useGui(headRotation, bodyRotation, upperArmLRotation, lowerArmLRotation, materials) {
   const { progress } = useProgress()

   useEffect(() => {
      if (progress === 100) {
         const gui = new GUI()
         const headFolder = gui.addFolder("Head Rotation")
         const bodyFolder = gui.addFolder("Body Rotation")
         const armFolder = gui.addFolder("Arm Rotation")
         const upperArmL = armFolder.addFolder("Upper Arm Left")
         const lowerArmL = armFolder.addFolder("Lower Arm Left")
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
            upperArmL.add(upperArmLRotation, ele, -1.5, 1.5)
            lowerArmL.add(lowerArmLRotation, ele, -1.5, 1.5)
         })

         //    edit skin color
         gui.addColor(materials, "color")
      }
      
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [progress])
}

export default useGui
