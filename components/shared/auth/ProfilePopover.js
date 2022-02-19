import axios from "axios"
import { getAuth, signOut } from "firebase/auth"
import { doc } from "firebase/firestore"
import { useRouter } from "next/router"
import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useDocumentData } from "react-firebase-hooks/firestore"
import { db } from "../../../firebase/initApp"
import Spinner from "../Spinner"

function ProfilePopover() {
   const router = useRouter()
   const auth = getAuth()
   const [user, loadingUser] = useAuthState(auth)
   const [docData, loadingDoc, errorDoc] = useDocumentData(doc(db, "users", user.uid))

   const purchasePremiumClick = async () => {
      if (!loadingUser) {
         await axios
            .post("/api/stripe/payment", { userId: user.uid })
            .then((res) => {
               router.push(res.data)
            })
      } else {
         console.log("Must be signed in first!")
      }
   }

   const manageSubscriptionClick = async () => {
      if (!loadingDoc) {
         await axios.post("/api/stripe/billingPortal", { stripeId: docData.stripeId }).then((res) => {
            router.push(res.data)
            // console.log(res.data)
         })
      } else {
         console.log("must be signed in")
      }
   }

   if (loadingUser) {
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
               Account status: <span className='font-medium'>{docData?.premium ? "Premium" : "Free"}</span>
            </h2>
            {/* React Stripe */}
            {!docData?.premium ? (
               <button className='text-blue-500' onClick={purchasePremiumClick}>
                  Purchase Premium
               </button>
            ) : (
               <button className='text-blue-500' onClick={manageSubscriptionClick}>
                  Manage Subscription
               </button>
            )}
         </div>

         <button
            onClick={() => {
               signOut(auth)
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
