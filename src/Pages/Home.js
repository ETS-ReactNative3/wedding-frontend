import React, { Component } from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner image={1} title="01/01/2013" subtitle='Kennissen' />
        <div className='text-div'>Op nieuwjaarsnacht is het begonnen. Allebei waren we niet van plan om in de Amber terecht te komen, maar toch is dat gebeurd. Een van de weinige verhalen die begonnen met een tomatensapje, maar ook wel met een hele avond praten. En daarna is het eigenlijk nooit meer stil geworden...</div>
       <Banner image={2} title='01/01/2013-08/12/2013' subtitle='Vrienden' />
        <div className='text-div'>Een jaar lang (bijna). Vriendschap, door alle moeilijkheden die we dat jaar meegemaakt hadden. Er ging geen dag voorbij zonder dat we elkaar spraken. Ongelooflijk rap werden we beste vrienden. En wat voor sommige anderen al langer duidelijk leek, werd voor ons ook duidelijk eens de dagen begonnen te korten...</div>
        <Banner image={3} title='08/12/2013-29/11/2017' subtitle='Liefjes' />
        <div className='text-div'>We bleven beste vrienden, maar werden zo veel meer. Eens ook wij dit allebei begrepen, voelde alles plots zeer juist aan. Eerst woonden we nog samen met een extra vriend, maar dan kwam eerst onze kat, en dan ons eigen huisje. We begonnen allebei aan nieuwe jobs, en deelden onze vrienden met elkaar. We deelden alles met elkaar- liefde, mopjes, genot en verdriet.</div>
        <Banner image={4} title='29/11/2017-15/06/2019' subtitle='Verloofden' />
        <div className='text-div'>Voor ons veranderde weinig, behalve een kleine glinstering aan de hand van Eva. Natuurlijk kwamen er wat extra uitgaven en veel extra planning bij, maar dat vinden we allemaal de moeite voor het feest waarbij we onze liefde konden vieren, met onze familie en vrienden.</div>
      </div>
    )
  }
}

export default Home
