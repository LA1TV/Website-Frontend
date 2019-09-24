import { renderToJson } from "tooling/jest/render";
import Index from "pages/index.js";

test("should be able to render", () => {
  expect(renderToJson(Index)).toMatchInlineSnapshot(`
    <Paragraph>
      Hello Next.js
    </Paragraph>
  `);
});
