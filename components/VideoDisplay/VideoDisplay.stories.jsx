import React from 'react'
import styled from 'styled-components'
import VideoDisplay from '.'

const StyledDiv = styled.div`
  width: 640px
`

export default { title: 'VideoDisplay' }

export const containedVideo = (args) => (
  <StyledDiv>
    <VideoDisplay source={args} />
  </StyledDiv>
)

// text('Source', 'https://embed.la1tv.co.uk/113/210');

export const fullwidthVideo = (args) => (
  <VideoDisplay source={args} />
)

containedVideo.args = { source: 'https://embed.la1tv.co.uk/113/210' }
fullwidthVideo.args = { source: 'https://embed.la1tv.co.uk/113/210' }
