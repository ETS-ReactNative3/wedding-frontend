import React, { Component } from 'react'
import axios from 'axios'

class Guests extends Component {
  constructor(props) {
    super(props)
    this.state = {
      guests: [],
      unusedKeys: [],
      newGuest: {
        guestName: '',
        email: '',
        reception: false,
        dinner: false,
        dessert: false,
      },
    }
  }

  componentWillMount() {
    axios.get('http://localhost:8000/api/guests').then(res => {
      this.setState({
        guests: res.data,
      })
    })
    axios.get('http://localhost:8000/api/keys/unused').then(res => {
      this.setState({
        unusedKeys: res.data,
      })
    })
  }

  addGuest = async(e) => {
    e.preventDefault()
    if (this.state.newGuest.guestName && this.state.newGuest.email) {
      const result = await axios.post(
        'http://localhost:8000/api/keys/add',
        this.state.newGuest,
      )
      const unusedKeys = this.state.unusedKeys
      unusedKeys.push({
        id: result.data.id,
        guestName: result.data.guestName,
        hash: result.data.hash,
        email: result.data.email,
      })
      this.setState({
        newGuest: {
          guestName: '',
          email: '',
          reception: false,
          dinner: false,
          dessert: false,
        },
        unusedKeys,
      })
    }
  }

  onChange = (input) => {
    let newGuest = this.state.newGuest
    newGuest[input.target.name] = input.target.type !== 'checkbox' ? input.target.value : input.target.checked
    this.setState({ newGuest })
    console.log(this.state.newGuest)
  }

  render() {
    const guestsElement = this.state.guests.filter(g => g.attending).map(g => {
      return <div key={g.id}>
        Name: {g.name}, vegetarian: {g.vegetarian === 1? 'yes' : 'no' }
      </div>
    })

    const absentElement = this.state.guests.filter(g => !g.attending).map(g => {
      return <div key={g.id}>
        Name: {g.name}
      </div>
    })

    const unusedElement = this.state.unusedKeys.map(k => {
      return <div key={k.id}>
        Name: {k.guestName}, key: {k.hash}, email: {k.email}
      </div>
    })
    return (
      <div className="App">
        <h1>List of guests</h1>
        {guestsElement}
        <h1>List of absentees</h1>
        {absentElement}
        <h1>List of pending guests (no response)</h1>
        {unusedElement}
        <h1>Invite new guest</h1>
        <form onSubmit={this.addGuest}>
          <input type='text' placeholder='name' name='guestName' onChange={this.onChange} value={this.state.newGuest.guestName} />
          <input type='text' placeholder='mail' name='email' onChange={this.onChange} value={this.state.newGuest.email} />
          <input type='submit' value='add' /> <br />
          <label htmlFor='reception-checkbox'>Reception</label>
          <input type='checkbox' name='reception' id='reception-checkbox' onChange={this.onChange} value={this.state.newGuest.reception} /><br />
          <label htmlFor='dinner-checkbox'>Dinner</label>
          <input type='checkbox' name='dinner' id='dinner-checkbox' onChange={this.onChange} value={this.state.newGuest.dinner} /><br />
          <label htmlFor='dessert-checkbox'>Dessert</label>
          <input type='checkbox' name='dessert' id='dessert-checkbox' onChange={this.onChange} value={this.state.newGuest.dessert} />
        </form>
      </div>
    )
  }
}

export default Guests
