import React from 'react'
import styled from 'styled-components'
import VideoJS from '../VideoJS'
import config from '../../config.json'

const StyledPlayer = styled(VideoJS)`
  width: 100%;
  height:80vh;
  position: relative;
  top: 0;
  left: 0;
`

const StyledVideoDisplayDiv = styled.div`
  width: 100%;
  height:80vh;
  position: relative;
`

const VideoDisplay = ({ className, streamables, poster }) => {
  const newSources = streamables.map((streamable, key) => {
    return { src: `${process.env.LA1TV_API_ENDPOINT || config.env.LA1TV_API_ENDPOINT}/v1/s3/${streamable.s3Bucket}/${streamable.s3Object}`, type: "video/mp4" }
  })
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    sources: [newSources]
  }
  return (
    <StyledVideoDisplayDiv>
      <StyledPlayer {...videoJsOptions} fluid={false} responsive={true} fill={true} />
    </StyledVideoDisplayDiv>
  )
}
export default VideoDisplay
