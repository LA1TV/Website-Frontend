import setHeaders from '..'

test('sets headers', () => {
  const mockRes = {
    setHeader: jest.fn()
  }

  setHeaders(mockRes)

  const expectedFeaturePolicy = "ambient-light-sensor 'none'; autoplay 'none'; accelerometer 'none'; camera 'none'; encrypted-media 'none'; fullscreen 'none'; geolocation 'none'; gyroscope 'none'; magnetometer 'none'; microphone 'none'; midi 'none'; payment 'none'; picture-in-picture 'none'; speaker 'none'; sync-xhr 'none'; usb 'none'; vr 'none';"
  const expectedContentSecurityPolicy = "default-src 'none'; script-src 'self' 'unsafe-inline'; style-src 'unsafe-inline'; img-src 'self'; frame-src embed.la1tv.co.uk; object-src 'none'; worker-src 'self'; manifest-src 'self'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'; connect-src 'self';"
  expect(mockRes.setHeader).toHaveBeenCalledWith('Strict-Transport-Security', `max-age=15768000`)
  expect(mockRes.setHeader).toHaveBeenCalledWith('X-Content-Type-Options', 'nosniff')
  expect(mockRes.setHeader).toHaveBeenCalledWith('Referrer-Policy', 'no-referrer')
  expect(mockRes.setHeader).toHaveBeenCalledWith('Feature-Policy', expectedFeaturePolicy)
  expect(mockRes.setHeader).toHaveBeenCalledWith('Content-Security-Policy', expectedContentSecurityPolicy)
  expect(mockRes.setHeader).toHaveBeenCalledWith('X-XSS-Protection', '1; mode=block')
})

test('sets live headers', () => {
  const mockRes = {
    setHeader: jest.fn()
  }

  process.env.UPGRADE_INSECURE_REQUESTS = 'true'

  setHeaders(mockRes)

  const expectedLiveContentSecurityPolicy = "default-src 'none'; script-src 'self' 'unsafe-inline'; style-src 'unsafe-inline'; img-src 'self'; frame-src embed.la1tv.co.uk; object-src 'none'; worker-src 'self'; manifest-src 'self'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'; upgrade-insecure-requests; connect-src 'self';"
  expect(mockRes.setHeader).toHaveBeenCalledWith('Content-Security-Policy', expectedLiveContentSecurityPolicy)

  delete process.env.UPGRADE_INSECURE_REQUESTS
})

test('sets production headers', () => {
  const mockRes = {
    setHeader: jest.fn()
  }

  process.env.PRODUCTION = 'true'

  setHeaders(mockRes)

  const expectedProductionContentSecurityPolicy = "default-src 'none'; script-src 'self' 'unsafe-inline'; style-src 'unsafe-inline'; img-src 'self'; frame-src embed.la1tv.co.uk; object-src 'none'; worker-src 'self'; manifest-src 'self'; base-uri 'none'; form-action 'none'; frame-ancestors 'none';"
  expect(mockRes.setHeader).toHaveBeenCalledWith('Content-Security-Policy', expectedProductionContentSecurityPolicy)

  delete process.env.PRODUCTION
})
