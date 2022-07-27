import React from 'react'
import { Link } from 'react-router-dom'


const navBar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="max-width">
                    <div className="logo">
                        <span className="darkgrey">G.L.A.</span>

                    </div>
                    <ul className="menu">
                        <Link to="/home"> <li><a href="HomePage">Home</a></li></Link>
                        <Link to="/products"> <li><a href="Products">Products</a></li></Link>
                        <Link to="/contact"><li><a href="Contact">Contact</a></li></Link>

                    </ul>
                </div>

            </nav>

        </div>
    )
}
export default navBar;
