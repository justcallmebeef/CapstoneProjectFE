import React, { Component } from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2'
import asendBlack from '../assets/small-asend-black.png'
import { Link } from 'react-router-dom'

class ClimbingStats extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chartData: props.chartData
        }
    }

    static defaultProps = {
        displayTitle: true, 
        displayLegend: false, 
        legendPosition: 'right', 
        location: 'Year'
    }

    render() {
        return (
            <div className="chartContainer">
            <div className="logoContainer">
                <img className="logoImage" src={asendBlack} alt="logo" />
            </div>
                <Line
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: this.props.displayTitle, 
                            text: 'Climbs over the last 6 months', 
                            fontSize: 25, 
                            fontColor: 'black'
                        }, 
                        legend: {
                            display: this.props.displayLegend, 
                            position: 'right', 
                            fontColor: 'black'
                        }, 
                        scales: {
                            yAxes:[{
                                gridLines: {
                                    color: 'black', 
                                }, 
                                ticks: {
                                    fontColor: 'black',
                                    fontSize: 15
                                }
                            }], 
                            xAxes: [{
                                gridLines: {
                                    color: 'black', 
                                }, 
                                ticks: {
                                    fontColor: 'black',
                                    fontSize: 15
                                }
                            }],
                        }
                    }}
                />
                <div className="welcomeButtonsContainer">
                <Link to='newClimb'><button className="welcomeButton">Start a new climb!</button></Link>
                </div>
            </div>
        )
    }
}

export default ClimbingStats
 