import React from 'react'
import fetch from 'isomorphic-unfetch'
import Sidebar from 'layouts/Sidebar'
import Center from 'layouts/Center'
import VideoDisplay from 'components/VideoDisplay'
import styled from 'styled-components'
import Error from 'next/error'

const VideoName = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.color.primary}
`

const Post = ({ name, description, embed, statusCode }) => {
  if (statusCode !== 200) return <Error statusCode={statusCode} />

  const left =
    <>
        <VideoDisplay source={embed} />
    </>

  const right =
    <>
      <VideoName>{name}</VideoName>
      {description}
    </>

  return (
    <Center>
      <Sidebar left={left} right={right} />
    </Center>
  )
}

Post.getInitialProps = async ({ query: { videoId } }) => {
  const res = await fetch(`http://localhost:3000/api/watch?videoId=${videoId}`)

  const statusCode = res.status

  if (statusCode !== 200) return { statusCode }

  const response = await res.json()
  return { statusCode: 200, ...response }
}

export default Post
