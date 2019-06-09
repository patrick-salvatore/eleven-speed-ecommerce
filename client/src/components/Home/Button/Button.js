import React from 'react'

// smooth-scroll
import { animateScroll as scroll } from "react-scroll";

const scrollToTop = () => {
    scroll.scrollToTop(); 
};

window.onscroll = () => {
    handleScroll()
}

const handleScroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('myBtn').style.display = 'block'
    } else {
        document.getElementById('myBtn').style.display = 'none'
    }
}


const Button = () => {
    return (
        <div>
            <button id = "myBtn" style = {styles.button} onClick = {() => scrollToTop()}> 
                <i className="fas fa-arrow-up" style = {styles.icon}></i>
            </button>
        </div>
    )
}

const styles = {
    button: {
        display: 'none',
        padding: '20px 25px',
        borderRadius: '50%',
        position: 'fixed',
        bottom: '20px', 
        right: '30px', 
        zIndex: '99', 
        border: 'none', 
        outline: 'none', 
        backgroundColor: 'green',  
        cursor: 'pointer' 
    },
    icon : {
        fontSize: '20px',
        color: 'white'
    }
}

export default Button