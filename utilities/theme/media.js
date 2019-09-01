import { css } from 'styled-components'
import theme from './theme'

export default Object.keys(theme.spacing).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label]}px) {
        ${css(...args)}
      }
    `
}, {})