import React from 'react'
import styled from 'styled-components'
import VideoLink from '.'

const StyledDiv = styled.div`
  width: 640px
`

export default { title: 'VideoLink' }

export const containedVideoLink = (args) => (
  <StyledDiv>
    <VideoLink source={args} />
  </StyledDiv>
)

// text('Source', 'https://embed.la1tv.co.uk/113/210');

export const fullwidthVideoLink = (args) => (
  <VideoLink source={args} />
)

const args = { title: 'Test', description: 'Description', poster: 'http://localhost:8000/v1/s3/thumbnails/good%20owl.jpg' }

containedVideoLink.args = args
fullwidthVideoLink.args = args
