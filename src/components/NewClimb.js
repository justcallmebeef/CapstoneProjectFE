import React from 'react' 
import Stopwatch from './Stopwatch'

const NewClimb = (props) => {
    return (
        <div className="newClimbContainer">
            <Stopwatch handleStart={props.handleStart} handleStop={props.handleStop} getSeconds={props.getSeconds} getMinutes={props.getMinutes} handleReset={props.handleReset}/>
        </div>
    )
}

export default NewClimb