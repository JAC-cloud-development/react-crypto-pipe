import {useEffect, useMemo, useState} from 'react';
import {getCoinDetail, getCoinList} from '../api';
import {CoinRow} from './coinRow';

export const CoinList = ({}) => {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    refreshData()
  }, [])

  const refreshData = async () => {
    const coinList = await getCoinList()
    setCoins(coinList)
  }

  const onTextChange = (event) => {
    setSearch(event.target.value)
  }

  const filteredCoins = useMemo(() => {
    const searched = coins.filter(coin => coin.name.toLowerCase().includes(search) || coin.symbol.toLowerCase().includes(search))
    return searched.splice(0,  100)
  }, [coins, search])

  console.log({filteredCoins})

  return (
    <div className="coin-list">
      <input placeholder={'Search'} onChange={onTextChange}/>
      {filteredCoins.map((coin) => <CoinRow coin={coin}/>)}
    </div>
  );
}
