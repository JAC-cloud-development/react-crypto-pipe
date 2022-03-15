import axios from 'axios';


export const getCoinList = async () => {
  try {
    const { data: coinList } = await axios.get('/coins')
    console.log({coinList})
    return coinList

  } catch (e) {
    console.log({errorGetList: e})
    return []
  }
}


export const getCoinDetail = async (id) => {
  try {
    const { data: coinDetail } = await axios.get(`/coins/${id}`)
    console.log({coinDetail})
    return coinDetail
  } catch (e) {
    console.log({errorGetDetail: e})
    return {}
  }
}
