import { renderToJson } from 'tooling/jest/render'
import VideoDisplay from '..'

test('renders', () => {
  expect(renderToJson(VideoDisplay)).toMatchInlineSnapshot(`
    <VideoDisplay__StyledVideoDisplayDiv>
      <VideoDisplay__StyledIframe
        allowfullscreen={true}
        frameborder="0"
        mozallowfullscreen={true}
        src="undefined?flush=0&hideBottomBar=1&showHeading=0"
        webkitallowfullscreen={true}
      />
    </VideoDisplay__StyledVideoDisplayDiv>
  `)
})
