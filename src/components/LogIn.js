import React from 'react'
import asendWhite from '../small-asend-white.png'

const Login = () => {
    return (
        <div className="loginContainer">
            <div className="logoContainer">
                <img className="logoImage" src={asendWhite} alt="logo" />
            </div>
            <form>A form will go here.</form>
        </div>
    )
}

export default Login 