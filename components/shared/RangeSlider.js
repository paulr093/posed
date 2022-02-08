import { useGLTF } from "@react-three/drei"
import React, { useState } from "react"
import { Range } from "react-range"

function RangeSlider({ min, max, initialVal, node }) {
   const [value, setValue] = useState(initialVal)
      const { nodes } = useGLTF("/Jim.glb")

   return (
      //   <Range
      //      step={0.1}
      //      min={min ?? 0}
      //      max={max ?? 100}
      //      values={[initialVal] ?? value.values}
      //      onChange={(val) => setValue({ values: val })}
      //      renderTrack={({ props, children }) => (
      //         <div
      //            {...props}
      //            style={{
      //               ...props.style,
      //               height: "6px",
      //               width: "100%",
      //               backgroundColor: "#ccc",
      //               borderRadius: "5px",
      //            }}
      //         >
      //            {children}
      //         </div>
      //      )}
      //      renderThumb={({ props }) => <div {...props} className='rounded-lg h-6 w-6 bg-blue-500' />}
      //   />
      <input
         type='range'
         step={0.01}
         min={min}
         max={max}
         value={value}
         onChange={(e) => (nodes.body.rotation.x = e.target.value)}
         className=''
      />
   )
}

export default RangeSlider
