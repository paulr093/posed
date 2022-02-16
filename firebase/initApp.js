import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import {
   createUserWithEmailAndPassword,
   getAuth,
   signInWithEmailAndPassword,
   signOut,
} from "firebase/auth"
import { getFirestore, collection, addDoc } from "firebase/firestore"

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

const analytics = getAnalytics(app)

// Auth
const auth = getAuth()

// Sign In Existing
export async function SignInExisting(email, password) {
   await signInWithEmailAndPassword(auth, email, password)
}

export async function CreateUser(email, password) {
   await createUserWithEmailAndPassword(auth, email, password)
}

export async function SignOut() {
   await signOut(auth)
}

export { analytics, auth }

// firestore
export const db = getFirestore()

export async function setUserBaseData(email) {
   await addDoc(collection(db, "users"), { email: email, premium: false })
}
