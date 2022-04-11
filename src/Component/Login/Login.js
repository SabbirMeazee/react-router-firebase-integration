import { getAuth } from 'firebase/auth';
import React from 'react';
import app from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import useFirebase from '../../Hooks/useFirebase';
import { useLocation, useNavigate } from 'react-router-dom';
const auth = getAuth(app)

const Login = () => {
    // const { userHandleButton } = useFirebase()
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation()
    const navigate = useNavigate()
    return (
        <div>
            <h3>Please login</h3>
            <div style={{ margin: '20px' }}>
                <input onClick={() => signInWithGoogle()} type="submit" value="GoogleSign In" />
            </div>
            <form>

                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" placeholder='Enter your password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;