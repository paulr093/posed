import React, { useState } from "react"
import { SignInExisting } from "../../../firebase/initApp"
import { authData } from "../../../zustand/states"
import Spinner from "../Spinner"

function Login() {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const setLoading = authData((state) => state.setLoading)
   const loading = authData((state) => state.loading)

   return (
      <>
         <div>
            <h1>Email</h1>
            <input
               type='email'
               value={email}
               onChange={(event) => setEmail(event.target.value)}
               placeholder='Email'
               className='rounded-md p-1 w-56 outline-none focus:ring-2 dark:bg-neutral-700 focus:ring-blue-500 hover:ring-blue-500 hover:ring-2 duration-150'
            />
         </div>

         <div>
            <h1>Password</h1>
            <input
               type='password'
               value={password}
               onChange={(event) => setPassword(event.target.value)}
               placeholder='Password'
               className='rounded-md p-1 w-56 outline-none focus:ring-2 dark:bg-neutral-700 focus:ring-blue-500 hover:ring-blue-500 hover:ring-2 duration-150'
            />
         </div>
         <button
            onClick={() => {
               SignInExisting(email, password)
                  .then(() => setLoading(true))
                  .then(() => {
                     setEmail("")
                     setPassword("")
                     setLoading(false)
                  })
            }}
            className='bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-medium rounded-md p-1 w-3/4 items-center flex justify-center'
         >
            {loading ? <Spinner /> : "Sign In"}
         </button>
      </>
   )
}

export default Login
