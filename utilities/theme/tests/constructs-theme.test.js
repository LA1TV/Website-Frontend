import theme from '../theme'

test('16px goes to 1rem', () => {
  expect(theme).toMatchInlineSnapshot(`
    Object {
      "color": Object {
        "accent": "#bb0022",
        "background": "#000000",
        "navBackground": "#1e1e1e",
        "primary": "#f9f9f9",
      },
      "spacing": Object {
        "base": "0.75rem",
        "double": "1.5rem",
        "half": "0.375rem",
        "quarter": "0.1875rem",
        "third": "0.25rem",
      },
    }
  `)
})
