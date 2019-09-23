import { renderToJson } from "tooling/jest/render";
import VideoDisplay from "..";

test("renders", () => {
  expect(renderToJson(VideoDisplay)).toMatchInlineSnapshot(`
    <VideoDisplay__StyledVideoDisplayDiv>
      <VideoDisplay__StyledIframe
        allowFullScreen={true}
        frameBorder="0"
      />
    </VideoDisplay__StyledVideoDisplayDiv>
  `);
});
