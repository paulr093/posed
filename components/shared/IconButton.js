import React from "react"

function IconButton({ text, active, onClick }) {
   return (
      <button
         onClick={onClick}
         className={`min-h-10 min-w-10 p-2 rounded-md ease-in-out duration-150 hover:bg-blue-500 hover:text-white ${
            active && "bg-blue-500 text-white drop-shadow-md"
         }`}
      >
         {text}
      </button>
   )
}

export default IconButton
