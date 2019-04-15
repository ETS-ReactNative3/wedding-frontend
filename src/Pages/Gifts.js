import React, { Component } from 'react'
import Header from '../Components/Header'

import takeoff from '../Assets/gifts/takeoff.png'
import landing from '../Assets/gifts/landing.png'
import nz from '../Assets/gifts/nz.jpg'
import vietnam from '../Assets/gifts/vietnam.jpg'

class Gifts extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className='text-div'>
          Zoals jullie al weten, wonen wij ondertussen meer dan 2 jaar samen in ons eigen huis.<br />
          Ons huis staat al vol met potten & pannen, boeken, dozen vol Magic-kaarten & onze kat. Kortom, we hebben al alles om gelukkig te zijn.
        </div>
        <div className='text-div'>
          Wel plannen we om in het najaar een mooie huwelijksreis te maken naar de andere kant van de wereld. <br />
          Als je iets wil geven, kan je ons veel plezier doen met een centje voor onze grote reis.
        </div>
        <h1>Waar kan je ons mee helpen:</h1>
        <div className='gifts-wrapper'>
          <div className='gift-div'><img className='gift-img' src={takeoff} /><span className='gift-description'>Een huwelijksreis.</span></div>
          <div className='gift-div'><img className='gift-img flag-img' src={nz} /><span className='gift-description'>Rondreizen in Nieuw Zeeland.</span></div>
          <div className='gift-div'><img className='gift-img flag-img' src={vietnam} /><span className='gift-description'>Genieten in Vietnam.</span></div>
          <div className='gift-div'><img className='gift-img' src={landing} /><span className='gift-description'>Een veilige vlucht terug naar huis.</span></div>
          <div className='gift-div'></div>
          <div className='gift-div'><img className='gift-img flag-img' src={nz} /><span className='gift-description'>10 dagen rondreizen in Nieuw Zeeland.</span></div>
          <div className='gift-div'><img className='gift-img flag-img' src={vietnam} /><span className='gift-description'>Een weekje genieten in Vietnam.</span></div>
          <div className='gift-div'></div>
        </div>
      </div>
    )
  }
}

export default Gifts
