import React from 'react'

import PopularProducts from '../Content/Products/PopularProducts'
import NewsLetter from '../Content/NewsLetter/NewsLetter'
import ServicesList from '../Content/ServicesList/ServicesList'
import Sales from '../Content/Sales/Sales'

const Content = () => {
    return (
        <div>
            <PopularProducts/>
            <NewsLetter/>
            <ServicesList/>
            <Sales/>
        </div>
    )
}

export default Content 