import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import logo from '../Assets/logo.png'
import banner1 from '../Assets/banners/banner1.jpg'

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <Link to='/Home'>
          <img src={logo} className="wedding-logo" alt="logo" />
        </Link>
        <h1 className="App-title">Jeroen en Eva - 15/06/19</h1>
        <div className="header-menu">
          <Link className='header-link' to='/Home'>
            Home
          </Link>
          <Link className='header-link' to='/What'>
            What
          </Link>
          <Link className='header-link' to='/Gifts'>
            Gifts
          </Link>
        </div>
      </header>
    )
  }
}

export default withRouter(Header)