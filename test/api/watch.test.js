import fetch from 'isomorphic-unfetch'

jest.mock('isomorphic-unfetch')

test('should call the la1tv url', () => {
  fetch.mockReturnValue('mock response')
  const expectedURL = 'https://www.la1tv.co.uk/api/v1/mediaItems/someVideoId'
  const expectedOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': expect.any(String)
    }
  }

  expect(fetch).toHaveBeenCalledTimes(1)
  expect(fetch).toHaveBeenCalledWith(expectedURL, expectedOptions)
})
