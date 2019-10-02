import { renderToJson } from 'tooling/jest/render'
import VideoDisplay from '..'

test('renders', () => {
  expect(renderToJson(VideoDisplay)).toMatchInlineSnapshot(`
    <VideoDisplay__StyledVideoDisplayDiv>
      <VideoDisplay__StyledIframe
        allowFullScreen={true}
        frameBorder="0"
        mozallowfullscreen={true}
        src="undefined?flush=0&showHeading=0&hideBottomBar=1"
        webkitallowfullscreen={true}
      />
    </VideoDisplay__StyledVideoDisplayDiv>
  `)
})
