import { StyleSheet } from 'react-native'

import T from 'theme'

const S = StyleSheet.create({
  text: {
    color: T.colors.primary_white,
    fontFamily: T.fonts.families_weights.regular,
    fontSize: T.fonts.sizes._14
  },
  touchableOpacity: {
    backgroundColor: T.colors.primary_orange,
    borderRadius: T.borders.radius._4,
    paddingHorizontal: T.spacings._16,
    paddingVertical: T.spacings._4
  }
})

export default S
