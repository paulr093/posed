import { Html } from "@react-three/drei"
import CryptoCoin from "../assets/CryptoCoin"
import LowPolyRocket from "../assets/LowPolyRocket"
import LowPolyRocketNoSmoke from "../assets/LowPolyRocketNoSmoke"
import LowPolySpaceman from "../assets/LowPolySpaceman"
import M1Pro14 from "../assets/M1Pro14"
import Phone from "../assets/Phone"
import SodaCan from "../assets/SodaCan"

export default function setModel(label) {
    switch (label) {
       case "Low Poly Rocket No Smoke":
          return <LowPolyRocketNoSmoke />
       case "Low Poly Rocket":
          return <LowPolyRocket />
       case "Phone":
          return <Phone />
       case "Coin":
          return <CryptoCoin />
       case "Soda Can":
          return <SodaCan />
       case "Low Poly Spaceman":
          return <LowPolySpaceman />
       case "Macbook":
          return <M1Pro14 />
       default:
          return (
             <Html>
                <h1>Error retrieving model</h1>
             </Html>
          )
    }
 }