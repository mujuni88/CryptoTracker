import React, { Component } from 'react'
import { Screen } from '@shoutem/ui'
import { Header } from 'components'
import { List } from 'containers'

export default class Home extends Component {
  render () {
    return (
      <Screen>
        <Header />
        <List />
      </Screen>
    )
  }
}
