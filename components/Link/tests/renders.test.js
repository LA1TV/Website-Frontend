import { renderToJson } from 'tooling/jest/render'
import Link, { NavigationLink } from '..'

test('renders', () => {
  expect(renderToJson(Link)).toMatchInlineSnapshot(`
    <ForwardRef(LinkComponent)>
      <Link__StyledLink />
    </ForwardRef(LinkComponent)>
  `)
})

test('renders navigation', () => {
  expect(renderToJson(NavigationLink)).toMatchInlineSnapshot(`
    <NavigationLink__StyledListItem>
      <NavigationLink__StyledLink />
    </NavigationLink__StyledListItem>
  `)
})
