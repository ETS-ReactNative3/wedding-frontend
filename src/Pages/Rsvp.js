import React, { Component } from 'react'
import Header from '../Components/Header'

class Rsvp extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        RSVP

        <form>
          <label>
            Name:
            <input type="text" name="Naam" />
          </label>
          <br /><input type="submit" value="Opslaan" />
        </form>
      </div>
    )
  }
}

export default Rsvp
