import React from 'react'
import './customBtn.styles.scss'

export default function CustomBtn({ children, isGoogleSignIn, inverted, ...otherProps}) {
    return (
        <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}
