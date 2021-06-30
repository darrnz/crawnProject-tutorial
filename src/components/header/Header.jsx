import React from 'react'
import { Link } from 'react-router-dom'
import './header.styles.scss'
import { auth } from '../../firebase/firebase.utils'

export default function Header({userAuth}) {
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <img src='/crown.svg' alt='logo' className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
                {
                    userAuth ? 
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>
                        SIGN IN
                    </Link>

                }

            </div>
        </div>
    )
}
