import React from 'react'
import asendWhite from '../small-asend-white.png'

const SignUp = () => {
    return (
        <div className="signupContainer">
            <div className="logoContainer">
                <img className="logoImage" src={asendWhite} alt="logo" />
            </div>
            <form>
                <h3 className="welcomeSignUp">Welcome to the ASEND Community!</h3>
                <div class="input-container">
                    <i id="nameIcon" class="fa fa-user icon"></i>
                    <input class="input-field" type="text" placeholder="First Name" name="first_name"></input>
                </div>

                <div class="input-container">
                    <i class="fa fa-user icon"></i>
                    <input class="input-field" type="text" placeholder="Last Name" name="last_name"></input>
                </div>

                <div class="input-container">
                    <i class="fa fa-envelope icon"></i>
                    <input class="input-field" type="text" placeholder="Email" name="email"></input>
                </div>
                
                <div class="input-container">
                    <i class="fa fa-key icon"></i>
                    <input class="input-field" type="password" placeholder="Password" name="password"></input>
                </div>

                <button type="submit" class="btn">Ready to ASEND it!</button>
            </form>
        </div>
    )
}

export default SignUp