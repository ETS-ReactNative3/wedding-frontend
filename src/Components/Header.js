import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import logo from '../Assets/logo.png'

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <Link to='/Home'>
          <div className='logo-wrapper'><img src={logo} className="wedding-logo" alt="logo" /></div>
        </Link>
        <h1 className="App-title"></h1>
        <div className="header-menu">
          <Link className='header-link' to='/Home'>
            Jeroen & Eva
          </Link>
          <Link className='header-link' to='/Where'>
            Waar & Wanneer
          </Link>
          <Link className='header-link' to='/Gifts'>
            Cadeaus
          </Link>
          <Link className='header-link' to='/RSVP'>
            BEVESTIG HIER
          </Link>
        </div>
      </header>
    )
  }
}

export default withRouter(Header)