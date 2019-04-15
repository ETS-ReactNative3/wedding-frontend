import React, { Component } from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'

const stadhuisMaps = "https://www.google.be/maps/dir/''/stadhuis+gent/@51.0562827,3.7127973,15.37z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47c371464ea5eafb:0x1ef8658035adcc4f!2m2!1d3.7253201!2d51.054479"
const sintbaafsMaps = "https://www.google.be/maps/dir/''/sint+baafskerk+sint+andries/data=!4m5!4m4!1m0!1m2!1m1!1s0x47c35123c6d799df:0x289ed2d6df44e1e8?sa=X&ved=2ahUKEwjO2cKno4PdAhXPmLQKHXKcAAEQ9RcwC3oECAoQEg"
const thofMaps = "https://www.google.be/maps/dir/''/feestzaal+'t+of/@51.0913764,3.2761695,16.56z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47c345a3f04b4ca7:0xa4207351ed35e978!2m2!1d3.2725434!2d51.0906309"

class What extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner image={'stadhuis'} title="14/06/2019" />
        <a href={stadhuisMaps} className='href-simple'><div className='location-div'>
          <b>Stadhuis Gent</b><br />
          11:00<br />
          <b>Botermarkt 1</b><br />
          9000 Gent <br />
          <div className='parking-div'><b>Parking:</b> Vrijdagmarkt (400m wandelen)</div>
          <div className='direction-click'>(Klik hier voor een routebeschrijving)</div> <br />
        </div></a>
        <Banner image={'sintbaafs'} title='15/06/2019' />
        <a href={sintbaafsMaps} className='href-simple'><div className='location-div'>
          <b>Sint-Baafskerk Sint-Andries</b><br />
          11:00<br />
          <b>Gistelsesteenweg</b><br />
          8200 Brugge
          <div className='direction-click'>(Klik hier voor een routebeschrijving)</div> <br />
        </div></a>
        <Banner image={5} title='15/06/2019 - Feest!' />
        <a href={thofMaps} className='href-simple'><div className='location-div'>
          <b>Feestzaal 't Of</b><br />
          11:00<br />
          <b>Peerstalstraat 29</b><br />
          8750 Wingene
          <div className='direction-click'>(Klik hier voor een routebeschrijving)</div> <br />
        </div></a>
      </div>
    )
  }
}

export default What
