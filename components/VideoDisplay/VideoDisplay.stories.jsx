import React from 'react'
import { text } from '@storybook/addon-knobs'
import styled from 'styled-components'
import VideoDisplay from '.'

const StyledDiv = styled.div`
  width: 640px
`

export default { title: 'VideoDisplay' }

export const containedVideo = () => (
  <StyledDiv>
    <VideoDisplay source={text('Source', 'https://embed.la1tv.co.uk/113/210')} />
  </StyledDiv>
)

export const fullwidthVideo = () => (
  <VideoDisplay source={text('Source', 'https://embed.la1tv.co.uk/113/210')} />
)
