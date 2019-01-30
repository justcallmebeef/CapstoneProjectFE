import React from 'react'

const Stopwatch = (props) => {
    return (
        <div className="stopwatchContainer">
            <div className="stopwatchCircle">
                <div className="timeContainer">
                    <h1 className="timerHeader">{props.getMinutes}:{props.getSeconds}</h1>
                </div>
                <div className="buttonContainer">
                    <button className="stopwatchButton" type="button" onClick={props.handleStart}>Start</button>
                    <button className="stopwatchButton" type="button" onClick={props.handleStop}>Stop</button>
                </div>
                <div className="resetButtonContainer">
                    <button id="resetButton" className="stopwatchButton" type="button" onClick={props.handleReset}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default Stopwatch