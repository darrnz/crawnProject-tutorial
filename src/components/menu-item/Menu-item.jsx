import React from 'react'
import './menu-items.styles.scss'
import { withRouter } from 'react-router'

function MenuItem(props) {

    const { title, imgUrl, size, linkUrl, history, match } = props 

    return (
            <div className={`menu-item ${size}`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
                <div 
                    style={{backgroundImage: `url(${imgUrl})`}}
                    className='background-image'/>
                <div className='content'>
                    <h1 className='title'>{title.toUpperCase()}</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
    )
}

export default withRouter(MenuItem)
