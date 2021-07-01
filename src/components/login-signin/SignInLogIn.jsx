import React from 'react'
import SignIn from './SignIn'
import './signinLogin.styles.scss'
import SignUp from './SignUp'

export default function SignInLogIn() {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}
