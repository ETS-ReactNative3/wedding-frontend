import React, { Component } from 'react'
import axios from 'axios'
import Header from '../Components/Header'

import loading from '../Assets/loading.gif'

require('dotenv').config()

class Rsvp extends Component {
  constructor(props) {
    super(props)
    const API_HOST = process.env.REACT_APP_API_HOST || 'https://jeroeneneva.herokuapp.com/'
    this.state = {
      API_HOST,
      name:'',
      nameSubmitted: '',
      error: '',
      guest: {
        plus1attending: false,
        veggie: false,
        plus1veggie: false,
        rsvp: false,
      },
      songs: ['', '', ''],
      artists: ['', '', ''],
      loading: false
    }
  }

  checkGuest = async function(event) {
    event.preventDefault()
    this.setState({
      loading: true
    })

    let errorResponse = false
    let guest = false

    await axios.post(this.state.API_HOST+'/api/guests/checkGuest', {
      name: this.state.name
    })
    .then(function(response) {
      guest = response.data
    })
    .catch(function(error) {
      console.log('err', error)
      errorResponse = "Oeps, geen gast met die naam gekend. Controleer je even op spelfouten? Indien het nog steeds niet werkt, neem gerust contact op met ons."
    })
    if (guest) {
      this.setState({
        nameSubmitted: guest.name,
        guest: guest,
        loading: false
      })
    }
    else if (errorResponse) {
      this.setState({
        error: errorResponse,
        loading: false
      })
    }
  }

  submitRsvp = async function(event) {
    event.preventDefault()
    this.setState({
      loading: true,
    })
    const guest = this.state.guest
    const artists = this.state.artists
    let songs = []
    this.state.songs.forEach(function(song, i){
      if (song!==''){
        songs.push({
          artist: artists[i],
          title: song
        })
      }
    });
    const rsvpObj = {
      name: guest.name,
      rsvp: !!guest.rsvp,
      veggie: !!guest.veggie,
      plus1attending: !!guest.plus1attending,
      plus1veggie: !!guest.plus1veggie,
      songs
    }
    
    axios.post(this.state.API_HOST+'/api/guests/rsvp', rsvpObj)
    .then(function(response) {
      alert('Opgeslaan!')
    })
    .catch(function(err) {
      alert('Oeps, er is iets mis gegaan, probeer aub later opnieuw. Indien dit blijft gebeuren, neem dan gerust contact op met ons.')
    })
    this.setState({
      loading: false,
    })
  }

  changeName = function(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleGuestChange = function(event){
    const target = event.target
    let value = target.type === 'checkbox' ? target.checked : target.value
    let name = target.name
    let guest = this.state.guest
    if(name.includes('inverse')) {
      name = name.split('-')[1]
      value = value? false : true
    }
    guest[name] = value
    this.setState({
      guest
    });
  }

  handleSongChange = function(event){
    const target = event.target
    const songId = target.name[target.name.length -1]
    let songs = this.state.songs
    songs[songId] = target.value

    this.setState({songs})
  }

  handleArtistChange = function(event){
    const target = event.target
    const songId = target.name[target.name.length -1]
    let artists = this.state.artists
    artists[songId] = target.value

    this.setState({ artists })
  }


  render() {
    if(this.state.nameSubmitted === '') {
      return (
        <div className="App">
          <Header />
          <h1 className='rsvp-h1'>RSVP</h1>

          <form onSubmit={this.checkGuest.bind(this)}>
            <label>
              Naam: (voornaam SPATIE achternaam) <br />
              {this.state.error ? <div className='error-div'>{this.state.error} <br /></div> : ''}
              <input type="text" name="Naam" value={this.state.name} onChange={this.changeName.bind(this)}/>
            </label>
            <br /><input type="submit" value="Ophalen" />
            {this.state.loading? <img src={loading} alt='loading' className='loading-gif' /> : ''}
          </form>
          <div className='something-wrong'>(*Neem gerust met ons contact op als er iets niet lukt of klopt met het formulier. Het ophalen van uw gegevens kan even duren.)</div>
        </div>
      )
    }
    else {
      return (
        <div className="App">
          <Header />
          <h1 className='rsvp-h1'>RSVP</h1>

          <form  onSubmit={this.submitRsvp.bind(this)}>
            <label>
              Naam: {this.state.nameSubmitted}
            </label> <br />
            <label>
              Ik wil er graag bij zijn:
            </label>
            <input type='checkbox' name='rsvp' checked={this.state.guest.rsvp || false} onChange={this.handleGuestChange.bind(this)} /> <br />
            <label>
              Ik kan er spijtig genoeg niet bij zijn:
            </label>
            <input type='checkbox' name='inverse-rsvp' checked={this.state.guest.rsvp? false : true} onChange={this.handleGuestChange.bind(this)} /> <br />
            {this.state.guest.diner ? <div>
              <label>
                Ik ben vegetariër:
              </label>
              <input type='checkbox' name='veggie' checked={this.state.guest.veggie || false} onChange={this.handleGuestChange.bind(this)} /> <br />
            </div> : ''}
            {this.state.guest.plus1 ? <div><br />
              <label>Naam: {this.state.guest.plus1name}</label> <br />
              <label>
                Ik wil er graag bij zijn:
              </label>
              <input type='checkbox' name='plus1attending' checked={this.state.guest.plus1attending || false} onChange={this.handleGuestChange.bind(this)} /> <br />
              <label>
                Ik kan er spijtig genoeg niet bij zijn:
              </label>
              <input type='checkbox' name='inverse-plus1attending' checked={this.state.guest.plus1attending? false : true} onChange={this.handleGuestChange.bind(this)} /> <br />
              </div> : ''}
            {this.state.guest.plus1 && this.state.guest.diner ? <div><label>
                Ik ben vegetariër:
              </label>
              <input type='checkbox' name='plus1veggie' checked={this.state.guest.plus1veggie || false} onChange={this.handleGuestChange.bind(this)} /> <br />
            </div> : ''}
            {this.state.guest.feest ? <div><br />
              <label>Ik denk dat deze liedjes wel leuk zouden zijn op het feest:</label><br />
              <input type='text' name='song0' value={this.state.songs[0]} onChange={this.handleSongChange.bind(this)} placeholder='titel'/>
              <input type='text' name='artist0' value={this.state.artists[0]} onChange={this.handleArtistChange.bind(this)} placeholder='artiest'/> <br />
              <input type='text' name='song1' value={this.state.songs[1]} onChange={this.handleSongChange.bind(this)} placeholder='titel'/>
              <input type='text' name='artist1' value={this.state.artists[1]} onChange={this.handleArtistChange.bind(this)} placeholder='artiest'/> <br />
              <input type='text' name='song2' value={this.state.songs[2]} onChange={this.handleSongChange.bind(this)} placeholder='titel'/>
              <input type='text' name='artist2' value={this.state.artists[2]} onChange={this.handleArtistChange.bind(this)} placeholder='artiest'/> <br />
            </div> : ''}
            {this.state.loading? <img src={loading} alt='loading' className='loading-gif' /> : ''}
            <input type="submit" value="Opslaan" />
          </form>
          <div className='something-wrong'>(*Neem gerust met ons contact op als er iets niet lukt of klopt met het formulier.)</div>
        </div>
      )
    }
  }
}

export default Rsvp
