import { addDecorator, addParameters, configure } from '@storybook/react';
import { themes } from '@storybook/theming';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withKnobs } from '@storybook/addon-knobs';
import { createGlobalStyle } from 'styled-components'
import globalCss from 'utilities/global-css'

const GlobalCSS = createGlobalStyle`
  ${globalCss}
`

addDecorator(s => <><GlobalCSS />{s()}</>);
addDecorator(withA11y)
addDecorator(withKnobs)

addParameters({
  options: {
    theme: themes.dark,
  }
});

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  }
})

configure([
    require.context('../components', true, /\.stories\.jsx$/),
    // require.context('../layouts', true, /\.stories\.jsx$/)
  ],
  module
);


