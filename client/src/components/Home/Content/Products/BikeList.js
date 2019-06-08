import React from "react"

// Products from DB
import data from '../../../../db.json'

// styles
import './products.scss'

const BikesList = () => {
    console.log(data.products)
    return (
        <div className = 'product-list'>
            {data.products.map((bike, i) => (
                <div className = 'product-card' key = {bike.id}>
                    <img src = {require(`../../../../assets/products/product-${bike.id}.jpg`)} alt = {bike.title} style = {{marginTop: '10px'}}/>
                    <div className = "content">
                        <div className = 'content-left'>
                            <h4>{bike.name}</h4>
                        </div>
                        <div className = 'content-right' >
                            <p>{bike.price}</p>
                        </div>
                    </div>
                </div>   
            ))
            }
        </div>
    )
}

export default BikesList