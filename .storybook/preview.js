import { addDecorator, addParameters, configure } from '@storybook/react';
import { themes } from '@storybook/theming';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { createGlobalStyle } from 'styled-components'
import globalCss from 'utilities/global-css'

const GlobalCSS = createGlobalStyle`
  ${globalCss}
`

addDecorator(s => <><GlobalCSS />{s()}</>);
addDecorator(withA11y)

addParameters({
  backgrounds: [
    { name: 'Dark', value: '#000', default: true },
    { name: 'Light', value: '#FFF' },
  ],
  options: {
    theme: themes.dark,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});