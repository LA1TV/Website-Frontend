import pxToRem from './px-to-rem'

const theme = {
  spacing: {
    base: pxToRem(12),
    half: pxToRem(6),
    third: pxToRem(4),
    quarter: pxToRem(3),
    double: pxToRem(24)
  },
  color: {
    background: '#1e1e1e',
    primary: '#f9f9f9',
    accent: '#bb0022'
  }
}

export default theme
