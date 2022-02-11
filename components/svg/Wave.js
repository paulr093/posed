import React from "react"

function Wave(props) {
   return (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 300' {...props}>
         <path
            fill='#3b82f6'
            fillOpacity='1'
            d='M0,224L80,192C160,160,320,96,480,90.7C640,85,800,139,960,154.7C1120,171,1280,149,1360,138.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'
         ></path>
      </svg>
   )
}

export default Wave
