import React, { Component } from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner image={1} title="01/01/2013" subtitle='Kennismaking' />
        <div className='text-div'>Op nieuwjaarsnacht is het begonnen. Allebei waren we niet van plan om in ons studentencafé, De Amber, terecht te komen, maar toch is dat gebeurd. <br />
        Een van de weinige verhalen die begonnen met een tomatensapje en een hele avond praten. Daarna is het eigenlijk nooit meer stil geworden...</div>
       <Banner image={2} title='01/01/2013-08/12/2013' subtitle='Vrienden' />
        <div className='text-div'>(Bijna) een jaar lang. Vriendschap, door alles wat we dat jaar meemaakten. Er ging geen dag voorbij zonder dat we elkaar spraken.  <br />
        Ongelooflijk rap werden we goeie vrienden. Wat voor sommigen al langer duidelijk leek, werd voor ons ook duidelijk eens de dagen begonnen te korten...</div>
        <Banner image={3} title='08/12/2013-29/11/2017' subtitle='Liefde' />
        <div className='text-div'>We bleven vrienden, maar werden zo veel meer.  <br />
        Eens ook wij dit allebei begrepen, voelde alles plots zeer juist aan. Eerst woonden we nog samen met een extra vriend, dan kwam eerst onze kat, en nog wat later ook ons eigen huisje.  <br />
        We deelden alles met elkaar: liefde, mopjes, pizza, geluk en verdriet. Het enige wat we niet konden delen was het dekbed...</div>
        <Banner image={4} title='29/11/2017-15/06/2019' subtitle='Verloofden' />
        <div className='text-div'>Voor ons veranderde weinig, behalve een kleine glinstering aan de hand van Eva. Natuurlijk kwam er bij het organiseren van het trouwfeest heel wat kijken, gelukkig konden we hiervoor rekenen op veel hulp en steun van onze familie & vrienden.  <br />
        Nu is het aftellen naar het feest, waar we samen met jullie onze liefde kunnen vieren...</div>
      </div>
    )
  }
}

export default Home
