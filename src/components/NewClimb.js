import React from 'react' 
import Stopwatch from './Stopwatch'
// import NewClimb from './NewClimbForm'
import asendBlack from '../assets/small-asend-black.png'
import NewClimbForm from './NewClimbForm';

const NewClimb = (props) => {
    return (
        <div className="newClimbContainer">
            <div className="logoContainer">
                <img className="logoImage" src={asendBlack} alt="logo" />
            </div>
            <NewClimbForm />
            <Stopwatch handleStart={props.handleStart} handleStop={props.handleStop} getSeconds={props.getSeconds} getMinutes={props.getMinutes} handleReset={props.handleReset}/>
        </div>
    )
}

export default NewClimb