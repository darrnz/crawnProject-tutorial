import React, { useState } from 'react'
import './directory.styless.scss'
import { sections } from '../../interfaces/interfaces'
import MenuItem from '../menu-item/Menu-item'


export default function Directory() {

    const [section, setSection] = useState(sections)
    console.log(section)

    return (
        <div className='directory-menu'>
            {
                section.map((elem) => {
                    return(
                        <>
                            <MenuItem key={elem.id} title={elem.title} imgUrl={elem.imageUrl} />
                        </>
                    )
                })
            }
        </div>
    )
}
