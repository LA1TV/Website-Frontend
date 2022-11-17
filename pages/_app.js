import App from 'next/app'
import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from 'utilities/theme'
import Navigation from 'components/Navigation'
import Footer from 'components/Footer'
import globalCss from 'utilities/global-css'
import Head from 'next/head'
import config from '../config.json'
import { clarity } from 'react-microsoft-clarity'
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
          <link rel="apple-touch-icon" sizes="57x57" href="/static/favicon/apple-touch-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/static/favicon/apple-touch-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/static/favicon/apple-touch-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/static/favicon/apple-touch-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/static/favicon/apple-touch-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/static/favicon/apple-touch-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/static/favicon/apple-touch-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/static/favicon/apple-touch-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon-180x180.png" />
          <link rel="icon" type="image/png" href="/static/favicon/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/static/favicon/android-chrome-192x192.png" sizes="192x192" />
          <link rel="icon" type="image/png" href="/static/favicon/favicon-96x96.png" sizes="96x96" />
          <link rel="icon" type="image/png" href="/static/favicon/favicon-16x16.png" sizes="16x16" />
          <link rel="manifest" href="/static/favicon/manifest.json" />
          <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
          <link rel="mask-icon" href="/static/favicon/favicon.svg" color="#FF0000" />
          <meta name="msapplication-TileColor" content="#603cba" />
          <meta name="msapplication-TileImage" content="/static/favicon/mstile-144x144.png" />
        </Head>
        <Navigation>
          <GlobalCSS />
          <Component {...pageProps} />
          <Footer></Footer>
        </Navigation>
      </ThemeProvider>
    )
  }

  componentDidMount () {
    clarity.init('eh8mj0sapw')
  }
}

export default AppWrapper
