import React, { Component } from 'react'

// react router 
import {Link} from 'react-router-dom'

// styling 
import './Dropdown.scss'

class Dropdown extends Component {
    constructor(props) {
        super() 
        this.container = React.createRef();
        this.state = {
            isOpen: false
        }
    }

    toggleMenu = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    handleHoverOutside = e => {
        if (this.container.current && !this.container.current.contains(e.target)) {
          this.setState({
            isOpen: false,
          });
        }
    };

    componentDidMount() {
      document.addEventListener("mouseover", this.handleHoverOutside);
    }
    componentWillUnmount() {
      document.removeEventListener("mouseover", this.handleHoverOutside);
    }

    render() {
        return (
            <div className="container" ref = {this.container}>
                <button type="button" className="button" onMouseOver={this.toggleMenu}>
                    ☰
                </button>
                {this.state.isOpen && (
                    <div className="dropdown">
                        <ul>
                            <Link to = '/bikes'><li>Bikes</li></Link>
                            <Link to = '/about'><li>About</li></Link>
                            <Link to = '/contact'><li>Contact</li></Link>
                        </ul>
                    </div>
                )}
            </div>
        )
    }
}

export default Dropdown