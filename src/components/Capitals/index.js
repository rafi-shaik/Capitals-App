import './index.css'

import {Component} from 'react'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {country: 'India'}

  onChangeOption = event => {
    const optionValue = event.target.value
    const reqArray = countryAndCapitalsList.filter(
      each => each.id === optionValue,
    )
    const countryName = reqArray[0].country
    this.setState({country: `${countryName}`})
  }

  render() {
    const {country} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="select-container">
            <select className="option-value" onChange={this.onChangeOption}>
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="select-para"> is capital of which country?</p>
          </div>
          <h1 className="country-name">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
