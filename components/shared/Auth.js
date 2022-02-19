import React, { useEffect, useState } from "react"
import Login from "./auth/Login"
import CreateAccount from "./auth/CreateAccount"
import ProfilePopover from "./auth/ProfilePopover"
import { useAuthState } from "react-firebase-hooks/auth"
import { getAuth } from "firebase/auth"
import Spinner from "./Spinner"

function Auth() {
   const auth = getAuth()
   const [isLogin, setIsLogin] = useState(true)
   const [isCreateAccount, setIsCreateAccount] = useState(false)
   const [user, loading, error] = useAuthState(auth)

   useEffect(() => {
      if (user) {
         setIsLogin(false)
         setIsCreateAccount(false)
      } else {
         setIsLogin(true)
      }
   }, [user])

   if (user) {
      return <ProfilePopover />
   }

   if (loading) {
      return (
         <div className='w-52 h-48 flex flex-col space-y-3 items-center justify-center'>
            <Spinner />
         </div>
      )
   }

   return (
      <div className='min-w-52 min-h-48 flex flex-col space-y-3 items-center'>
         {isLogin && <Login />}
         {isCreateAccount && <CreateAccount />}
         <button
            className='text-blue-500 p-1 text-xs hover:bg-neutral-300 dark:hover:bg-neutral-700 rounded-md duration-150'
            onClick={() => {
               if (isLogin) {
                  setIsLogin(false)
                  setIsCreateAccount(true)
               } else {
                  setIsLogin(true)
                  setIsCreateAccount(false)
               }
            }}
         >
            {isLogin && "New user? Create Account"}
            {isCreateAccount && "Have an account? Log In"}
         </button>
      </div>
   )
}

export default Auth
