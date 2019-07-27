import theme from '../theme'

test('16px goes to 1rem', () => {
  expect(theme).toMatchSnapshot()
})
