// eslint-disable-next-line @typescript-eslint/naming-convention
const families_weights = {
  thin: 'Poppins_100Thin',
  extra_light: 'Poppins_200ExtraLight',
  light: 'Poppins_300Light',
  regular: 'Poppins_400Regular',
  medium: 'Poppins_500Medium',
  semi_bold: 'Poppins_600SemiBold',
  bold: 'Poppins_700Bold',
  extra_bold: 'Poppins_800ExtraBold',
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
  families_weights,
  sizes
} as const

export default fonts
