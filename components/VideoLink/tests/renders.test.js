import { renderToJson } from 'tooling/jest/render'
import VideoLink from '..'

test('renders', () => {
  expect(renderToJson(VideoLink)).toMatchInlineSnapshot(`
    <VideoLink__StyledVideoLinkDiv>
      <Link href="undefined">
        <span>
          <VideoLink__StyledImg
            src="undefined"
          />
          <Heading type="h2">undefined</Heading>
          <Paragraph>undefined</Paragraph>
        </span>
      </Link>
    </VideoLink__StyledVideoLinkDiv>
  `)
})
