import React from "react"

// Products from DB
import data from '../../../../db.json'

// styles
import './products.scss'

const BikesList = () => {
    return (
        <div className = 'product-list'>
            {data.products.map((bike, i) => (
                <div className = 'product-card' key = {bike.id}>
                    <div className = 'image'>
                        <img src = {require(`../../../../assets/products/product-${bike.id}.jpg`)} alt = {bike.title}/>
                        <div className = 'button-actions'>
                            <button>ADD TO CART</button>
                            <button>VIEW</button>
                        </div>
                    </div>
                    <div className = "content">
                        <div className = 'content-left'>
                            <h4>{bike.name}</h4>
                        </div>
                        <div className = 'content-right'>
                            <h4>{bike.price}</h4>
                            <h5>size: {bike.size}</h5>
                        </div>
                    </div>
                </div>   
            ))
            }
        </div>
    )
}

export default BikesList