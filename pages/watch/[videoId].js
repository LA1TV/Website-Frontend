import React from 'react'
import fetch from 'isomorphic-unfetch'
import Sidebar from 'layouts/Sidebar'
import VideoDisplay from 'components/VideoDisplay'
import styled from 'styled-components'
import Error from 'next/error'

const VideoName = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`

const StyledVideoDisplayDiv = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing.double};
`

const Post = ({ name, description, embed, statusCode }) => {
  if (statusCode !== 200) return <Error statusCode={statusCode} />

  const left =
    <>
      <StyledVideoDisplayDiv>
        <VideoDisplay source={embed} />
      </StyledVideoDisplayDiv>
    </>

  const right =
    <>
      <VideoName>{name}</VideoName>
      {description}
    </>

  return <Sidebar left={left} right={right} />
}

Post.getInitialProps = async ({ query: { videoId } }) => {
  const res = await fetch(`http://localhost:3000/api/watch?videoId=${videoId}`)

  const statusCode = res.status

  if (statusCode !== 200) return { statusCode }

  const response = await res.json()
  return { statusCode: 200, ...response }
}

export default Post
