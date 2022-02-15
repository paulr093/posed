import React from "react"

function TransformSlider({ title, boneTransform, setTransform, min, max }) {
   return (
      <>
         <h3 className='opacity-50'>{title}</h3>
         <div className='px-3 space-y-2'>
            {Object.keys(boneTransform).map((key) => (
               <div key={key} className='flex flex-col'>
                  <h4 className='text-opacity-75 text-sm'>
                     {key}:<span className='opacity-50'>{" " + boneTransform[key]}</span>
                  </h4>
                  <input
                     type='range'
                     value={boneTransform[key]}
                     min={min ?? -5}
                     max={max ?? 5}
                     step={0.01}
                     onChange={(event) => {
                        setTransform({ ...boneTransform, [key]: event.target.value })
                     }}
                  />
               </div>
            ))}
         </div>
      </>
   )
}

export default TransformSlider
