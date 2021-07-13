import React, { useState } from 'react'
import './signUp.styles.scss'
import FormInput from '../formInput/FormInput'
import CustomBtn from '../customBtn/CustomBtn'
import { emailSignUpStart } from '../../redux/user/user.actions'
import { connect } from 'react-redux'

function SignUp({emailSignUpStart}) {

    const [signUpInfo, setSignUpInfo] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleSubmit = async(event) => {
        event.preventDefault()
        const { displayName, email, password, confirmPassword } = signUpInfo
        if(password !== confirmPassword) {
            alert('passwords dont match')
            return;
        }
        emailSignUpStart({displayName, email, password})

    }

    const handleChange = (event) => {
        setSignUpInfo({
            ...signUpInfo,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sing up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={signUpInfo.displayName}
                    label='Display Name'
                    required
                    onChange={handleChange}
                />
                <FormInput
                    type='email'
                    name='email'
                    value={signUpInfo.email}
                    label='Email'
                    required
                    onChange={handleChange}
                />
                <FormInput
                    type='password'
                    name='password'
                    value={signUpInfo.password}
                    label='Password'
                    required
                    onChange={handleChange}
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={signUpInfo.confirmPassword}
                    label='Confirm Password'
                    required
                    onChange={handleChange}
                />
                <CustomBtn type='submit'>SIGN UP</CustomBtn>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    emailSignUpStart: (user) => dispatch(emailSignUpStart(user))
})

export default connect(null, mapDispatchToProps)(SignUp)