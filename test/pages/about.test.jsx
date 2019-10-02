import { renderToJson } from 'tooling/jest/render'
import About from 'pages/about.js'

test('should be able to render', () => {
  expect(renderToJson(About)).toMatchInlineSnapshot(`
    <div>
      <p>
        This is the aboot page
      </p>
    </div>
  `)
})
