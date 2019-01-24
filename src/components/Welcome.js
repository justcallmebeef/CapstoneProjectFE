import React from 'react' 
import { Link } from 'react-router-dom'
import asendWhite from '../small-asend-white.png'

const Welcome = () => {
    return (
        <div className="welcomeContainer">
            <div className="logoContainer">
                <img className="logoImage" src={asendWhite} alt="logo" />
            </div>
            <div className="welcomeButtonsContainer">
                <Link to={'/login'}><button className="welcomeButton">Log In</button></Link>
                <Link to={'/signup'}><button className="welcomeButton">Sign Up</button></Link>
            </div>
        </div>
    )
}

export default Welcome 