import watch from 'pages/api/watch'
import fetch from 'isomorphic-unfetch'

const mockResSend = jest.fn()
const mockJson = jest.fn()

const mockRes = jest.fn(() => ({
    status: () => ({
        send: mockResSend
    }),
    send: mockResSend
}))

jest.mock("isomorphic-unfetch")

test('should call the la1tv url', () => {
    fetch.mockReturnValue("mock response")
    const result = watch({query: { videoId: "someVideoId"}}, mockRes)
    const expectedURL = "https://www.la1tv.co.uk/api/v1/mediaItems/someVideoId"
    const expectedOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-Api-Key": expect.any(String)
        }
    }

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(expectedURL, expectedOptions)
})