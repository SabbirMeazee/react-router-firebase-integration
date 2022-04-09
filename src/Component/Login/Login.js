import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const { userHandleButton } = useFirebase()
    return (
        <div>
            <h3>Please login</h3>
            <div style={{ margin: '20px' }}>
                <input onClick={userHandleButton} type="submit" value="GoogleSign In" />
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