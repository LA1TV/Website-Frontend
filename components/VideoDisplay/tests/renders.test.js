import { renderToJson } from 'tooling/jest/render'
import VideoDisplay from '..'

test('renders', () => {
  expect(renderToJson(VideoDisplay)).toMatchInlineSnapshot(`
    <VideoDisplay__StyledVideoDisplayDiv>
      <VideoDisplay__StyledIframe
        allowfullscreen={true}
        disableFullScreen="0"
        flush="1"
        frameBorder="0"
        mozallowfullscreen={true}
        showHeading="0"
        webkitallowfullscreen={true}
      />
    </VideoDisplay__StyledVideoDisplayDiv>
  `)
})
