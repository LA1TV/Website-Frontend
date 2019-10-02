import { renderToJson } from 'tooling/jest/render'
import Watch from 'pages/watch/[videoId].js'
import fetch from 'isomorphic-unfetch'

jest.mock('isomorphic-unfetch')

test('calls for data from the api', async () => {
  fetch.mockReturnValue({
    status: 200,
    json: () => ({
      some: 'object'
    })
  })

  expect(await Watch.getInitialProps({ query: { videoId: 'someId' } }))
    .toEqual({
      some: 'object',
      statusCode: 200
    })
})

test('just returns statusCode on none 200 response', async () => {
  fetch.mockReturnValue({ status: 404 })

  expect(await Watch.getInitialProps({ query: { videoId: 'someId' } }))
    .toEqual({
      statusCode: 404
    })
})

test('should handle error pages', () => {
  expect(renderToJson(Watch, { statusCode: 404 })).toMatchInlineSnapshot(`
    <ErrorPage
      statusCode={404}
    />
  `)
})

test('should handle renders', () => {
  expect(
    renderToJson(Watch, {
      statusCode: 200,
      name: 'someName',
      description: 'someDescription'
    })
  ).toMatchInlineSnapshot(`
    <Center>
      <Sidebar
        left={<VideoDisplay />}
        right={
          <React.Fragment>
            <Heading
              type="h1"
            >
              someName
            </Heading>
            <Paragraph>
              someDescription
            </Paragraph>
          </React.Fragment>
        }
      />
    </Center>
  `)
})
