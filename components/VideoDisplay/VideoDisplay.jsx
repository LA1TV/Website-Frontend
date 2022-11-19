import React from 'react'
import styled from 'styled-components'
import VideoJS from '../VideoJS'
import env from 'utilities/env'

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
    return { src: `${env('S3_DOMAIN')}/${streamable.s3Bucket}/${streamable.s3Object}`, type: streamable.type }
  })
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    sources: [newSources],
    poster: poster
  }
  return (
    <StyledVideoDisplayDiv>
      <StyledPlayer {...videoJsOptions} fluid={false} responsive={true} fill={true} autoplay={false}/>
    </StyledVideoDisplayDiv>
  )
}
export default VideoDisplay
