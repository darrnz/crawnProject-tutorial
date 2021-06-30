import React, { useState } from 'react'
import './signIn.styles.scss'
import FormInput from '../formInput/FormInput'
import CustomBtn from '../customBtn/CustomBtn'
import { signWithGoogle } from '../../firebase/firebase.utils'

export default function SignIn() {

    const [signInInfo, setSignInInfo] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        setSignInInfo({
            email: '',
            password: ''
        })
    }

    const handleChange = (event) => {
        setSignInInfo({
            ...signInInfo,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    type='email' 
                    name='email' 
                    value={signInInfo.email} 
                    required
                    handleChange={handleChange}
                    label='Email' />
                <FormInput 
                    type='password' 
                    name='password' 
                    value={signInInfo.password} 
                    required 
                    handleChange={handleChange}
                    label='Password'/>
                <div className='buttons'>
                    <CustomBtn type='submit'>Sign In</CustomBtn>
                    <CustomBtn onClick={signWithGoogle} isGoogleSignIn >Sign In With Google</CustomBtn>
                </div>
            </form>
        </div>
    )
}
