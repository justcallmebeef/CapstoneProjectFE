import React from 'react' 
import Stopwatch from './Stopwatch'

const NewClimb = (props) => {
    return (
        <Stopwatch handleStart={props.handleStart} handleStop={props.handleStop} getSeconds={props.getSeconds} getMinutes={props.getMinutes}/>
    )
}

export default NewClimb