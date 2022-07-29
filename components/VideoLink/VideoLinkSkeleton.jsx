import React from 'react'
import styled from 'styled-components'

const randomNumber = (min, max) => {
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

const SkeletonImage = styled.div`
  background-color: ${({ theme }) => theme.color.skeleton};
  aspect-ratio: 16/9;
  width:100%;
`

const SkeletonHeadingInit = () => styled.div`
  background-color: ${({ theme }) => theme.color.skeleton};
  margin-top: 12px;
  height: 2rem;
  width: ${randomNumber(50, 90)}%;
`

const SkeletonPInit = () => styled.div`
  background-color: ${({ theme }) => theme.color.skeleton};
  margin-top: 12px;
  height: 1rem;
  width: ${randomNumber(50, 90)}%;
`

const StyledVideoLinkDiv = styled.div`
  position: relative;
`

const VideoLinkSkeleton = () => {
  const SkeletonP = SkeletonPInit()
  const SkeletonHeading = SkeletonHeadingInit()
  return (
    <StyledVideoLinkDiv>
      <span>
        <SkeletonImage/>
        <SkeletonHeading type="h4"></SkeletonHeading>
        <SkeletonP></SkeletonP>
      </span>
    </StyledVideoLinkDiv>
  )
}

export default VideoLinkSkeleton
