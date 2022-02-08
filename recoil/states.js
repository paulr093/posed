import { atom } from "recoil"
import CubeMan from "../assets/CubeMan"
import Jim from "../assets/Jim"
import LowPolyRocket from "../assets/LowPolyRocket"

export const characterState = atom({
   key: "characterState",
   default: { label: "Low Poly Rocket", model: <LowPolyRocket />, path: "/LowPolyRocket.glb" },
})

export const characterSettings = atom({
   key: "characterSettings",
   default: null,
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
   },
})
