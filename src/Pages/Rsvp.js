import React, { Component } from 'react'
import axios from 'axios'
import Header from '../Components/Header'

class Rsvp extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
      artists: ['', '', '']
    }
  }

  checkGuest = async function(event) {
    event.preventDefault()

    let errorResponse = false
    let guest = false

    await axios.post('http://wedding.test/api/guests/checkGuest', {
      name: this.state.name
    })
    .then(function(response) {
      console.log('guest', response.data)
      guest = response.data
    })
    .catch(function(error) {
      console.log('err', error)
      errorResponse = error
    })
    if (guest) {
      this.setState({
        nameSubmitted: guest.name,
        guest: guest
      })
    }
    else if (errorResponse) {
      this.setState({
        error: errorResponse
      })
    }
    console.log(this.state)
  }

  submitRsvp = async function(event) {
    event.preventDefault()
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
    
    axios.post('http://wedding.test/api/guests/rsvp', rsvpObj)
    .then(function(response) {
      console.log(response)
      alert('Opgeslaan!')
    })
    .catch(function(err) {
      console.log('error', err)
      alert('er is iets mis gegaan, probeer aub later opnieuw. Indien dit blijft gebeuren, neem dan contact op met ons.')
    })
  }

  changeName = function(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleGuestChange = function(event){
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    console.log('changing', name, value)
    let guest = this.state.guest
    guest[name] = value
    console.log('guest', guest)
    this.setState({
      guest
    });
    console.log('state', this.state)
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
          RSVP

          <form onSubmit={this.checkGuest.bind(this)}>
            <label>
              Name: {this.state.error} <br />
              <input type="text" name="Naam" value={this.state.name} onChange={this.changeName.bind(this)}/>
            </label>
            <br /><input type="submit" value="Opslaan" />
          </form>
        </div>
      )
    }
    else {
      return (
        <div className="App">
          <Header />
          RSVP

          <form  onSubmit={this.submitRsvp.bind(this)}>
            <label>
              Naam: {this.state.nameSubmitted}
            </label> <br />
            <label>
              Ik wil er graag bij zijn:
            </label>
            <input type='checkbox' name='rsvp' checked={this.state.guest.rsvp || false} onChange={this.handleGuestChange.bind(this)} /> <br />
            {this.state.guest.diner ? <div>
              <label>
                Ik wil graag vegetarisch eten:
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
                Ik wil graag vegetarisch eten:
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
            <input type="submit" value="Opslaan" />
          </form>
        </div>
      )
    }
  }
}

export default Rsvp
