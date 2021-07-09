import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import styled, { css } from 'styled-components'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from './cartIcon/CartIcon'
import CartDropdown from './cartIcon/CartDropdown'
import { selectCarHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selector'

function Header({currentUser, hidden}) {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <img src='/crown.svg' alt='logo' className='logo'/>
            </LogoContainer>
            <OptionsContainer >
                <OptionLink to='/shop'>
                    SHOP
                </OptionLink>
                <OptionLink to='/shop'>
                    CONTACT
                </OptionLink>
                {
                    currentUser ? 
                    <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
                    :
                    <OptionLink to='/signin'>
                        SIGN IN
                    </OptionLink>

                }
                <CartIcon />
            </OptionsContainer>
            {
                !hidden ? <CartDropdown /> : ''
            }
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCarHidden
})

export default connect(mapStateToProps)(Header);

const OptionContainerStyles = css`
    padding: 10px 15px;
    cursor: pointer;
`

const OptionLink = styled(Link)`
    ${OptionContainerStyles}
`;

const OptionDiv = styled.div`
    ${OptionContainerStyles}
`

const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`

const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`

const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;


