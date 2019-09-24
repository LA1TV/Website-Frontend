import App from 'next/app'
import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from 'utilities/theme'
import Navigation from 'components/Navigation'
import globalCss from 'utilities/global-css'

class AppWrapper extends App {
  render () {
    const GlobalCSS = createGlobalStyle`
      ${globalCss}
      body {
        background-color: ${({ theme }) => theme.color.background}
      }
    `
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Navigation>
          <GlobalCSS />
          <Component {...pageProps} />
        </Navigation>
      </ThemeProvider>
    )
  }
}

export default AppWrapper
