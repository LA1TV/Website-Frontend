import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'utilities/theme'
import Promo from '.'

export default { title: 'Components|Promo' }

export const basicPromo = () => (

  <ThemeProvider theme={theme}>
    <Promo heading="Grizedale" description="Some description goes all the way in here" />
  </ThemeProvider>
)
