import React from 'react'

const Stopwatch = (props) => {
    return (
        <div className="stopwatchContainer">
            <div>
                <h1>{props.getMinutes}:{props.getSeconds}</h1>
                <button type="button" onClick={props.handleStart}>Start</button>
                <button type="button" onClick={props.handleStop}>Stop</button>
            </div>
        </div>
    )
}

export default Stopwatch