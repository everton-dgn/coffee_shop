import T from 'theme'

export const screenOptionsStyles = {
  headerStyle: {
    backgroundColor: T.colors.primaryBlackHex
  },
  headerTitleStyle: {
    fontFamily: T.fonts.familiesWeights.medium,
    color: T.colors.primaryWhiteHex
  },
  headerBackTitleStyle: {
    fontFamily: T.fonts.familiesWeights.regular
  },
  headerTintColor: T.colors.primaryWhiteHex,
  headerTitleAlign: 'center',
  headerBackTitleVisible: false
} as const
