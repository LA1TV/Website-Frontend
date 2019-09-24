import React from 'react'
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
      src={`${source}?flush=0&showHeading=0&hideBottomBar=1`}
      frameBorder="0"
      allowFullScreen
      webkitallowfullscreen
      mozallowfullscreen />
  </StyledVideoDisplayDiv>
)

export default VideoDisplay
