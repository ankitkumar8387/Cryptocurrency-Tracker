import './index.css'

const CryptocurrencyItem = props => {
  const {cryptocurrencyItem} = props
  const {id, currencyName, usd, euro, currencyLogo} = cryptocurrencyItem

  return (
    <div className="item-container">
      <div className="part1">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p className="name">{currencyName}</p>
      </div>
      <div className="part2">
        <p className="usd">{usd}</p>
        <p className="euro">{euro}</p>
      </div>
    </div>
  )
}
export default CryptocurrencyItem
