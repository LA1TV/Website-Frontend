import App from 'next/app'
import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from 'utilities/theme'
import Navigation from 'components/Navigation'
import Footer from 'components/Footer'
import globalCss from 'utilities/global-css'
import Head from 'next/head'
import config from '../config.json'

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
        <Head>
          <title>LA1TV</title>
          <link rel="preconnect" href={config.env.LA1TV_API_ENDPOINT} />
          <link rel="preconnect" href={config.env.S3_DOMAIN} />
          <meta name="viewport" content="initial-scale=1.0, width=devide-width" />
        </Head>
        <Navigation>
          <GlobalCSS />
          <Component {...pageProps} />
          <Footer></Footer>
        </Navigation>
      </ThemeProvider>
    )
  }
}

export default AppWrapper
