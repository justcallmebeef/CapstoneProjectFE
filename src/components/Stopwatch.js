import React from 'react'

const Stopwatch = (props) => {
    return (
        <div className="stopwatchContainer">
            <div>
                <div className="timeContainer">
                    <h1>{props.getMinutes}:{props.getSeconds}</h1>
                </div>
                <div>
                    <button type="button" onClick={props.handleStart}>Start</button>
                    <button type="button" onClick={props.handleStop}>Stop</button>
                </div>
                <div className="resetButtonContainer">
                    <button id="resetButton" type="button" onClick={props.handleReset}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default Stopwatch