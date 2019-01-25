import React from 'react'
import asendWhite from '../assets/small-asend-white.png'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="signupContainer">
            <div className="logoContainer">
                <img className="logoImage" src={asendWhite} alt="logo" />
            </div>
            <form>
            <h3 className="welcomeSignUp">Welcome to the ASEND Community!</h3>
                <div class="input-container">
                    <i class="fa fa-envelope icon"></i>
                    <input class="input-field" type="text" placeholder="Email" name="email"></input>
                </div>
                
                <div class="input-container">
                    <i class="fa fa-key icon"></i>
                    <input class="input-field" type="password" placeholder="Password" name="password"></input>
                </div>

                <Link to='/climbingStats'><button type="button" class="btn">ASEND it!</button></Link>
            </form>
        </div>
    )
}

export default Login 