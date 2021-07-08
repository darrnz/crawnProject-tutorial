import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../../../redux/shop/shop.selector'
import PreviewCollection from '../../previewCollection/PreviewCollection'
import './collectionsOverview.styles.scss'

function CollectionsOverview({ collections }) {
    return (
        <div className='collections-overview'>
            {
                collections &&
                collections.map(collection => {
                        return(
                            <PreviewCollection 
                                key={collection.id} 
                                title={collection.title} 
                                routeName={collection.routeName}
                                items={collection.items}
                        />
                        )

                    })
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
