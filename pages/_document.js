import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, createGlobalStyle } from 'styled-components'
import globalCss from 'utilities/global-css'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet()

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    )

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement()

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags }
  }

  render () {
    const GlobalCSS = createGlobalStyle`
      ${globalCss}
    `
    return (
      <html>
        <Head>
          {this.props.styleTags}
        </Head>
        <body>
          <GlobalCSS />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
