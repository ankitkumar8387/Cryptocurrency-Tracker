// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    isLodding: true,
    cryptocurrencyItem: [],
  }

  componentDidMount() {
    this.getCryptocurrencyItem()
  }

  getCryptocurrencyItem = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      usd: eachItem.usd_value,
      euro: eachItem.euro_value,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({cryptocurrencyItem: formattedData, isLodding: false})
  }

  render() {
    const {cryptocurrencyItem, isLodding} = this.state
    return (
      <div className="cryptocurrency-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
          alt="cryptocurrency"
          className="bg-img"
        />
        <div className="table-form">
          <p className="coin-type">Coin Type</p>
          <div className="currency">
            <p className="usd">USD</p>
            <p className="euro">EURO</p>
          </div>
        </div>
        {isLodding ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          cryptocurrencyItem.map(item => (
            <CryptocurrencyItem
              cryptocurrencyItem={item}
              key={item.id}
              className="cryptocurrencyItem"
            />
          ))
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList
