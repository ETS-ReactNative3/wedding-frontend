import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import logo from '../Assets/logo.png'

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <Link to='/Home'>
          <img src={logo} className="wedding-logo" alt="logo" />
        </Link>
        <h1 className="App-title"></h1>
        <div className="header-menu">
          <Link className='header-link' to='/Home'>
            Wat
          </Link>
          <Link className='header-link' to='/Where'>
            Waar
          </Link>
          <Link className='header-link' to='/Gifts'>
            Gifts
          </Link>
          <Link className='header-link' to='/RSVP'>
            Kan je erbij zijn?
          </Link>
        </div>
      </header>
    )
  }
}

export default withRouter(Header)