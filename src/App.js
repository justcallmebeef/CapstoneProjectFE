import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import './App.css'
import SignUp from './components/SignUp'
import Login from './components/Login'
import ClimbingStats from './components/ClimbingStats'

const climberAPI = 'https://capstone-climb-db.herokuapp.com/climbers'
const routesAPI = 'https://capstone-climb-db.herokuapp.com/routes'

class App extends Component {
  constructor() {
    super()
    this.state = {
      climbers: [], 
      routes: [], 
      chartData: {}
    }
  }

  getChartData() {
    // Ajax calls here 
    this.setState({
      chartData: {
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'], 
        datasets: [
          {
            label: 'Population', 
            data: [
              617594,
              181045, 
              153060,
              106519
            ], 
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)', 
            ]
          }
        ]
      }
    })
  }

  componentWillMount() {
    this.getChartData()
  }

  componentDidMount() {
    this.loadClimbers()
    this.loadRoutes() 
  }

  loadClimbers = () => {
    fetch(climberAPI)
    .then(climbers => climbers.json())
    .then(climbers => this.setState({ climbers }))
  }

  loadRoutes = () => {
    fetch(routesAPI)
    .then(routes => routes.json())
    .then(routes => this.setState({ routes }))
  }

  handleInput = (event) => {
    const { value, name } = event.target
    this.setState({
      [name]: value 
    })
  }

  createNewClimber = () => {
    let newClimberPost = {
      first_name: this.state.first_name, 
      last_name: this.state.last_name, 
      email: this.state.email, 
      password: this.state.password 
    }
    fetch(climberAPI, {
      method: "POST", 
      body: JSON.stringify(newClimberPost), 
      headers: {
        "Content-Type": "application/json", 
      }
    })
    .then(newClimber => newClimber.json())
    .then(this.loadClimbers)
  }

  render() {
    return (
      <Fragment>
        <Route path='/' exact component={Welcome} />
        <Route path='/signup' render={() => (<SignUp handleInput={this.handleInput} createNewClimber={this.createNewClimber} />)} />
        <Route path='/login' render={() => (<Login />)} />
        <Route path='/climbingStats' render={() => (<ClimbingStats chartData={this.state.chartData} location="New York" />)} />
      </Fragment>
    )
  }
}

export default App
