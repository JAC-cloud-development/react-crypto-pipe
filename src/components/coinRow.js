import {useEffect, useMemo, useState} from 'react';
import {getCoinDetail, getCoinList} from '../api';

export const CoinRow = ({coin}) => {

  const [open, setOpen] = useState(false)

  const onClickRow = async (coin) => {
    console.log({selectedCoin: coin})
    const coinDetail = await getCoinDetail(coin.id)
  }

  return (
    <div key={coin.id}
         className={'coin-row'}
         onClick={() => onClickRow(coin)}
         onMouseEnter={() => setOpen(true)}
         onMouseLeave={() => setOpen(false)}
    >
      <div className="coin-row-header">
        <img src={coin.image.small}/>
        <div>{coin.name}</div>
        <div>{coin.symbol}</div>
      </div>

      {open && <div style={{fontSize: 16}}>
        {coin.market_data.circulating_supply} Pezzi
      </div>}
    </div>
  )
}
