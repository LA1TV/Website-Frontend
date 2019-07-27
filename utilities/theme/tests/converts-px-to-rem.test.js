import pxToRem from '../px-to-rem'

test('16px goes to 1rem', () => {
  expect(pxToRem(16)).toBe('1rem')
})

test('8px goes to 0.5rem', () => {
  expect(pxToRem(8)).toBe('0.5rem')
})

test('9px goes to 0.5625rem', () => {
  expect(pxToRem(9)).toBe('0.5625rem')
})
