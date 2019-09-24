import { renderToJson } from 'tooling/jest/render'
import Navigation from '..'

test('renders', () => {
  expect(renderToJson(Navigation)).toMatchInlineSnapshot(`
    <Fragment>
      <Head>
        <title>
          LA1TV
        </title>
        <meta
          content="initial-scale=1.0, width=devide-width"
          name="viewport"
        />
      </Head>
      <Navigation__StyledNav>
        <Navigation__StyledCenter>
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
        </Navigation__StyledCenter>
      </Navigation__StyledNav>
      <Center />
    </Fragment>
  `)
})
