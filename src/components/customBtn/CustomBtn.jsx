import React from 'react'
import styled, { css } from 'styled-components'

export default function CustomBtn({ children, ...props}) {
    return (
        <CutomBtnContainer {...props}>
            {children}
        </CutomBtnContainer>
    )
}

/* export default function CustomBtn({ children, isGoogleSignIn, inverted, ...otherProps}) {
    return (
        <CutomBtnContainer className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {children}
        </CutomBtnContainer>
    )
} */

const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`

const invertedBtnStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`

const googleSignInStyles = css`
        background-color: #4285f4;
        color: white;
        &:hover {
        background-color: #357ae8;
        border: none;
        }
`

const getButtonStyles = (props) => {
    if(props.isGoogleSignIn){
        return googleSignInStyles
    }

    return props.inverted ? invertedBtnStyles : buttonStyles
}


const CutomBtnContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 12px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;

    ${getButtonStyles}
`