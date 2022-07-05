import { renderToJson } from 'tooling/jest/render'
import Navigation from '..'

test('renders', () => {
  expect(renderToJson(Navigation)).toMatchInlineSnapshot(`
    <Fragment>
      <Navigation__StyledNav>
        <Center
          intrinsicCenter={true}
        >
          <Navigation__StyledEmbed
            src="/static/images/logo.svg"
          />
          <Navigation__StyledOrderedList>
            <NavigationLink
              href="/"
            >
              Home
            </NavigationLink>
            <NavigationLink
              href="/watch/210"
            >
              Shows
            </NavigationLink>
          </Navigation__StyledOrderedList>
        </Center>
      </Navigation__StyledNav>
      <Center />
    </Fragment>
  `)
})
