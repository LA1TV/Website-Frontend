import React from 'react'
import fetch from 'isomorphic-unfetch'
import Sidebar from 'layouts/Sidebar'
import Center from 'layouts/Center'
import VideoDisplay from 'components/VideoDisplay'
import Paragraph from 'components/Paragraph'
import Heading from 'components/Heading'
import Error from 'next/error'

const Post = ({ name, description, embed, statusCode }) => {
  if (statusCode !== 200) return <Error statusCode={statusCode} />

  const left = <VideoDisplay source={embed} />

  const right =
    <>
      <Heading type="h1">{name}</Heading>
      <Paragraph>{description}</Paragraph>
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
