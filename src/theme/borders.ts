const radius = {
  _0: 0,
  _2: 2,
  _4: 4,
  _6: 6,
  _8: 8,
  _10: 10,
  _12: 12,
  _14: 14,
  _16: 16,
  _20: 20,
  _24: 24,
  circle: '50%'
} as const

const width = {
  _0: 0,
  _1: 1,
  _2: 2
} as const

const borders = {
  radius,
  width
} as const

export default borders
