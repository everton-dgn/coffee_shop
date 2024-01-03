import { DefaultTheme, type Theme } from '@react-navigation/native'

import T from 'theme'

const CustomTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    card: T.colors.primary_dark_grey,
    border: T.colors.secondary_light_grey,
    notification: T.colors.primary_dark_grey
  }
}

export default CustomTheme
