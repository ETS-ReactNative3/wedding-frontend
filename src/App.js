// Router Dependencies
import React, { Component } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

//Pages
import Home from './Pages/Home'
import Where from './Pages/Where'
import Gifts from './Pages/Gifts'
import Guests from './Pages/Guests'
import Rsvp from './Pages/Rsvp'

//.env
require('dotenv').config()

class Routes extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/Home' component={Home} exact />
            <Route path='/Where' component={Where} exact />
            <Route path='/Gifts' component={Gifts} exact />
            <Route path='/Guests' component={Guests} exact />
            <Route path='/Rsvp' component={Rsvp} exact />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default Routes
