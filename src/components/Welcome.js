import React from 'react' 
import asendWhite from '../small-asend-white.png'

const Welcome = () => {
    return (
        <div className="welcomeContainer">
            <div className="logoContainer">
                <img className="logoImage" src={asendWhite} alt="logo" />
            </div>
            <div className="welcomeButtonsContainer">
                <button className="welcomeButton">Log In</button>
                <button className="welcomeButton">Sign Up</button>
            </div>
        </div>
    )
}

export default Welcome 