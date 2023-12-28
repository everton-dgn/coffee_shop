import { DefaultTheme, type Theme } from '@react-navigation/native'

import T from 'theme'

const CustomTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    card: T.colors.primaryDarkGreyHex,
    border: T.colors.secondaryLightGreyHex,
    notification: T.colors.primaryDarkGreyHex
  }
}

export default CustomTheme
