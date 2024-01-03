import T from 'theme'

export const screenOptionsStyles = {
  headerStyle: {
    backgroundColor: T.colors.primary_black
  },
  headerTitleStyle: {
    fontFamily: T.fonts.families_weights.medium,
    color: T.colors.primary_white
  },
  headerBackTitleStyle: {
    fontFamily: T.fonts.families_weights.regular
  },
  headerTintColor: T.colors.primary_white,
  headerTitleAlign: 'center',
  headerBackTitleVisible: false
} as const
