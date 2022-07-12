import React from 'react'
import styled from 'styled-components'
import { Player } from 'video-react';
import "node_modules/video-react/dist/video-react.css";
import config from '../../config.json'

const StyledVideo = styled.video`
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



const VideoDisplay = ({ className, streamables, poster }) => (
  <StyledVideoDisplayDiv data-vjs-player>
    <Player
     poster={poster}
     >
      {streamables.map(function(streamable) {
        return <source src={`${process.env.LA1TV_API_ENDPOINT || config.env.LA1TV_API_ENDPOINT}/v1/s3/${streamable.s3Bucket}/${streamable.s3Object}`} />
      })}
    </Player>
  </StyledVideoDisplayDiv>
)

export default VideoDisplay
