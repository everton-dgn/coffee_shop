const familiesWeights = {
  thin: 'Poppins_100Thin',
  extraLight: 'Poppins_200ExtraLight',
  light: 'Poppins_300Light',
  regular: 'Poppins_400Regular',
  medium: 'Poppins_500Medium',
  semiBold: 'Poppins_600SemiBold',
  bold: 'Poppins_700Bold',
  extraBold: 'Poppins_800ExtraBold',
  black: 'Poppins_900Black'
} as const

const sizes = {
  _12: 12,
  _14: 14,
  _16: 16,
  _18: 18,
  _20: 20,
  _24: 24,
  _28: 28,
  _30: 30
} as const

const fonts = {
  familiesWeights,
  sizes
} as const

export default fonts
