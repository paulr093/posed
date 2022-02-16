import { collection, query, where } from "firebase/firestore"
import React from "react"
import { useCollectionDataOnce } from "react-firebase-hooks/firestore"
import { auth, db, SignOut } from "../../../firebase/initApp"
import { authData } from "../../../zustand/states"
import Spinner from "../Spinner"

function ProfilePopover() {
   const setLoading = authData((state) => state.setLoading)
   const user = auth.currentUser
   const [snapshot, loading, error] = useCollectionDataOnce(
      query(collection(db, "users"), where("email", "==", user.email))
   )

   if (loading) {
      return (
         <div className='w-52 h-48 flex justify-center items-center'>
            <Spinner />
         </div>
      )
   }

   return (
      <div className='w-52 h-48 flex flex-col space-y-3 items-center'>
         <h1 className='font-medium text-base'>
            Hi, <span className='font-semibold'>{user.email}</span>!
         </h1>

         <div className='flex flex-col justify-evenly h-full item-center py-2'>
            <h2>
               Account status: <span className='font-medium'>{snapshot[0]?.premium ? "Premium" : "Free"}</span>
            </h2>
            {/* React Stripe */}
            {/* <button className='text-blue-500'>Purchase Premium</button> */}
         </div>

         <button
            onClick={() => {
               SignOut()
                  .then(() => setLoading(true))
                  .then(() => setLoading(false))
            }}
            className='bg-red-500 text-white font-medium rounded-md p-1 w-3/4'
         >
            Sign Out
         </button>
      </div>
   )
}

export default ProfilePopover
