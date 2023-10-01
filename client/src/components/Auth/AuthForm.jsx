import React, { useState } from 'react';
import LoginBox from './LoginBox';
import RegisterBox from "./RegisterBox"

function AuthForm() {
    const [authStatus, setAuthStatus] = useState("login");

    return (
    <div className='w-[50%] border-[2px] bg-indigo-500'>
        <form>
            <h2>{authStatus === "login" ? "Log In" : "Create an Account"}</h2>
            {authStatus === "login" ? <LoginBox/> : <RegisterBox/>}
        </form>
    </div>
);
}

export default AuthForm;