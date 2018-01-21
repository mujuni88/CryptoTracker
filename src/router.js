import { StackNavigator } from 'react-navigation'
import { Home } from './containers'

const stackNavigatorConfig = {
  initialRouteName: 'Home'
}

export default StackNavigator(
  {
    Home: {
      screen: Home
    }
  },
  stackNavigatorConfig
)
