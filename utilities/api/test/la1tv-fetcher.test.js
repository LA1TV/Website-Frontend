import { la1tvFetcher } from '..'
import fetch from 'isomorphic-unfetch'

jest.mock('isomorphic-unfetch')

test('makes call to la1tv api', () => {
  const expectedRequest = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': expect.any(String)
    }
  }
  la1tvFetcher({ url: 'someUrl' })
  expect(fetch).toHaveBeenCalledWith('https://www.la1tv.co.uk/api/v1/someUrl', expectedRequest)
})

test('parses response with passed function', async () => {
  fetch.mockResolvedValueOnce({
    json: () => ({
      data: {
        someField: 'someValue'
      }
    })
  })
  const mockParser = ({ someField }) => someField

  const expectedResponse = {
    body: 'someValue',
    statusCode: 200
  }

  expect(await la1tvFetcher({ url: 'someUrl', parser: mockParser })).toEqual(expectedResponse)
})

test('handles absent response', async () => {
  fetch.mockResolvedValueOnce({
    json: () => ({})
  })

  const expectedResponse = {
    body: 'Not found',
    statusCode: 404
  }

  expect(await la1tvFetcher({ url: 'someUrl' })).toEqual(expectedResponse)
})

test('handles rejected response', async () => {
  fetch.mockRejectedValueOnce()

  const expectedResponse = {
    body: 'Not found',
    statusCode: 404
  }

  expect(await la1tvFetcher({ url: 'someUrl' })).toEqual(expectedResponse)
})

test('returns data if no parser is passed', async () => {
  fetch.mockResolvedValueOnce({
    json: () => ({
      data: {
        someField: 'someValue'
      }
    })
  })

  const expectedResponse = {
    body: {
      someField: 'someValue'
    },
    statusCode: 200
  }

  expect(await la1tvFetcher({ url: 'someUrl' })).toEqual(expectedResponse)
})
