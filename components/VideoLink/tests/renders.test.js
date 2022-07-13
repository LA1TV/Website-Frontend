import { renderToJson } from 'tooling/jest/render'
import VideoLink from '..'

test('renders', () => {
  expect(renderToJson(VideoLink)).toMatchInlineSnapshot(`
    <VideoLink__StyledVideoLinkDiv>
      <VideoLink__StyledImg
        src="undefined"
      />
      <Heading type="h2">undefined</Heading>
      <Paragraph>undefined</Paragraph>
    </VideoLink__StyledVideoLinkDiv>
  `)
})
