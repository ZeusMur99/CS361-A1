import React from "react";
import { Link } from "react-router-dom"
import { FcEnteringHeavenAlive } from 'react-icons/fc'

function Navigation() {
    return(
        <nav>
            <div class="header-logo">
                <Link className="logo-link" to="/"><FcEnteringHeavenAlive className="header-image" /></Link>
            </div>
            <div class="nav-bar">
                <ul>
                    <li><Link className="app-links" to="/">Home</Link></li>
                    <li><Link className="app-links" to="/chocolate">Chocolate</Link></li>
                    <li><Link className="app-links" to="/coffee">Coffee</Link></li>
                    <li><Link className="app-links" to="/signin">Sign In</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation