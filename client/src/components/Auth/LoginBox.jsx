import React from 'react';
import InputField from './InputField';

function LoginBox(props) {
    return (
        <div className='w-full bg-slate flex justify-center'>
            <InputField placeholder="Introduce your email" id="email"/>            
        </div>
    );
}

export default LoginBox;