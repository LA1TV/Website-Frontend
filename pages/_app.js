import React from 'react'
import App, { Container } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from 'utilities/theme'
import Navigation from 'components/Navigation'

class AppWrapper extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ThemeProvider theme={theme}>
            <Navigation>
                <Component {...pageProps} />
            </Navigation>
        </ThemeProvider>
      </Container>
    );
  }
}

export default AppWrapper;