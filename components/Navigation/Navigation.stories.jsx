import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from 'utilities/theme'
import Navigation from '.'

const StyledDiv = styled.div`
  width: 640px
`

export default { title: 'Navigation' }

export const containedVideo = () => (
  <ThemeProvider theme={theme}>
    <StyledDiv>
      <Navigation />
    </StyledDiv>
  </ThemeProvider>
)

export const fullwidthVideo = () => (
  <ThemeProvider theme={theme}>
    <Navigation />
  </ThemeProvider>
)
