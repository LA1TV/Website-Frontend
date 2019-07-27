import { renderToJson } from "tooling/jest/render";
import Link, { NavigationLink } from "..";

test("renders", () => {
  expect(renderToJson(Link)).toMatchInlineSnapshot(`
    <Link
      prefetch={true}
    >
      <Link__StyledLink />
    </Link>
  `);
});

test("renders navigation", () => {
  expect(renderToJson(NavigationLink)).toMatchInlineSnapshot(`
    <NavigationLink__StyledListItem>
      <NavigationLink__StyledLink />
    </NavigationLink__StyledListItem>
  `);
});
