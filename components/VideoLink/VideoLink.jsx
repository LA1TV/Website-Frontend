import React from 'react'
import styled from 'styled-components'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Link from '../Link'

const StyledImg = styled.img`
  width: 100%;
  position: relative;
  aspect-ratio: 16/9;
  background-color:${({ theme }) => theme.color.skeleton};
  top: 0;
  left: 0;
`

const StyledVideoLinkDiv = styled.div`
  position: relative;
`

const VideoLink = ({ className, title, description, poster, link }) => (
  <StyledVideoLinkDiv>
    <Link href={link}>
      <span>
        <StyledImg src={poster} />
        <Heading type="h4" overflowLine={2}>{title}</Heading>
        <Paragraph overflowLine={3}>{description}</Paragraph>
      </span>
    </Link>
  </StyledVideoLinkDiv>
)

export default VideoLink
