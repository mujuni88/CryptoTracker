/* {
  "id": "bitcoin",
  "name": "Bitcoin",
  "symbol": "BTC",
  "rank": "1",
  "price_usd": "13801.7",
  "price_btc": "1.0",
  "24h_volume_usd": "11016000000.0",
  "market_cap_usd": "231915651400",
  "available_supply": "16803412.0",
  "total_supply": "16803412.0",
  "max_supply": "21000000.0",
  "percent_change_1h": "0.87",
  "percent_change_24h": "-2.55",
  "percent_change_7d": "-14.22",
  "last_updated": "1515991762"
} */

import { observable, computed, action, runInAction } from 'mobx'
import { setter } from 'mobx-decorators'
import { xhr } from 'utils'

const LIMIT = 15
export default class CoinStore {
  @setter
  @observable
  limit = LIMIT

  @setter
  @observable
  coins = []

  @setter
  @observable
  isLoading = false

  @setter
  @observable
  isError = false

  @action
  fetchCoins = async () => {
    this.setIsLoading(true)
    this.setIsError(false)

    try {
      const { data } = await xhr.get(`/v1/ticker/?limit=${this.limit}`)
      runInAction(() => {
        console.log('FETCH COINS')
        this.coins.replace(data)
        console.log(this.coins)
      })
    } catch (e) {
      this.setIsError(e)
    } finally {
      this.setIsLoading(false)
    }
  }

  @action
  loadMore = () => {
    this.limit += LIMIT
    this.fetchCoins()
  }
}
