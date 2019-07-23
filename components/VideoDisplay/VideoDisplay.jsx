import React from 'react';
import styled from 'styled-components'

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const StyledVideoDisplayDiv = styled.div`
    position: relative;
    padding-bottom: calc(calc(9/16 * 100%));
`

const VideoDisplay = ({ className, source }) => (
  <StyledVideoDisplayDiv>
    <StyledIframe
      className={className}
      src={source}
      frameBorder="0"
      allowfullscreen
      webkitallowfullscreen
      mozallowfullscreen
      showHeading="0"
      flush="1"
      disableFullScreen="0" />
  </StyledVideoDisplayDiv>
);

export default VideoDisplay;