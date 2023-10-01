import {useState} from 'react'
import AuthForm from './AuthForm'

function Auth() {
  const [authStatus, setAuthStatus] = useState("login")
  return (
    <div className='w-full h-screen flex flex-col items-center pt-[3.5rem] bg-[#2F2FA2]'>
        <h1 className='font-bold text-white sm:text-[3.5vw] text-[2vw]'>Welcome to TrackSelf!</h1>
        <div className='w-full flex items-center flex-col'>
          <AuthForm/>
        </div>
    </div>
  )
}

export default Auth
