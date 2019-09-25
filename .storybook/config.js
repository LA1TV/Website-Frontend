import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { createGlobalStyle } from 'styled-components'
import globalCss from 'utilities/global-css'

const GlobalCSS = createGlobalStyle`
  ${globalCss}
`

addDecorator(s => <><GlobalCSS />{s()}</>);
configure(require.context('../components', true, /\.stories\.jsx$/), module);


