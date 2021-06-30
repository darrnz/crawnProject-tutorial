import React from 'react'
import './customBtn.styles.scss'

export default function CustomBtn({ children, isGoogleSignIn, ...otherProps}) {
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}
