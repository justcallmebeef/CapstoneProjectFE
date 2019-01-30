import React from 'react'
import { Link } from 'react-router-dom'

const NewClimbForm = () => {
    return (
        <div>
            <form>
                <div class="input-container">
                    <i class="fa fa-star icon"></i>
                    <input class="input-field" type="text" placeholder="Route Name" name="route_name"></input>
                </div>
                
                <div class="input-container">
                    <i class="fa fa-paper-plane-o icon"></i>
                    <select class="input-field" type="text" placeholder="Route Grade" name="route_grate">
                        <option>Test</option>
                        <option>Test2</option>
                    </select>
                </div>
                <Link to='/climbingStats'><button type="button" class="btn">ASEND it!</button></Link>
            </form>
        </div>
    )
}

export default NewClimbForm 