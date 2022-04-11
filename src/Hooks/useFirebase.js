import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
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
    const handleSignOut = () => {
        signOut(auth).then(() => {

        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [])
    return {
        user, userHandleButton, handleSignOut
    }
}
export default useFirebase