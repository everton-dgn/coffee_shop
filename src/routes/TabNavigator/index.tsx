import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { StackNavigator } from 'routes/StackNavigator'

import type { RootTabParamList } from './types'

import { getScreenOptions } from './config'

const { Navigator, Screen } = createBottomTabNavigator<RootTabParamList>()

export const TabNavigator = () => (
  <Navigator initialRouteName="HomeStack" screenOptions={getScreenOptions}>
    <Screen
      name="HomeStack"
      component={StackNavigator}
      options={{ headerShown: false, title: 'Home' }}
    />
  </Navigator>
)
