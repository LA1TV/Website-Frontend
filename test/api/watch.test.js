import { la1tvFetcher } from 'utilities/api'
import watchHandler from 'pages/api/watch'

jest.mock('utilities/api')

test('should return some data using the la1tvFetcher', async () => {
  la1tvFetcher.mockResolvedValueOnce({
    body: { someObject: 'someData' },
    statusCode: 200
  })

  const mockEnd = jest.fn()
  const mockStatus = jest.fn().mockReturnValue({
    end: mockEnd
  })

  const mockResponse = {
    status: mockStatus
  }

  await watchHandler({ query: { videoId: 'someVideoId' } }, mockResponse)

  expect(mockStatus).toHaveBeenCalledWith(200)
  expect(mockEnd).toHaveBeenCalledWith(JSON.stringify({ someObject: 'someData' }))
})
