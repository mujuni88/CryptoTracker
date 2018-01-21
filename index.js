import { AppRegistry } from 'react-native'
import App from './App'
import { useStrict } from 'mobx'

useStrict(true)
AppRegistry.registerComponent('CryptoTracker', () => App)
