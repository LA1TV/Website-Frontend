import React from 'react'
import styled from 'styled-components'
import VideoJS from '../VideoJS'

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
    return { src: `${process.env.NEXT_PUBLIC_S3_DOMAIN || process.env.NEXT_PUBLIC_S3_DOMAIN}/${streamable.s3Bucket}/${streamable.s3Object}`, type: streamable.type }
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
