import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import React, { useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import Spinner from "../Spinner"

function Login() {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const auth = getAuth()
   const [user, loading, error] = useAuthState(auth)

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
               signInWithEmailAndPassword(auth, email, password).then(() => {
                  setEmail("")
                  setPassword("")
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
