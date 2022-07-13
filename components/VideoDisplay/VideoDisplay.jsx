import React from 'react'
import styled from 'styled-components'
import { Player } from 'video-react'
import 'node_modules/video-react/dist/video-react.css'
import config from '../../config.json'

const StyledPlayer = styled(Player)`
  width: 100%;
  height:80vh;
  position: relative;
  top: 0;
  left: 0;
`

const StyledVideoDisplayDiv = styled.div`
  position: relative;
`

const VideoDisplay = ({ className, streamables, poster }) => (
  <StyledVideoDisplayDiv data-vjs-player>
    <StyledPlayer
      poster={poster}
      fluid={false}
      width=""
      height=""
    >
      {streamables.map(function (streamable) {
        return <source src={`${process.env.LA1TV_API_ENDPOINT || config.env.LA1TV_API_ENDPOINT}/v1/s3/${streamable.s3Bucket}/${streamable.s3Object}`} />
      })}
    </StyledPlayer>
  </StyledVideoDisplayDiv>
)

export default VideoDisplay
