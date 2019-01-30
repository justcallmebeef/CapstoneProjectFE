import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const NewClimbForm = () => {
    return (
        <Fragment>
        <div>
            <form>
                <div class="input-container">
                    <i className="fa fa-star icon"></i>
                    <input className="input-field" type="text" placeholder="Route Name" name="route_name"></input>
                </div>
                
                <div className="input-container">
                    <i className="fa fa-paper-plane-o icon"></i>
                    <select className="input-field" placeholder="Route Grade" name="route_grade">
                        <option selected disabled>Route Grade</option>
                        <option>Less than 5.6</option>
                        <option>5.6</option>
                        <option>5.7</option>
                        <option>5.8</option>
                        <option>5.9</option>
                        <option>5.10a</option>
                        <option>5.10b</option>
                        <option>5.10c</option>
                        <option>5.10d</option>
                        <option>5.11a</option>
                        <option>5.11b</option>
                        <option>5.11c</option>
                        <option>5.11d</option>
                        <option>5.12a</option>
                        <option>5.12b</option>
                        <option>5.12c</option>
                        <option>5.12d</option>
                        <option>5.13a</option>
                        <option>5.13b</option>
                        <option>5.13c</option>
                        <option>5.13d</option>
                        <option>5.14a</option>
                        <option>5.14b</option>
                        <option>5.14c</option>
                        <option>5.14d</option>
                        <option>5.15a</option>
                        <option>5.15b</option>
                        <option>5.15c</option>
                        <option>5.15d</option>
                    </select>
                </div>
                <Link to='/climbingStats'><button type="button" class="btn">ASEND it!</button></Link>
            </form>
        </div>
        </Fragment>
    )
}

export default NewClimbForm 