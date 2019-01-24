import React, { Component } from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2';

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
                <Line
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: this.props.displayTitle, 
                            text: 'Climbs over the last 6th months', 
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
                <button className="btn">Start a new climb!</button>
            </div>
        )
    }
}

export default ClimbingStats
 