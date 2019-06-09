import React from 'react'

// components
import BikeList from "./BikeList"

// styling 
import './products.scss'

const PopularProducts = () => {
    return (
        <div className = 'product-section'>
            <div className = 'product-header' id = "bikes">
                <h1 >Popular products</h1>
                <h3>All of our most popular bikes found below</h3>
            </div>
            <BikeList/>
        </div>
    )
}

export default PopularProducts