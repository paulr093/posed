import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore"

const firebaseConfig = {
   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
   measurementId: process.env.NEXT_PUBLIC_MEASUREMENT,
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)

const analytics = typeof window !== "undefined" && getAnalytics(app)

// Sign In Existing
export async function SignInExisting(email, password) {
   await signInWithEmailAndPassword(auth, email, password)
}

export async function CreateUser(email, password) {
   const auth = getAuth()
   await createUserWithEmailAndPassword(auth, email, password).then(async (creds) => {
      const user = creds.user
      await setUserBaseData(user.uid, user.email)
   })
}

export async function SignOut() {
   await signOut(auth)
}

export { analytics }

// firestore
export const db = getFirestore()

export async function setUserBaseData(id, email) {
   await setDoc(doc(db, "users", id), { email: email, premium: false })
}
