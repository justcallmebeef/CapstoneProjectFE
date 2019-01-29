import React from 'react' 
import Stopwatch from './Stopwatch'

const NewClimb = (props) => {
    return (
        <div className="newClimbContainer">
            <Stopwatch handleStart={props.handleStart} handleStop={props.handleStop} getSeconds={props.getSeconds} getMinutes={props.getMinutes}/>
        </div>
    )
}

export default NewClimb