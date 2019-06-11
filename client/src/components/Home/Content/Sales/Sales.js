import React from 'react'

// styles
import './Sales.scss'

import data from '../../../../db.json'

const Sales = () => {
    const SalesProducts = data.sales
    console.log(SalesProducts)
    return (
        <div className = 'sales-container' id= 'sales'>
            <div className = 'exclusive-sale'>
                <div className = 'sales-header'> 
                    <h1>Best Deal</h1>
                    <h3>Exclusive deals for you</h3>
                </div>
                <div className = 'image-container'>
                    <img src = {require('../../../../assets/sales/product-4.jpg')} alt = 'Pinerello Dogma'/>
                    <div className = 'sales-content'>
                        <h2>Dogma F8 Xlight Dura-Ace Di2</h2>
                        <div className = 'content-left'>
                            <h3 >$15,000</h3>
                        </div>
                        <div className = 'content-right'>
                            <h3 className = 'sales-price'>$12,500</h3> 
                        </div>      
                    </div>
                    <button> Shop Now!</button>
                </div>
            </div>
            <div className = 'sales-items'> 
                <div className = 'sales-header'> 
                    <h1>Items On Sale</h1>
                    <h3>All featured product find here</h3>
                </div>
                <div className = 'sales-items-list'>
                {SalesProducts.map((prod, i) => (
                    <div className = 'product-card' key = {prod.id} id = {`prod-${prod.id}`}>
                        <div className = 'image'>
                            <img src = {require(`../../../../assets/sales/product-${prod.id}.jpg`)} alt = {prod.title}/>
                        </div>
                        <div className = "content">
                            <div className = 'content-left'>
                                <h2>{prod.name}</h2>
                            </div>
                            <div className = 'content-right'>
                                <h3>{prod.sale}</h3>
                            </div>
                        </div>
                    </div>  
                ))
                }
                </div>
            </div>
        </div>
    )
}


export default Sales