import React, { useState } from 'react'
import './directory.styless.scss'
import MenuItem from '../menu-item/Menu-item'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory.selector'


function Directory({ sections }) {

    return (
        <div className='directory-menu'>
            {
                sections.map((elem) => {
                    return(
                        <>
                            <MenuItem key={elem.id} title={elem.title} imgUrl={elem.imageUrl} linkUrl={elem.linkUrl} />
                        </>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)