import React, { Component } from 'react'

class Header extends Component {
  render() {
    const cssClass = "mid-page-banner banner-image-"+this.props.image
    return (
        <div className={cssClass}>
          <h2>{this.props.title}</h2>
        </div>
    )
  }
}

export default Header