import { renderToJson } from 'tooling/jest/render'
import Navigation from '..'

test('renders', () => {
  expect(renderToJson(Navigation)).toMatchInlineSnapshot(`
    <Fragment>
      <Head>
        <title>
          Index
        </title>
        <meta
          content="initial-scale=1.0, width=devide-width"
          name="viewport"
        />
      </Head>
      <Navigation__StyledNav>
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
            href="/watch/328"
          >
            Shows
          </NavigationLink>
          <NavigationLink
            href="/playlists"
          >
            Playlists
          </NavigationLink>
          <NavigationLink
            href="/live"
          >
            Livestreams
          </NavigationLink>
          <NavigationLink
            href="/contact"
          >
            Contact
          </NavigationLink>
        </Navigation__StyledOrderedList>
      </Navigation__StyledNav>
    </Fragment>
  `)
})
