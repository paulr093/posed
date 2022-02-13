import { getDownloadURL, ref } from "firebase/storage"
import { storage } from "../firebase/initApp"

export default async function getPaths() {
    const urls = {
        lowPolyRocket: await getDownloadURL(ref(storage, "LowPolyRocket.glb")),
        phone: await getDownloadURL(ref(storage, "Phone.glb")),
    }

    return urls
}