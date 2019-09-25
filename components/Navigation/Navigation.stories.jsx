import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'utilities/theme'
import Navigation from '.'

export default { title: 'Navigation' }

export const navigation = () => (
  <ThemeProvider theme={theme}>
    <Navigation />
  </ThemeProvider>
)
