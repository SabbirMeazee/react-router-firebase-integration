import { useState } from "react"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase.init";

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const useFirebase = () => {
    const [user, setUser] = useState({})
    const userHandleButton = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user
                setUser(user)
                console.log(user)
            })
    }

    return {
        user, userHandleButton
    }
}
export default useFirebase