import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import './App.css'
import SignUp from './components/SignUp'
import Login from './components/Login'

const climberAPI = 'https://capstone-climb-db.herokuapp.com/climbers'
const routesAPI = 'https://capstone-climb-db.herokuapp.com/routes'

class App extends Component {
  constructor() {
    super()
    this.state = {
      climbers: [], 
      routes: []
    }
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

  render() {
    return (
      <Fragment>
        <Route path='/' exact component={Welcome} />
        <Route path='/signup' render={() => (<SignUp />)} />
        <Route path='/login' render={() => (<Login />)} />
      </Fragment>
    )
  }
}

export default App
