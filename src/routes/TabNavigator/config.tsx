import { Ionicons } from '@expo/vector-icons'

import type {
  RootTabParamList,
  GetScreenOptionsProps,
  TabBarIconProps
} from './types'

import T from 'theme'

const screenOptionsStyles = {
  headerStyle: {
    backgroundColor: T.colors.primary_dark_grey
  },
  headerTitleStyle: {
    fontFamily: T.fonts.families_weights.medium,
    color: T.colors.primary_white
  },
  headerTitleAlign: 'center',
  tabBarActiveTintColor: T.colors.primary_orange,
  tabBarInactiveTintColor: T.colors.primary_light_grey
} as const

const icons: Record<keyof RootTabParamList, IoniconsName> = {
  HomeStack: 'home'
} as const

export const getScreenOptions = ({ route }: GetScreenOptionsProps) =>
  ({
    tabBarIcon: ({ focused, color, size }: TabBarIconProps) => {
      const icon = icons[route.name as keyof RootTabParamList]
      const prefix = focused ? '' : '-outline'
      const iconName = `${icon}${prefix}`
      return (
        <Ionicons name={iconName as IoniconsName} size={size} color={color} />
      )
    },
    ...screenOptionsStyles
  }) as const
