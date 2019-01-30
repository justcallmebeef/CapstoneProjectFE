import React from 'react' 
import Stopwatch from './Stopwatch'
// import NewClimb from './NewClimbForm'
import asendBlack from '../assets/small-asend-black.png'
import NewClimbForm from './NewClimbForm';

const NewClimb = (props) => {
    return (
        <div className="newClimbContainer">
            <div className="logoContainerNewClimb">
                <img className="logoImage" src={asendBlack} alt="logo" />
            </div>
            <NewClimbForm />
            <Stopwatch handleStart={props.handleStart} handleStop={props.handleStop} getSeconds={props.getSeconds} getMinutes={props.getMinutes} handleReset={props.handleReset}/>
            <button className="welcomeButton">Save Climb</button>
        </div>
    )
}

export default NewClimb