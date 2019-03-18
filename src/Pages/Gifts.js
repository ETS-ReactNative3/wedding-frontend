import React, { Component } from 'react'
import Header from '../Components/Header'

import weddingDress from '../Assets/gifts/weddingDress.png'
import food from '../Assets/gifts/food.png'
import weddingParty from '../Assets/gifts/weddingParty.png'
import airplanes from '../Assets/gifts/airplanes.png'

class Gifts extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className='text-div'>
          Zoals jullie al weten, wonen wij ondertussen al bijna 2 jaar samen. In ons huis hebben wij alles waar we gelukkig van worden. (Vooral Magnusje, natuurlijk.)
        </div>
        <div className='text-div'>
          Cadeau's geven is daarom ook totaal niet nodig. Wil je toch een cadeau geven, willen we vriendelijk vragen om ons dan gewoon de monetaire waarde van je cadeau te storten. Hieronder volgt een lijstje trouwgerelateerde uitgaven, waar je ons mee zou helpen.
        </div>
        <div className='gifts-wrapper'>
          <div className='gift-div'><img src={weddingDress} /><span className='gift-description'>Een betoverende trouwjurk.</span></div>
          <div className='gift-div'><img src={food} /><span className='gift-description'>Een heerlijke maaltijd om met onze vrienden en familie te delen.</span></div>
          <div className='gift-div'><img src={weddingParty} /><span className='gift-description'>Het feest van ons leven om de dag van ons leven te vieren.</span></div>
          <div className='gift-div'><img src={airplanes} /><span className='gift-description'>Een huwelijks.</span></div>
        </div>
      </div>
    )
  }
}

export default Gifts
