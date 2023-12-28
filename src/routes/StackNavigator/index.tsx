import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from 'pages'

import type { RootStackParamList } from './types'

import { screenOptionsStyles } from './config'

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

export const StackNavigator = () => (
  <Navigator initialRouteName="Home" screenOptions={screenOptionsStyles}>
    <Screen name="Home" component={Home} />
  </Navigator>
)
