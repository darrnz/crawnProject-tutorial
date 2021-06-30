import React, {useState} from 'react'
import { SHOP_DATA } from '../../interfaces/shoppingData'
import PreviewCollection from '../previewCollection/PreviewCollection'

export default function Shop() {

    const [articles, setArticles] = useState(SHOP_DATA)

    return (
        <div className='shop-page'>
            {
                articles &&
                    articles.map(collection => {
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
