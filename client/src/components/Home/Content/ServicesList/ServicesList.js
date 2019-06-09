import React from 'react'

// styling
import './ServicesList.scss'

const ServicesList = () => {
    return (
    <div className = 'image-list'>
        <div className = 'image'>
            <img src= {require('../../../../assets/cover/TrainWithUs.jpg')} alt= "Traing With Us" /> 
            <div className = 'button-actions'>
                <button>Group Training</button>
            </div>
        </div>
        <div className = 'image'>
            <img src= {require('../../../../assets/cover/Servicing.jpg')} alt= "Servicing"/> 
            <div className = 'button-actions'>
                <button>Bike Servicing</button>
             </div>
        </div>
        <div className = 'image'>
            <img src= {require('../../../../assets/cover/Blog.jpg')} alt= "Blog"/> 
            <div className = 'button-actions'>
                <button>Blog</button>
            </div>
        </div>
    </div>
    )
}

export default ServicesList