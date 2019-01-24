import React from 'react'
import { Link } from 'react-router-dom'
import asendWhite from '../assets/small-asend-white.png'

const SignUp = (props) => {
    return (
        <div className="signupContainer">
            <div className="logoContainer">
                <img className="logoImage" src={asendWhite} alt="logo" />
            </div>
            <form>
                <h3 className="welcomeSignUp">Welcome to the ASEND Community!</h3>
                <div class="input-container">
                    <i id="nameIcon" class="fa fa-user icon"></i>
                    <input class="input-field" type="text" placeholder="First Name" name="first_name" onChange={props.handleInput} required></input>
                </div>

                <div class="input-container">
                    <i class="fa fa-user icon"></i>
                    <input class="input-field" type="text" placeholder="Last Name" name="last_name" onChange={props.handleInput} required></input>
                </div>

                <div class="input-container">
                    <i class="fa fa-envelope icon"></i>
                    <input class="input-field" type="text" placeholder="Email" name="email" onChange={props.handleInput} required></input>
                </div>
                
                <div class="input-container">
                    <i class="fa fa-key icon"></i>
                    <input class="input-field" type="password" placeholder="Password" name="password" onChange={props.handleInput} required></input>
                </div>

                <Link to="/climbingStats"><button type="button" class="btn" onClick={props.createNewClimber}>Ready to ASEND it!</button></Link>
            </form>
        </div>
    )
}

export default SignUp