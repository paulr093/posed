import React, { useState } from "react"
import { CreateUser, setUserBaseData } from "../../../firebase/initApp"
import { authData } from "../../../zustand/states"
import Spinner from "../Spinner"

function CreateAccount() {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [passwordAgain, setPasswordAgain] = useState("")
   const setLoading = authData((state) => state.setLoading)
   const loading = authData((state) => state.loading)

   return (
      <>
         <div>
            <h1>Email</h1>
            <input
               value={email}
               type='email'
               onChange={(event) => setEmail(event.target.value)}
               placeholder='Email'
               className='rounded-md p-1 w-56 outline-none focus:ring-2 dark:bg-neutral-700 focus:ring-blue-500 hover:ring-blue-500 hover:ring-2 duration-150'
            />
         </div>

         <div>
            <h1>Password</h1>
            <input
               value={password}
               type='password'
               onChange={(event) => setPassword(event.target.value)}
               placeholder='Password'
               className='rounded-md p-1 w-56 outline-none focus:ring-2 dark:bg-neutral-700 focus:ring-blue-500 hover:ring-blue-500 hover:ring-2 duration-150'
            />
         </div>

         <div>
            <h1>Password Again</h1>
            <input
               value={passwordAgain}
               type='password'
               onChange={(event) => setPasswordAgain(event.target.value)}
               placeholder='Password Again'
               className='rounded-md p-1 w-56 outline-none focus:ring-2 dark:bg-neutral-700 focus:ring-blue-500 hover:ring-blue-500 hover:ring-2 duration-150'
            />
         </div>

         <button
            onClick={() => {
               if (password === passwordAgain) {
                  CreateUser(email, password)
                     .then(() => {
                        setLoading(true)
                        setUserBaseData(email)
                     })
                     .then(() => {
                        setEmail("")
                        setPassword("")
                        setPasswordAgain("")
                        setLoading(false)
                     })
               }
            }}
            className='bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-medium rounded-md p-1 w-3/4 flex items-center justify-center'
         >
            {loading ? <Spinner /> : "Create Account"}
         </button>
      </>
   )
}

export default CreateAccount
