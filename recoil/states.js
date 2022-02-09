import { atom } from "recoil"
import Jim from "../assets/Jim"
import LowPolyRocket from "../assets/LowPolyRocket"
import Phone from "../assets/Phone"

export const characterState = atom({
   key: "characterState",
   default: { label: "Low Poly Rocket", model: <LowPolyRocket />, path: "/LowPolyRocket.glb" },
})

export const renderSettings = atom({
   key: "renderSettings",
   default: {
      contactShadow: {
         show: true,
         shadowBlur: 1.5,
         shadowOpacity: 0.5,
         shadowRes: 256,
         focalLength: 10,
      },
      scene: {
         intensity: 0.5,
         environment: "city",
      },
   },
})
