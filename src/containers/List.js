import React, { Component } from 'react'
import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import {
  ListView,
  Screen,
  View,
  Image,
  Tile,
  Title,
  Subtitle,
  Caption,
  Divider,
  Row
} from '@shoutem/ui'
import { CoinStore } from 'stores'
import { constants, currencyFormatter } from 'utils'
import _ from 'lodash'

const coinStore = new CoinStore()
const { images } = constants

@observer // eslint-disable-line
export default class List extends Component {
  componentDidMount = () => {
    coinStore.fetchCoins()
  }

  calcPercentChangeInUsd = (percent, price) => {
    const _percent = parseFloat(percent) / 100
    const _price = parseFloat(price)

    const val = _.floor(_price * _percent, 2)

    if (Math.sign(val) > 0) {
      return `+ ${currencyFormatter(val)}`
    } else if (Math.sign(val) < 0) {
      return `- ${currencyFormatter(Math.abs(val))}`
    } else {
      return `${currencyFormatter(val)}`
    }
  }

  priceChangeStyle = price => ({
    color: Math.sign(price) < 0 ? '#d14836' : '#093'
  })

  renderRow = coin => {
    return (
      <Tile small>
        <Row>
          <View styleName='horizontal v-center space-between'>
            <Subtitle>{coin.rank}</Subtitle>
            <View styleName='vertical h-center' style={{width: 100}}>
              <Image
                styleName='small-avatar'
                source={{ uri: images(coin.symbol)}}
              />
              <Subtitle styleName='sm-gutter-top'>{coin.symbol}</Subtitle>
            </View>
          </View>
          <View styleName='vertical h-end stretch space-between'>
            <Caption numberOfLines={1}>
              {currencyFormatter(coin.price_usd)}
            </Caption>
            <Caption numberOfLines={1}>
              {currencyFormatter(coin.market_cap_usd)}
            </Caption>
          </View>
          <View styleName='vertical h-end stretch space-between'>
            <Caption numberOfLines={1}
              style={this.priceChangeStyle(coin.percent_change_1h)}
            >
              {this.calcPercentChangeInUsd(
                coin.percent_change_1h,
                coin.price_usd
              )}
            </Caption>
            <Caption
              numberOfLines={1}
              style={this.priceChangeStyle(coin.percent_change_1h)}
            >
              {_.floor(parseFloat(coin.percent_change_1h), 2)}%
            </Caption>
          </View>
        </Row>
        <Divider styleName='line' />
      </Tile>
    )
  }

  render () {
    return (
      <ListView
        onLoadMore = {coinStore.loadMore}
        loading    = {coinStore.isLoading}
        data       = {toJS(coinStore.coins)}
        renderRow  = {this.renderRow}
      />
    )
  }
}
